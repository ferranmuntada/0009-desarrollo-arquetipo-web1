import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HeritageModel } from '../../shared/models/heritage.model';
import { UnsubscribeService } from '../../core/services/unsubscribe/usubscribe.service';
import { takeUntil, filter } from 'rxjs/operators';
import { ClientNgrxService } from '@app/ngrx/client/services/client-ngrx.service';

@Component({
    selector: 'app-heritage',
    templateUrl: './heritage.component.html',
    styleUrls: ['./heritage.component.scss'],
})
export class HeritageComponent implements OnInit {
    public totalHeritage = 0;
    public chartOptions: Partial<any>;
    public statusTextToggleSettings: { first: string; second: string };
    public settingsCheckBox: { title: string; checked: boolean; id: string | number; callBack: Observable<boolean> }[];
    public heritageModel: HeritageModel;
    public settingsChart = {
        colors: ['#85e3d1', '#3bcaaf', '#1ea78d', '#19816d', '#8471d6', '#2fb8de'],
        series: [2378, 2165, 2333, 1852, 2456, 2154],
        labels: [
            'Inversiones en forma de Seguro de Vida',
            'Fondos de Inversión',
            'Inversiones bancarias',
            'Inversiones de Área de valores',
            'Jubilación',
            'Servicios Bancarios',
        ],
        popupText: 'Dinero invertido',
        total: 1345567.16,
    };
    private callback = new Subject<any>();
    public settingsButton = {
        text: 'SIGUIENTE',
        classButton: 'secondary',
        isDisabled: true,
        callback: this.callback,
        isSquare: false,
        icon: '',
    };

    constructor(private readonly subscription: UnsubscribeService, private readonly clientNgrxService: ClientNgrxService) {
        this.heritageModel = new HeritageModel();
    }

    ngOnInit(): void {
        this.clientNgrxService
            .getClient()
            .pipe(takeUntil(this.subscription.getUnsubscribe()))
            .pipe(filter(({ client }) => client !== null))
            .subscribe(({ client }) => {
                this.totalHeritage = client.patrimony;
                this.chartOptions = this.heritageModel.getChartOptions(this.totalHeritage);
            });
        this.statusTextToggleSettings = this.heritageModel.getSettingsToggle();
        this.settingsCheckBox = this.heritageModel.getSettingsCheckBox();

        this.heritageModel
            .getActionMediolanumSubject()
            .pipe(takeUntil(this.subscription.getUnsubscribe()))
            .subscribe((action: boolean) => {
                console.log(action);
            });
        this.heritageModel
            .getActionOtherEntitiesSubject()
            .pipe(takeUntil(this.subscription.getUnsubscribe()))
            .subscribe((action: boolean) => {
                console.log(action);
            });
        this.heritageModel
            .getActionAllHeritageSubject()
            .pipe(takeUntil(this.subscription.getUnsubscribe()))
            .subscribe((action: boolean) => {
                console.log(action);
            });
        this.callback.subscribe((value) => console.log(value));
    }
}
