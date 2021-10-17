import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume-modal',
    templateUrl: './resume-modal.component.html',
    styleUrls: ['./resume-modal.component.scss'],
})
export class ResumeModalComponent implements OnInit {
    public listItemDay = [
        {
            name: '30',
        },
        {
            name: '31',
        },
    ];
    public settingsDay = {
        firstOption: 'Ninguna',
        title: 'Día',
    };
    public listItemType = [
        {
            name: 'Mensual',
        },
        {
            name: 'Semanal',
        },
    ];
    public settingsType = {
        firstOption: 'Ninguna',
        title: 'Periodicidad',
    };
    public datasource: any;
    public datacolumn: any;

    constructor() {
        this.datasource = [
            {
                name: 'Challenge cyclical Equality L',
                isin: 'LU011909574',
                percent: '25%',
                amount: 4500,
            },
            {
                name: 'Best Brands Fidelity Asian Co Sel L',
                isin: 'ES351420574',
                percent: '12,5%',
                amount: 2250,
            },
            {
                name: 'Best Brands Morgan Stanley Global Sel L',
                isin: 'ES141459574',
                percent: '12,5%',
                amount: 2250,
            },
        ];
        this.datacolumn = [
            {
                key: 'name',
                name: 'Nombre y Apellidos',
                types: { type: 'text' },
            },
            {
                key: 'isin',
                name: 'ISIN',
                types: { type: 'text' },
            },
            {
                key: 'percent',
                name: 'Porcentaje',
                types: { type: 'text' },
            },
            {
                key: 'amount',
                name: 'Importe',
                types: { type: 'currency' },
            },
        ];
    }

    ngOnInit(): void {}
}
