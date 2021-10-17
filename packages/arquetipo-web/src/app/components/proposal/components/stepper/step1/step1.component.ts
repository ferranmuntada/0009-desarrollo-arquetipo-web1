import { Component, OnDestroy, OnInit } from '@angular/core';
import { UnsubscribeService } from '@app/core/services/unsubscribe/usubscribe.service';
import { ClientState } from '@app/ngrx/clients/clients.reducer';
import { ClientsNgrxService } from '@app/ngrx/clients/services/clients-ngrx.service';
import { IClientInterface } from '@app/shared/interfaces/client.interface';
import { TableModel } from '@app/shared/models/table.mode';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit, OnDestroy {
    public buttonOthersCallback: Subject<any> = new Subject<any>();
    public datasourcesPrincipal: any[];
    public datacolumnsPrincipal: any[];
    public datacolumnsOthers: any[];
    public clients: IClientInterface[];
    public loading: boolean;
    public textSearch: string;
    public settingsSelect: { firstOption: string; title: string; listItemSelect: Array<{ id: number; name: string }> };
    private table = new TableModel(this.translateService);

    constructor(
        private readonly clientsService: ClientsNgrxService,
        private readonly subscriptionService: UnsubscribeService,
        private readonly translateService: TranslateService
    ) {
        this.datasourcesPrincipal = this.table.getDatasource();
        this.datacolumnsPrincipal = this.table.getColumnsPrincipal();
        this.datacolumnsOthers = this.table.getColumnsOthers();
        this.settingsSelect = this.table.getSelectSettings();
    }

    ngOnInit(): void {
        this.clientsService
            .getClients$()
            .pipe(takeUntil(this.subscriptionService.getUnsubscribe()))
            .subscribe(({ clients, loading }: ClientState) => {
                this.clients = clients.map((client) => ({ ...client, nif: '23456789-L' }));
                this.loading = loading;
            });
        this.table
            .getButtonSubject()
            .pipe(takeUntil(this.subscriptionService.getUnsubscribe()))
            .subscribe((value: any) => console.log(value));
    }

    ngOnDestroy(): void {
        this.subscriptionService.unsubscribe();
    }
}
