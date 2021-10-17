import { createAction, props } from '@ngrx/store';
import { AppConfig } from 'src/app/config/app.config';
import { IClientInterface } from '../../shared/interfaces/client.interface';

const KEY_CLIENTS = '[CLIENTS]';
const CLIENTS_TYPE_LOAD = `${KEY_CLIENTS} ${AppConfig.STORE_STATE_LOAD}`;
const CLIENTS_TYPE_SUCCESS = `${KEY_CLIENTS} ${AppConfig.STORE_STATE_SUCCESS}`;
const CLIENTS_TYPE_ADD = `${KEY_CLIENTS} ${AppConfig.STORE_STATE_ADD}`;
const CLIENTS_TYPE_RESET = `${KEY_CLIENTS} ${AppConfig.STORE_STATE_RESET}`;
const CLIENTS_TYPE_ERROR = `${KEY_CLIENTS} ${AppConfig.STORE_STATE_ERROR}`;

export const addClient = createAction(CLIENTS_TYPE_ADD, props<{ client: IClientInterface }>());
export const loadClients = createAction(CLIENTS_TYPE_LOAD);
export const onSuccessLoadClients = createAction(CLIENTS_TYPE_SUCCESS, props<{ clients: IClientInterface[] }>());
export const loadClientesError = createAction(CLIENTS_TYPE_ERROR, props<{ error: any }>());
export const resetClients = createAction(CLIENTS_TYPE_RESET);
