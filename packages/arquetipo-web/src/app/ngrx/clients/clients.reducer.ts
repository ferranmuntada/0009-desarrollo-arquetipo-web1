import { createReducer, on, Action } from '@ngrx/store';

import * as ClientsActions from './clients.action';
import { IClientInterface } from '../../shared/interfaces/client.interface';
export const clientsFeatureKey = 'clients';
export interface ClientState {
    clients: IClientInterface[];
    loading: boolean;
    error: any;
}

const clientInitialState: ClientState = {
    clients: [],
    loading: false,
    error: null,
};

const auxClientsReducer = createReducer(
    clientInitialState,
    on(ClientsActions.addClient, addClient),
    on(ClientsActions.loadClients, loadClients),
    on(ClientsActions.onSuccessLoadClients, loadClientsSuccess),
    on(ClientsActions.resetClients, resetClients)
);

export function clientsReducer(state: ClientState | undefined, action: Action) {
    return auxClientsReducer(state, action);
}

function addClient(state: ClientState, { client }: { client: IClientInterface }): ClientState {
    return { ...state, ...client };
}

function loadClients(state: ClientState): ClientState {
    return { ...state, loading: true };
}

function loadClientsSuccess(state: ClientState, { clients }: { clients: IClientInterface[] }): ClientState {
    return { ...state, loading: false, clients: [...clients] };
}

function resetClients(): ClientState {
    return clientInitialState;
}
