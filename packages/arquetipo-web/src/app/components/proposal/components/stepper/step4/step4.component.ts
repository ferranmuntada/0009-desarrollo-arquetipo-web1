import { Component, OnInit } from '@angular/core';
import { TableModel } from '@app/shared/models/table.mode';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-step4',
    templateUrl: './step4.component.html',
    styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
    public datasourceStepProducts: any;
    public datacolumnsStepProducts: any;
    public buttonOthersCallback: Subject<any> = new Subject<any>();
    public datasourceStepProductsInversion: any;
    public datacolumnsStepProductsInversion: any;
    public buttonBigStandardCallback: Subject<any> = new Subject<any>();
    public settingsSearch: { textInputDefault: 'Buscar por nombre o ISIN'; icon: 'search' };
    public settings = {
        firstOption: 'Ninguna',
        title: 'Ver todos',
    };
    public listItem: any;
    public datasourceStepProductsSearch: any;
    public datacolumnsStepProductsSerach: any;
    private table = new TableModel(this.translateService);

    constructor(private readonly translateService: TranslateService) {
        this.datasourceStepProducts = this.table.getDatasourceProductos();
        this.datacolumnsStepProducts = this.table.getColumnProductos();
        this.datasourceStepProductsInversion = this.table.getDatasourceProductInversion();
        this.datacolumnsStepProductsInversion = this.table.getColumnProductInversion();
        this.listItem = this.getListItemSelect();
        this.datasourceStepProductsSearch = this.table.getDatasourceProductsSearch();
        this.datacolumnsStepProductsSerach = this.table.getColumnProductosSearch();
    }

    ngOnInit(): void {
        this.buttonBigStandardCallback.subscribe((d) => console.log(d));
    }

    public actionBigButton(event: Event): void {
        console.log(event);
    }

    public changesActionSearch(event: Event): void {
        console.log(event);
    }

    private getListItemSelect(): any {
        return [
            {
                name: 'nombre 1',
                icon: 'edit',
                id: 1,
                disabled: true,
            },
            {
                name: 'nombre 2',
                icon: '',
                id: 2,
            },
            {
                name: 'nombre 3',
                icon: '',
                id: 3,
            },
            {
                name: 'nombre 4',
                icon: '',
                id: 4,
            },
        ];
    }
}
