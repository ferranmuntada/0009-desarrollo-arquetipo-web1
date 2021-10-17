import { createFeatureSelector, createSelector } from '@ngrx/store';
import { proposalFeatureKey, ProposalState } from './proposal.reducer';

export const getProposalState = createFeatureSelector<ProposalState>(proposalFeatureKey);
export const getProposals = createSelector(getProposalState, (state: ProposalState) => state);
