import { createAction, props } from '@ngrx/store';
import { ILoginData } from 'src/app/shared/models/auth.model';
import { AppConfig } from 'src/app/config/app.config';
import { ISession } from 'src/app/shared/models/session.model';

const KEY_LOGIN = '[LOGIN]';
const KEY_LOGOUT = '[LOGOUT]';
const LOGIN_TYPE_ADD = `${KEY_LOGIN} ${AppConfig.STORE_STATE_ADD}`;
const LOGIN_TYPE_SUCCESS = `${KEY_LOGIN} ${AppConfig.STORE_STATE_SUCCESS}`;
const LOGIN_TYPE_ERROR = `${KEY_LOGIN} ${AppConfig.STORE_STATE_ERROR}`;
const LOGOUT_SUCCESS_TYPE = `${KEY_LOGOUT} ${AppConfig.STORE_STATE_SUCCESS}`;

export const login = createAction(
  LOGIN_TYPE_ADD,
  props<{ data: ILoginData }>()
);

export const onSuccessLogin = createAction(
  LOGIN_TYPE_SUCCESS,
  props<{ data: ISession }>()
);

export const logout = createAction(
  LOGOUT_SUCCESS_TYPE
);

export const loadErrorLogin = createAction(
  LOGIN_TYPE_ERROR,
  props<{ error: any }>()
);
