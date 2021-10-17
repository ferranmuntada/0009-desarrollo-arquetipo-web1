import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISession } from '@shared/models/session.model';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from '@app/core/services/unsubscribe/usubscribe.service';
import { NavigationEnd, Router } from '@angular/router';
import { RouteService } from '@app/core/services/route/route.service';
import { AppConfig } from '@app/config/app.config';
import { LoginNgrxService } from '../../../ngrx/login/services/login-ngrx.service';
import { NavigationInterface } from '../../../shared/interfaces/navigation.interface';
import { HeaderModel } from '../../../shared/models/header.model';
import { ClientNgrxService } from '../../../ngrx/client/services/client-ngrx.service';
import { HeaderInterface } from '../../../shared/interfaces/header.interface';
import { combineLatest } from 'rxjs';
import { ClientState } from '@app/ngrx/client/client.reducer';
import { MatDialog } from '@angular/material/dialog';
import { MifidModalComponent } from './components/mifid-modal/mifid-modal.component';

/**
 *
 * Componente header de ejemplo.
 *
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    public isHeaderVisible: boolean;
    public menuItems: NavigationInterface[] = [];
    public headerModel: HeaderInterface;

    constructor(
        private readonly loginService: LoginNgrxService,
        private readonly unsubscribe: UnsubscribeService,
        private readonly routeService: RouteService,
        private readonly router: Router,
        private readonly clientNgrxService: ClientNgrxService,
        private readonly dialog: MatDialog
    ) {
        this.isHeaderVisible = true;
    }

    ngOnInit(): void {
        const client$ = this.clientNgrxService.getClient();
        const session$ = this.loginService.getSessionData$();
        const allData$ = combineLatest([session$, client$]);

        allData$.pipe(takeUntil(this.unsubscribe.getUnsubscribe())).subscribe(([session, { client }]: [ISession, ClientState]) => {
            const isValid = session && session.isValid;
            if (!isValid) {
                this.logout();
                return false;
            }

            if (!client?.id) {
                this.router.navigate([`/${AppConfig.APP_ROUTE_HOME}`]);
                return false;
            }

            this.headerModel = new HeaderModel(client);
            this.menuItems = this.headerModel.getHeaderSettings(session.role);
        });

        this.routeService.getCurrentRoute().subscribe((route: NavigationEnd) => {
            this.isHeaderVisible = route.urlAfterRedirects !== `/${AppConfig.APP_ROUTE_HOME.valueOf()}`;
            this.menuItems.map((item) => {
                if (route.urlAfterRedirects.toLocaleLowerCase().trim().includes(`/${item.navigation.toLocaleLowerCase().trim()}`)) {
                    item.class = 'active';
                }
            });
        });
    }

    public logout(): void {
        this.loginService.logout();
    }

    public backButtonAction(): void {
        this.router.navigate([`${AppConfig.APP_ROUTE_HOME.valueOf()}`]);
    }

    public navigationAction(event: NavigationInterface): void {
        this.router.navigate([`/${event.navigation}`]);
    }

    public informationUserAction(): void {
        this.dialog.open(MifidModalComponent, {
            width: '1200px',
            maxHeight: '90vh',
        });
    }

    ngOnDestroy(): void {
        this.clientNgrxService.resetClient();
        this.unsubscribe.unsubscribe();
    }
}
