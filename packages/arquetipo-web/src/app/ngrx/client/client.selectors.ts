import { createFeatureSelector, createSelector } from '@ngrx/store';
import { clientFeatureKey } from './client.reducer';
import { ClientState } from './client.reducer';

export const getClientState = createFeatureSelector<ClientState>(clientFeatureKey);

export const getClient = createSelector(getClientState, (state: ClientState) => state);
