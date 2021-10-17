import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProposalInterface, ActionsMenuInterface } from '@shared/interfaces/proposal.interface';
import { CallbackButtonInterface } from '@shared/interfaces/callback-button.interface';
import { ProposalModel } from '@shared/models/proposal.model';
import { ProposalNgrxService } from '../../ngrx/proposal/services/proposal-ngrx.service';
import { UnsubscribeService } from '../../core/services/unsubscribe/usubscribe.service';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsComponent } from './components/forms/forms.component';
import { Subject } from 'rxjs';
import { ISession } from '@app/shared/models/session.model';
import { LoginNgrxService } from '@app/ngrx/login/services/login-ngrx.service';
import { AppConfig } from '@app/config/app.config';
import { CONSTANTS } from '@app/core/utils/constants';

const OPTION_EDIT = 1;
const OPTION_CONSULT = 2;
const OPTION_COPY = 3;
const OPTION_CANCEL = 4;
const OPTION_PDF_PROPOSAL = 5;
const OPTION_PDF_RECORDS = 6;
@Component({
    selector: 'app-proposal',
    templateUrl: './proposal.component.html',
    styleUrls: ['./proposal.component.scss'],
})
export class ProposalComponent implements OnInit, OnDestroy {
    public datasources: ProposalInterface[];
    public loading: boolean;
    public datacolumns: any[];
    public callbackButtonCreate: Subject<CallbackButtonInterface> = new Subject<CallbackButtonInterface>();
    public canCreate: boolean;
    private actions: any[] = [];

    constructor(
        private readonly proposalNgrxService: ProposalNgrxService,
        private readonly subscription: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly dialog: MatDialog,
        private readonly loginService: LoginNgrxService
    ) {}

    ngOnInit(): void {
        this.proposalNgrxService.loadProposal();
        this.proposalNgrxService
            .getProposal()
            .pipe(takeUntil(this.subscription.getUnsubscribe()))
            .subscribe(({ proposals, loading }) => {
                this.datasources = proposals;
                this.loading = loading;
            });
        this.callbackButtonCreate.pipe(takeUntil(this.subscription.getUnsubscribe())).subscribe((d) => {
            this.createProposal();
        });
        this.loginService
            .getSessionData$()
            .pipe(takeUntil(this.subscription.getUnsubscribe()))
            .subscribe((session: ISession) => {
                this.hasAccess(session.role);
                this.datacolumns = this.getActionsMenu();
            });
    }

    public onActionChange({ datasource, value }: { datasource: ProposalInterface; value: ActionsMenuInterface }): void {
        switch (value.id) {
            case OPTION_CONSULT:
                this.seeOreditProposal(datasource, false);
                break;
            case OPTION_EDIT:
                this.seeOreditProposal(datasource, true);
                break;
            case OPTION_COPY:
                this.cloneProposal(datasource);
                break;
            case OPTION_CANCEL:
                this.deleteProposal(datasource.id);
                break;
            default:
                break;
        }
    }

    private cloneProposal(datasource: ProposalInterface): void {
        const proposal = Object.assign({}, datasource);
        proposal.id = proposal.id + new Date().getMilliseconds();
        this.proposalNgrxService.addProposal(proposal);
    }

    private deleteProposal(id: number): void {
        this.proposalNgrxService.deleteProposal(id);
    }

    private getActionsMenu(): any[] {
        return [
            {
                key: 'id',
                name: 'ID propuesta',
                types: { type: 'text' },
            },
            {
                key: 'description',
                name: 'Descripción',
                types: { type: 'text' },
            },
            {
                key: 'type',
                name: 'Tipo',
                types: { type: 'text' },
            },
            {
                key: 'amount',
                name: 'Importe',
                types: { type: 'money' },
            },
            {
                key: 'date',
                name: 'Fecha',
                types: { type: 'date', settings: { format: 'dd/MM/yyyy' } },
            },
            {
                key: 'status',
                name: 'Estado',
                class: 'status',
                types: { type: 'text' },
            },
            {
                key: 'options',
                name: 'Opciones',
                types: {
                    type: 'select',
                    settings: {
                        select: {
                            class: 'proposal-table__options',
                            firstOption: 'Ninguna',
                            title: 'Ver opciones',
                        },
                        listItem: [
                            ...this.actions,
                            {
                                id: OPTION_PDF_PROPOSAL,
                                name: this.translateService.instant('proposal.table.menu.pdf_proposal'),
                                icon: 'insert_drive_file',
                                disabled: true,
                            },
                            {
                                id: OPTION_PDF_RECORDS,
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

    public seeOreditProposal(proposal: ProposalInterface, isEditable?: boolean): void {
        const dialogRef = this.dialog.open(FormsComponent, {
            width: '450px',
            data: { proposal, isEditable, isToCreate: false },
        });
    }

    private createProposal(): void {
        const dialogRef = this.dialog.open(FormsComponent, {
            width: '450px',
            data: { proposal: new ProposalModel(), isEditable: true, isToCreate: true },
        });
    }

    public hasAccess(userActions: string[]) {
        userActions?.forEach((roleAction: string) => {
            if (roleAction === CONSTANTS.ROLE_PROPOSAL_CREATE || roleAction === CONSTANTS.ROLE_ADMIN) {
                this.canCreate = true;
                this.actions.push({
                    id: OPTION_COPY,
                    name: this.translateService.instant('proposal.table.menu.copy'),
                    icon: 'content_copy',
                });
            }
            if (roleAction === CONSTANTS.ROLE_PROPOSAL_READ || roleAction === CONSTANTS.ROLE_ADMIN) {
                this.actions.push({
                    id: OPTION_CONSULT,
                    name: this.translateService.instant('proposal.table.menu.consult'),
                    icon: 'search',
                });
            }
            if (roleAction === CONSTANTS.ROLE_PROPOSAL_UPDATE || roleAction === CONSTANTS.ROLE_ADMIN) {
                this.actions.push({
                    id: OPTION_EDIT,
                    name: this.translateService.instant('proposal.table.menu.edit'),
                    icon: 'edit',
                });
            }
            if (roleAction === CONSTANTS.ROLE_PROPOSAL_DELETE || roleAction === CONSTANTS.ROLE_ADMIN) {
                this.actions.push({
                    id: OPTION_CANCEL,
                    name: this.translateService.instant('proposal.table.menu.delete'),
                    icon: 'delete',
                });
            }
        });
    }

    ngOnDestroy(): void {
        this.proposalNgrxService.resetProposal();
        this.subscription.unsubscribe();
    }
}
