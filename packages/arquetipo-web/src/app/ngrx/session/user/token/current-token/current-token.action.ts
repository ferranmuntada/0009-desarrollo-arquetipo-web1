import { createAction, props } from '@ngrx/store';
import { AppConfig } from 'src/app/config/app.config';

const KEY_TOKEN_CURRENT = '[TOKEN | CURRENT]';
const TOKEN_CURRENT_TYPE_LOAD = `${KEY_TOKEN_CURRENT} ${AppConfig.STORE_STATE_LOAD}`;
const TOKEN_CURRENT_TYPE_SUCCESS = `${KEY_TOKEN_CURRENT} ${AppConfig.STORE_STATE_SUCCESS}`;

export const TOKEN_CURRENT_ACTION_LOAD = createAction(TOKEN_CURRENT_TYPE_LOAD);

export const TOKEN_CURRENT_ACTION_SUCCESS = createAction(TOKEN_CURRENT_TYPE_SUCCESS, props<{ currentToken }>());
