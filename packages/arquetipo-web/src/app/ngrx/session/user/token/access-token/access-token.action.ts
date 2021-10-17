import { createAction, props } from '@ngrx/store';
import { ILoginData } from 'src/app/shared/models/auth.model';
import { AppConfig } from 'src/app/config/app.config';

const KEY_TOKEN_ACCESS = '[TOKEN | ACCESS]';
const TOKEN_ACCESS_TYPE_LOAD = `${KEY_TOKEN_ACCESS} ${AppConfig.STORE_STATE_LOAD}`;
const TOKEN_ACCESS_TYPE_LAUNCH = `${KEY_TOKEN_ACCESS} ${AppConfig.STORE_STATE_LAUNCH}`;
const TOKEN_ACCESS_TYPE_SUCCESS = `${KEY_TOKEN_ACCESS} ${AppConfig.STORE_STATE_SUCCESS}`;
const TOKEN_ACCESS_TYPE_DELETE = `${KEY_TOKEN_ACCESS}  ${AppConfig.STORE_STATE_DELETE}`;

export const TOKEN_ACCESS_ACTION_LOAD = createAction(TOKEN_ACCESS_TYPE_LOAD, props<{ data: ILoginData }>());

export const TOKEN_ACCESS_ACTION_SUCCESS = createAction(TOKEN_ACCESS_TYPE_SUCCESS, props<{ accessToken }>());

export const TOKEN_ACCESS_ACTION_LAUNCH = createAction(TOKEN_ACCESS_TYPE_LAUNCH, props<{ accessToken }>());

export const TOKEN_ACCESS_ACTION_DELETE = createAction(TOKEN_ACCESS_TYPE_DELETE);
