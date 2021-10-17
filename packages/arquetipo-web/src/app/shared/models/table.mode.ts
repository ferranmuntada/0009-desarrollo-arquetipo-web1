import { TableColumnInterface } from '../interfaces/table.interface';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

export class TableModel {
    private buttonOthersCallback: Subject<any> = new Subject<any>();

    constructor(private readonly translateService: TranslateService) {}

    public getColumnsPrincipal(): TableColumnInterface[] {
        return [
            {
                key: 'name',
                name: 'Nombre y Apellidos',
                types: { type: 'text' },
            },
            {
                key: 'dni',
                name: 'DNI',
                types: { type: 'text' },
            },
            {
                key: 'rol',
                name: 'Rol',
                types: {
                    type: 'select',
                    settings: {
                        select: {
                            class: '',
                            firstOption: 'Ninguna',
                            title: 'opciones',
                        },
                        listItem: [
                            {
                                id: 'titular',
                                name: 'Titular',
                            },
                            {
                                id: 'cotitular',
                                name: 'Cotitular',
                            },
                        ],
                    },
                },
            },
            {
                hidden: true,
                key: 'seeProfile',
                name: '',
                types: { type: 'link' },
            },
        ];
    }

    public getColumnsOthers(): TableColumnInterface[] {
        return [
            {
                key: 'name',
                name: 'Nombre y Apellidos',
                types: { type: 'text' },
            },
            {
                key: 'dni',
                name: 'DNI',
                types: { type: 'text' },
            },
            {
                key: 'rol',
                name: 'Rol',
                types: {
                    type: 'select',
                    settings: {
                        select: {
                            class: '',
                            firstOption: 'Ninguna',
                            title: 'opciones',
                        },
                        listItem: [
                            {
                                id: 'titular',
                                name: 'Titular',
                            },
                            {
                                id: 'cotitular',
                                name: 'Cotitular',
                            },
                        ],
                    },
                },
            },
            {
                key: 'delete',
                name: '',
                types: {
                    type: 'button',
                    settings: {
                        icon: 'delete',
                        classButton: '',
                        callback: this.buttonOthersCallback,
                    },
                },
            },
            {
                key: 'seeProfile',
                name: '',
                types: { type: 'link' },
            },
        ];
    }

    public getDatasource(): any {
        return [
            {
                name: 'Jose Manuel Pérez',
                dni: '789234456-L',
                rol: 'titular',
                url: 'https://www.google.es',
                seeProfile: 'Ver perfil',
            },
        ];
    }

