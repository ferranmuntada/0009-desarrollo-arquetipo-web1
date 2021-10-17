import { AfterViewInit, ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientsNgrxService } from '@app/ngrx/clients/services/clients-ngrx.service';
import { UnsubscribeService } from '@app/core/services/unsubscribe/usubscribe.service';
import { Router } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { takeUntil } from 'rxjs/operators';
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, AfterViewInit, OnDestroy {
    public showTemplateStep6 = true;
    public hiringCallback = new Subject<boolean>();
    public amountCallback = new Subject<boolean>();
    public linkAmount: { disabled: boolean; show: boolean; callback: Subject<boolean> };
    public linkHiring: { disabled: boolean; show: boolean; callback: Subject<boolean> };

    constructor(
        private cd: ChangeDetectorRef,
        private readonly subscriptionService: UnsubscribeService,
        private readonly clientsNgrxService: ClientsNgrxService,
        private readonly router: Router
    ) {
        this.linkAmount = {
            disabled: true,
            show: false,
            callback: this.amountCallback,
        };
        this.linkHiring = {
            disabled: false,
            show: false,
            callback: this.hiringCallback,
        };
    }

    ngOnInit(): void {
        this.clientsNgrxService.loadClients();
        this.hiringCallback.pipe(takeUntil(this.subscriptionService.getUnsubscribe())).subscribe(() => {
            this.showTemplateStep6 = false;
            this.linkAmount.disabled = false;
            this.linkHiring.disabled = true;
        });
        this.amountCallback.pipe(takeUntil(this.subscriptionService.getUnsubscribe())).subscribe(() => {
            this.showTemplateStep6 = false;
            this.linkAmount.disabled = true;
            this.linkHiring.disabled = false;
        });
    }

    ngAfterViewInit(): void {
        this.cd.detectChanges();
    }

    public closeActionEmit(): void {
        this.router.navigate([`/${AppConfig.APP_ROUTE_PROPOSAL}`]);
    }

    public saveActionEmit(): void {
        console.log('saveActionEmit');
    }

    public onSelect(event: Event | any): void {
        if (event.panel.index === 5) {
            this.linkHiring.show = true;
            this.linkHiring.disabled = false;
            this.linkAmount.show = true;
            this.linkAmount.disabled = false;
        } else {
            this.linkHiring.show = false;
            this.linkHiring.disabled = true;
            this.linkAmount.show = false;
            this.linkAmount.disabled = true;
        }
        this.showTemplateStep6 = true;
    }

    ngOnDestroy(): void {
        this.clientsNgrxService.resetClients();
        this.subscriptionService.unsubscribe();
    }
}
