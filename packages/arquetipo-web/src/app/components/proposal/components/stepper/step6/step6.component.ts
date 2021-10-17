import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnsubscribeService } from '@app/core/services/unsubscribe/usubscribe.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AditionalSettingsComponent } from '../../aditional-settings/aditional-settings.component';
import { ProposalHeadlinesModalComponent } from '../../proposal-headlines-modal/proposal-headlines-modal.component';
import { ResumeModalComponent } from '../../resume-modal/resume-modal.component';

@Component({
    selector: 'app-step6',
    templateUrl: './step6.component.html',
    styleUrls: ['./step6.component.scss'],
})
export class Step6Component implements OnInit, OnDestroy {
    @Input() public linkHiring: any;
    @Input() public linkAmount: any;
    @Input() public showTemplateStep6: boolean;
    public settings: {
        firstOption: 'Ninguna';
        title: 'Ver todos';
    };
    public listItem: any;
    public messageAlertSettings: any;
    public listRadioButtonStep6: any;
    public settingsCheckBox: { title: string; checked?: boolean; id?: string | number }[];
    public settingsCheckBoxDates: { title: string; checked?: boolean; id?: string | number }[];
    public datasourceStep6Hiring: any;
    public datacolumnsStep6Hiring: any;
    public costsCallback = new Subject<any>();
    public headlineProposalCallback = new Subject<any>();
    public resumeCallback = new Subject<any>();
    public datasourcesCosts = [];
    public datacolumnsCosts = [];

    constructor(
        private readonly translateService: TranslateService,
        private readonly subscriptionService: UnsubscribeService,
        private readonly dialog: MatDialog
    ) {
        this.listItem = this.getListItemSelect();
        this.messageAlertSettings = this.getMessageAlertSettings();
        this.listRadioButtonStep6 = [{ text: 'NO', checked: true }, { text: 'SI' }];
        this.settingsCheckBox = this.getSettingCheckbox();
        this.settingsCheckBoxDates = [{ title: 'Cita 25/01/2019 13:00' }, { title: 'Cita 26/01/2019 14:00', checked: true }];
        this.datasourceStep6Hiring = this.getDatasourceHiring();
        this.datacolumnsStep6Hiring = this.getDataColumnHiring();
        this.datasourcesCosts = this.getDatasourcesCosts();
        this.datacolumnsCosts = this.getDataColumnCosts();
    }

    ngOnInit(): void {
        this.costsCallback.pipe(takeUntil(this.subscriptionService.getUnsubscribe())).subscribe(() => {
            this.dialog.open(AditionalSettingsComponent, {
                width: '450px',
            });
        });

        this.resumeCallback.pipe(takeUntil(this.subscriptionService.getUnsubscribe())).subscribe(() => {
            this.dialog.open(ResumeModalComponent, {
                width: '800px',
            });
        });

        this.headlineProposalCallback.pipe(takeUntil(this.subscriptionService.getUnsubscribe())).subscribe(() => {
            this.dialog.open(ProposalHeadlinesModalComponent, {
                width: '800px',
            });
        });
    }

