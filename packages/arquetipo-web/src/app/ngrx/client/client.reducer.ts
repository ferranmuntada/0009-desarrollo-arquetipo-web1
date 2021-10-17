import { createReducer, on, Action } from '@ngrx/store';

import * as ClientActions from './client.action';
import { IClientInterface } from '../../shared/interfaces/client.interface';

export const clientFeatureKey = 'client';
export interface ClientState {
    proposal: string;
    client: IClientInterface;
    error: any;
}

const clientInitialState: ClientState = {
    proposal: null,
    client: null,
    error: null,
};

const auxClientReducer = createReducer(
    clientInitialState,
    on(ClientActions.loadClient, loadClient),
    on(ClientActions.resetClient, resetClient)
);

export function clientReducer(state: ClientState | undefined, action: Action) {
    return auxClientReducer(state, action);
}

function loadClient(
    state: ClientState,
    { client, proposal }: { client: IClientInterface; proposal: string }
): ClientState {
    return { ...state, client: { ...client }, proposal };
}

function resetClient(): ClientState {
    return clientInitialState;
}
