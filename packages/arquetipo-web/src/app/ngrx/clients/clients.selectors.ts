import { createFeatureSelector, createSelector } from '@ngrx/store';
import { clientsFeatureKey } from './clients.reducer';
import { ClientState } from './clients.reducer';

export const getClientsState = createFeatureSelector<ClientState>(clientsFeatureKey);

export const getClients = createSelector(getClientsState, (state: ClientState) => state);
