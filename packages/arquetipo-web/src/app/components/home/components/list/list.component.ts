import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { IClientInterface } from '../../../../shared/interfaces/client.interface';
import { ClientState } from '../../../../ngrx/clients/clients.reducer';
import { UnsubscribeService } from '@app/core/services/unsubscribe/usubscribe.service';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';
import { ClientsNgrxService } from '@ngrx-app/clients/services/clients-ngrx.service';
import { ClientNgrxService } from '../../../../ngrx/client/services/client-ngrx.service';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
    @Input() textToFilter: string;

    public clients: IClientInterface[];
    public loading: boolean;
    public settingsSelect = {
        firstOption: 'Ninguna',
        title: 'Propuestas',
        listItemSelect: [
            {
              id: 0,
              name: 'Propuesta 1',
            },
            {
              id: 1,
              name: 'Propuesta 2',
            },
            {
              id: 2,
              name: 'Propuesta 3',
            },
            {
              id: 3,
              name: 'Propuesta 4',
            },
            {
              id: 4,
              name: 'Propuesta 5',
            },
        ]
    };

    constructor(
        private readonly clientsService: ClientsNgrxService,
        private readonly subscriptionService: UnsubscribeService,
        private readonly router: Router,
        private readonly clientNgrxService: ClientNgrxService
    ) {}

    ngOnInit(): void {
        this.clientsService
            .getClients$()
            .pipe(takeUntil(this.subscriptionService.getUnsubscribe()))
            .subscribe(({ clients, loading }: ClientState) => {
                this.clients = clients;
                this.loading = loading;
            });
    }

    public userProposal({ proposal, user }: { proposal: any; user: IClientInterface }): void {
        this.clientNgrxService.loadClient(user, proposal);
        this.router.navigate([`${AppConfig.APP_ROUTE_HERITAGE.valueOf()}`]);
    }

    public ngOnDestroy(): void {
        this.clientsService.resetClients();
        this.subscriptionService.unsubscribe();
    }
}
