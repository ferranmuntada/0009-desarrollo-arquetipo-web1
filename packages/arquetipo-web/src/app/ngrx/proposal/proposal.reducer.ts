import { createReducer, on, Action } from '@ngrx/store';

import {
    addProposal,
    loadProposal,
    onSuccessLoadProposal,
    resetProposal,
    deleteProposal,
    updateProposal,
} from './proposal.action';
import { ProposalInterface } from '@shared/interfaces/proposal.interface';

export const proposalFeatureKey = 'proposal';
export interface ProposalState {
    proposals: ProposalInterface[];
    loading: boolean;
    error: any;
}

const proposalInitialState: ProposalState = {
    proposals: [],
    loading: false,
    error: null,
};

const auxClientsReducer = createReducer(
    proposalInitialState,
    on(addProposal, addProposalReducer),
    on(updateProposal, updateProposalReducer),
    on(deleteProposal, deleteProposalReducer),
    on(loadProposal, loadProposalReducer),
    on(onSuccessLoadProposal, loadSuccessProposalReducer),
    on(resetProposal, resetProposalReducer)
);

export function proposalReducer(state: ProposalState | undefined, action: Action): ProposalState {
    return auxClientsReducer(state, action);
}

function addProposalReducer(state: ProposalState, { proposal }: { proposal: ProposalInterface }): ProposalState {
    return { ...state, proposals: [...state.proposals, proposal] };
}

function updateProposalReducer(
    state: ProposalState,
    { id, proposal }: { id: number; proposal: ProposalInterface }
): ProposalState {
    const proposals = state.proposals.map((item) => (item.id === id ? { ...proposal } : item));
    return { ...state, proposals: [...proposals] };
}

function deleteProposalReducer(state: ProposalState, { id }: { id: number }): ProposalState {
    const proposals = state.proposals.filter((proposal) => proposal.id !== id);
    return { ...state, proposals: [...proposals] };
}

function loadProposalReducer(state: ProposalState): ProposalState {
    return { ...state, loading: true };
}

function loadSuccessProposalReducer(
    state: ProposalState,
    { proposals }: { proposals: ProposalInterface[] }
): ProposalState {
    return { ...state, loading: false, proposals: [...proposals] };
}

function resetProposalReducer(): ProposalState {
    return proposalInitialState;
}
