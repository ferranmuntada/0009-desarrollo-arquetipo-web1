import { createAction, props } from '@ngrx/store';
import { AppConfig } from 'src/app/config/app.config';
import { IClientInterface } from '../../shared/interfaces/client.interface';

const KEY_CLIENT = '[CLIENT]';
const CLIENT_TYPE_LOAD = `${KEY_CLIENT} ${AppConfig.STORE_STATE_LOAD}`;
const CLIENT_TYPE_RESET = `${KEY_CLIENT} ${AppConfig.STORE_STATE_RESET}`;
const CLIENT_TYPE_ERROR = `${KEY_CLIENT} ${AppConfig.STORE_STATE_ERROR}`;

export const loadClient = createAction(CLIENT_TYPE_LOAD, props<{ client: IClientInterface; proposal: string }>());
export const loadClientError = createAction(CLIENT_TYPE_ERROR, props<{ error: any }>());
export const resetClient = createAction(CLIENT_TYPE_RESET);
