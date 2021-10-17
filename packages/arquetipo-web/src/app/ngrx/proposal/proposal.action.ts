import { createAction, props } from '@ngrx/store';
import { AppConfig } from '../../config/app.config';
import { ProposalInterface } from '../../shared/interfaces/proposal.interface';

const KEY_PROPOSAL_NGRX = '[PROPOSAL]';

const PROPOSAL_TYPE_ADD = `${KEY_PROPOSAL_NGRX} ${AppConfig.STORE_STATE_ADD}`;
const PROPOSAL_TYPE_UPDATE = `${KEY_PROPOSAL_NGRX} ${AppConfig.STORE_STATE_UPDATE}`;
const PROPOSAL_TYPE_DELETE = `${KEY_PROPOSAL_NGRX} ${AppConfig.STORE_STATE_DELETED}`;
const PROPOSAL_TYPE_LOAD = `${KEY_PROPOSAL_NGRX} ${AppConfig.STORE_STATE_LOAD}`;
const PROPOSAL_TYPE_SUCCESS = `${KEY_PROPOSAL_NGRX} ${AppConfig.STORE_STATE_SUCCESS}`;
const PROPOSAL_TYPE_RESET = `${KEY_PROPOSAL_NGRX} ${AppConfig.STORE_STATE_RESET}`;
const PROPOSAL_TYPE_ERROR = `${KEY_PROPOSAL_NGRX} ${AppConfig.STORE_STATE_ERROR}`;

export const addProposal = createAction(PROPOSAL_TYPE_ADD, props<{ proposal: ProposalInterface }>());
export const updateProposal = createAction(PROPOSAL_TYPE_UPDATE, props<{ id: number; proposal: ProposalInterface }>());
export const deleteProposal = createAction(PROPOSAL_TYPE_DELETE, props<{ id: number }>());
export const loadProposal = createAction(PROPOSAL_TYPE_LOAD);
export const onSuccessLoadProposal = createAction(PROPOSAL_TYPE_SUCCESS, props<{ proposals: ProposalInterface[] }>());
export const loadErrorProposal = createAction(PROPOSAL_TYPE_ERROR, props<{ error: any }>());
export const resetProposal = createAction(PROPOSAL_TYPE_RESET);
