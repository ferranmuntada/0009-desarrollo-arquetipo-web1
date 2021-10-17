import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProposalInterface } from '@app/shared/interfaces/proposal.interface';
import { ProposalNgrxService } from '@app/ngrx/proposal/services/proposal-ngrx.service';
import { ProposalModel } from '../../../../shared/models/proposal.model';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
    public formGroupProposal!: FormGroup;
    public isEditable: boolean;

    constructor(
        private readonly formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<FormsComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: { proposal: ProposalInterface; isEditable: boolean; isToCreate?: boolean },
        private readonly proposalNgrxService: ProposalNgrxService
    ) {}

    ngOnInit(): void {
        this.datasourceForms();
    }

    private datasourceForms(): void {
        const { proposal, isEditable } = this.data;
        const proposalModal = new ProposalModel(proposal);
        this.isEditable = isEditable;

        this.formGroupProposal = this.formBuilder.group({
            id: [proposalModal.id],
            description: [{ value: proposalModal.description, disabled: !this.isEditable }],
            type: [{ value: proposalModal.type, disabled: !this.isEditable }],
            amount: [{ value: proposalModal.amount, disabled: !this.isEditable }],
            date: [{ value: proposalModal.date, disabled: !this.isEditable }],
            status: [{ value: proposalModal.status, disabled: !this.isEditable }, Validators.required],
        });
    }

    public onSubmit(): void {
        const { isToCreate } = this.data;
        const proposal = this.formGroupProposal.value;
        if (!isToCreate) {
            const proposalUpdated = Object.assign({}, { ...proposal });
            this.proposalNgrxService.updateProposal(proposal.id, proposalUpdated);
        } else {
            proposal.id = new Date().getMilliseconds();
            this.proposalNgrxService.addProposal(proposal);
        }
        this.dialogRef.close();
    }

    public cancel(): void {
        this.dialogRef.close();
    }
}
