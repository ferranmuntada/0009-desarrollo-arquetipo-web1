import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-proposal-headlines-modal',
    templateUrl: './proposal-headlines-modal.component.html',
    styleUrls: ['./proposal-headlines-modal.component.scss'],
})
export class ProposalHeadlinesModalComponent implements OnInit {
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
                name: 'Jose Javier Zuela-Reales Garcia',
                dni: '26285254K',
                rol: 'Titular',
            },
        ];
        this.datacolumn = [
            {
                key: 'name',
                name: 'Nombre',
                types: { type: 'text' },
            },
            {
                key: 'dni',
                name: 'DNI',
                types: { type: 'text' },
            },
            {
                key: 'rol',
                name: 'ROL',
                types: { type: 'text' },
            },
            {
                key: 'status',
                name: 'Estado',
                types: {
                    type: 'toggle',
                    settings: {
                        label: 'Activo',
                    },
                },
            },
        ];
    }

    ngOnInit(): void {}
}