    public getSelectSettings(): any {
        return {
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
            ],
        };
    }

    public getDatasourceProductos(): any {
        return [
            {
                product: 'FUTURO EXTRA PIAS (PAC)',
                isin: '-',
                type: 'PIAS',
                modality: 'PAC',
            },
        ];
    }

    public getColumnProductos(): any {
        return [
            {
                key: 'product',
                name: 'Producto',
                types: { type: 'text' },
            },
            {
                key: 'isin',
                name: 'ISIN',
                types: { type: 'text' },
            },
            {
                key: 'type',
                name: 'Tipo',
                types: { type: 'text' },
            },
            {
                key: 'modality',
                name: 'Modalidad de inversión',
                types: { type: 'text' },
            },
            {
                hidden: true,
                key: 'delete',
                name: '',
                types: {
                    type: 'button',
                    settings: {
                        icon: 'delete',
                        classButton: '',
                        callback: this.buttonOthersCallback,
                    },
                },
            },
        ];
    }

    public getDatasourceProductInversion(): any {
        return [
            {
                product: 'Best Brands Equilibrium Hedged LB (Clase Reparto)',
                isin: 'IE00BVL88H21',
                type: 'Best Brand',
                modality: 'Big chance',
            },
            {
                product: 'Best Brands Equilibrium Hedged LB (Clase Reparto)',
                isin: 'IE00BVL88G14',
                type: 'Best Brand',
                modality: 'Big chance',
            },
        ];
    }

    public getColumnProductInversion(): any {
        return [
            {
                key: 'product',
                name: 'Producto',
                types: { type: 'text' },
            },
            {
                key: 'isin',
                name: 'ISIN',
                types: { type: 'text' },
            },
            {
                key: 'type',
                name: 'Tipo',
                types: { type: 'text' },
            },
            {
                key: 'modality',
                name: 'Modalidad de inversión',
                types: { type: 'text' },
            },
            {
                hidden: true,
                key: 'delete',
                name: '',
                types: {
                    type: 'button',
                    settings: {
                        icon: 'delete',
                        classButton: '',
                        callback: this.buttonOthersCallback,
                    },
                },
            },
        ];
    }

    public getDatasourceProductsSearch(): any {
        return [
            {
                fond: 'Best Brands Dynamic Collection "L"',
                isin: 'IE00320850495',
                type: 'Best Brand',
                category: 'Multi asset Flexible',
                hedged: 'NO',
                deal: 'NO',
                risk: 'Medio',
                horiz: 'Medio',
            },
            {
                fond: 'Best Brands Dynamic Collection HD "L"',
                isin: 'IE003BFoS24',
                type: 'Best Brand',
                category: 'Multi asset Flexible',
                hedged: 'NO',
                deal: 'NO',
                risk: 'Medio',
                horiz: 'Medio',
            },
            {
                fond: 'Best Brands Dynamic International Value Opportunity (D.I.V.O.) L-A',
                isin: 'IE00320850495',
                type: 'Best Brand',
                category: 'Multi asset Flexible',
                hedged: 'NO',
                deal: 'NO',
                risk: 'Medio',
                horiz: 'Medio',
            },
        ];
    }

    public getColumnProductosSearch(): any {
        return [
            {
                key: 'fond',
                name: 'Fondo',
                types: { type: 'text' },
            },
            {
                key: 'isin',
                name: 'ISIN',
                types: { type: 'text' },
            },
            {
                key: 'type',
                name: 'Tipo de producto',
                types: { type: 'text' },
            },
            {
                key: 'category',
                name: 'Categoría Mediolanum',
                types: { type: 'text' },
            },
            {
                key: 'hedged',
                name: 'Hedged',
                types: { type: 'text' },
            },
            {
                key: 'deal',
                name: 'Reparto',
                types: { type: 'text' },
            },
            {
                key: 'risk',
                name: 'Riesgo',
                types: { type: 'text' },
            },
            {
                key: 'horiz',
                name: 'Horiz.',
                types: { type: 'text' },
            },
            {
                key: 'objective',
                name: 'Objetivo Inversion',
                types: {
                    type: 'select',
                    settings: {
                        select: {
                            class: 'proposal-table__options',
                            firstOption: 'Ninguna',
                            title: 'Ver opciones',
                        },
                        listItem: [
                            {
                                id: 0,
                                name: this.translateService.instant('proposal.table.menu.edit'),
                                icon: 'edit',
                            },
                            {
                                id: 1,
                                name: this.translateService.instant('proposal.table.menu.consult'),
                                icon: 'search',
                            },
                            {
                                id: 2,
                                name: this.translateService.instant('proposal.table.menu.copy'),
                                icon: 'content_copy',
                            },
                            {
                                id: 3,
                                name: this.translateService.instant('proposal.table.menu.delete'),
                                icon: 'delete',
                            },
                            {
                                id: 4,
                                name: this.translateService.instant('proposal.table.menu.pdf_proposal'),
                                icon: 'insert_drive_file',
                                disabled: true,
                            },
                            {
                                id: 5,
                                name: this.translateService.instant('proposal.table.menu.pdf_records'),
                                icon: 'insert_drive_file',
                                disabled: true,
                            },
                        ],
                    },
                },
            },
        ];
    }

    public getButtonSubject(): Subject<any> {
        return this.buttonOthersCallback;
    }
}
