import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProposalState } from '../proposal.reducer';
import { loadProposal, resetProposal, addProposal, deleteProposal, updateProposal } from '../proposal.action';
import { Observable } from 'rxjs';
import { getProposals } from '../proposal.selector';
import { ProposalInterface } from '@shared/interfaces/proposal.interface';

@Injectable({
    providedIn: 'root',
})
export class ProposalNgrxService {
    constructor(private store: Store<ProposalState>) {}

    public addProposal(proposal: ProposalInterface) {
        this.store.dispatch(addProposal({ proposal }));
    }

    public updateProposal(id: number, proposal: ProposalInterface) {
        this.store.dispatch(updateProposal({ id, proposal }));
    }

    public deleteProposal(id: number): void {
        return this.store.dispatch(deleteProposal({ id }));
    }

    public loadProposal() {
        this.store.dispatch(loadProposal());
    }

    public resetProposal() {
        this.store.dispatch(resetProposal());
    }

    public getProposal(): Observable<ProposalState> {
        return this.store.select(getProposals);
    }
}