    public actionRadioButton(event: Event): void {
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

    private getMessageAlertSettings(): any {
        return {
            matIcon: 'warning',
            textStart: 'Tienes pendiente de asignar un representante legal a la propuesta. Accede al paso de ',
            textEnd: ' para solventarlo.',
            link: {
                text: 'Titulares',
                href: 'https://www.google.es',
                target: '__blank',
            },
        };
    }

    private getSettingCheckbox(): any {
        return [
            { title: 'Best Brand Emerging Mkts Collection "L"' },
            { title: 'Challenge Cyclical Equity Fund "L"', checked: true },
            { title: 'Fidelity America Fund A Acc EUR', checked: true },
            { title: 'Carmignac Emergents A Eur Acc', checked: true },
            { title: 'Investco Pan Eurpean High Income FUnd C Eur Acc', checked: true },
        ];
    }

    private getDatasourceHiring(): any {
        return [
            {
                operation: 'Contratación',
                modality: 'Big Chance',
                service: 'Best Brands',
                amount: 4000,
                status: 'Finalizada',
                accordion: {
                    datasources: this.getDatasourcesAccordion(),
                    datacolumns: this.getDataColumnAccordion(),
                },
            },
            {
                operation: 'Contratación',
                modality: 'Big Chance',
                service: 'Best Brands',
                amount: 4000,
                status: 'En curso',
                accordion: {
                    datasources: this.getDatasourcesAccordion(),
                    datacolumns: this.getDataColumnAccordion(),
                },
            },
            {
                operation: 'Aportación',
                modality: 'PIC',
                service: 'Best Brands',
                amount: 4000,
                status: 'Operación no multicanal',
                accordion: {
                    datasources: this.getDatasourcesAccordion(),
                    datacolumns: this.getDataColumnAccordion(),
                },
            },
        ];
    }

    private getDataColumnHiring(): any {
        return [
            {
                key: 'operation',
                name: 'Operación',
                types: { type: 'text' },
            },
            {
                key: 'modality',
                name: 'Modalidad',
                types: { type: 'text' },
            },
            {
                key: 'headlines',
                name: 'Titulares',
                types: {
                    type: 'button',
                    settings: {
                        icon: 'person',
                        classButton: '',
                        callback: this.headlineProposalCallback,
                    },
                },
            },
            {
                key: 'resume',
                name: 'Resumen',
                types: {
                    type: 'button',
                    settings: {
                        icon: 'notes',
                        classButton: '',
                        callback: this.resumeCallback,
                    },
                },
            },
            {
                key: 'destiny',
                name: 'Identificación del destino',
                types: {
                    type: 'select',
                    settings: {
                        select: {
                            class: '',
                            firstOption: 'Ninguna',
                            title: 'Ver opciones',
                        },
                        listItem: [
                            {
                                id: 0,
                                name: this.translateService.instant('proposal.table.menu.edit'),
                            },
                            {
                                id: 1,
                                name: this.translateService.instant('proposal.table.menu.consult'),
                            },
                        ],
                    },
                },
            },
            {
                key: 'multiChanel',
                name: 'Multicanalidad',
                types: {
                    type: 'toggle',
                    settings: {
                        label: 'Si',
                    },
                },
            },
            {
                key: 'service',
                name: 'Servicio',
                types: { type: 'text' },
            },
            {
                key: 'amount',
                name: 'Importe del contrato',
                types: { type: 'money' },
            },
            {
                key: 'status',
                name: 'Estado',
                types: { type: 'text' },
            },
            {
                key: 'settings',
                name: 'Características Adicionales',
                types: {
                    type: 'button',
                    settings: {
                        icon: 'settings',
                        classButton: '',
                        callback: this.costsCallback,
                    },
                },
            },
        ];
    }

    private getDatasourcesCosts(): any {
        return [
            {
                comision: 'Mediolanum Activo S-A',
                accordion: {
                    datasources: this.getDatasourcesAccordionCosts(),
                    datacolumns: this.getDataColumnAccordionCosts(),
                },
            },
            {
                comision: 'Mediolanum Activo S-A',
                accordion: {
                    datasources: this.getDatasourcesAccordionCosts(),
                    datacolumns: this.getDataColumnAccordionCosts(),
                },
            },
        ];
    }

    private getDataColumnCosts(): any {
        return [
            {
                key: 'comision',
                name: 'Comisiones Iniciales Percibidas Banco',
                types: { type: 'text' },
            },
            {
                key: 'costs',
                name: 'Costes recurrentes del producto',
                types: { type: 'text' },
            },
            {
                key: 'bank',
                name: 'Costes recurrentes percibidos Banco',
                types: { type: 'text' },
            },
            {
                key: 'service',
                name: 'Costes del servicio',
                types: { type: 'text' },
            },
        ];
    }

    private getDataColumnAccordion(): any {
        return [
            {
                key: 'origin',
                name: 'Origen',
                types: { type: 'text' },
            },
            {
                key: 'destiny',
                name: 'Destino',
                types: { type: 'text' },
            },
            {
                key: 'available',
                name: 'Disponible',
                types: { type: 'money' },
            },
            {
                key: 'proposed',
                name: 'Propuesto',
                types: { type: 'money' },
            },
            {
                key: 'multichanel',
                name: 'Multicanalidad',
                types: {
                    type: 'toggle',
                    settings: {
                        label: 'Si',
                    },
                },
            },
            {
                key: 'operation',
                name: 'Operación',
                types: { type: 'text' },
            },
            {
                key: 'status',
                name: 'Estado',
                types: { type: 'text' },
            },
            {
                key: 'documentation',
                name: 'Documentación',
                types: {
                    type: 'button',
                    settings: {
                        icon: 'insert_drive_file',
                        callback: new Subject(),
                    },
                },
            },
        ];
    }

    private getDataColumnAccordionCosts(): any {
        return [
            {
                key: 'comision',
                name: '',
                types: { type: 'text' },
            },
            {
                key: 'costs',
                name: '',
                types: { type: 'text' },
            },
            {
                key: 'bank',
                name: '',
                types: { type: 'text' },
            },
            {
                key: 'service',
                name: '',
                types: { type: 'text' },
            },
        ];
    }

    private getDatasourcesAccordionCosts(): any {
        return [
            {
                comision: '0% 0€',
                costs: '0,44% 39,65€',
                bank: '0,45% 41,35€',
                service: '0% 0€',
            },
            {
                comision: '0% 0€',
                costs: '0,44% 39,65€',
                bank: '0,45% 41,35€',
                service: '0% 0€',
            },
        ];
    }

    private getDatasourcesAccordion(): any {
        return [
            {
                origin: 'Cuenta corriente ES64.98.76.0987.12.1234567890',
                destiny: 'Challenge Cyclical Equity L.',
                available: 50000000,
                proposed: 50000000,
                operation: 'Realizar traspaso/Transferencia Acción directa del cliente',
                status: 'Pendiente de iniciarse',
            },
            {
                origin: 'Cuenta corriente ES64.98.76.0987.12.1234567890',
                destiny: 'Challenge Cyclical Equity L.',
                available: 50000000,
                proposed: 50000000,
                operation: 'Realizar traspaso/Transferencia Acción directa del cliente',
                status: 'Pendiente de iniciarse',
            },
        ];
    }

    ngOnDestroy(): void {
        this.subscriptionService.unsubscribe();
    }
}
