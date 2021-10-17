import { createReducer, on, Action } from '@ngrx/store';
import * as LoginActions from './login.action';
import { ISession } from 'src/app/shared/models/session.model';

export const loginFeatureKey = 'session';

const initialState: ISession = {
    email: undefined,
    token: undefined,
    isValid: undefined,
    name: undefined,
    role: undefined,
};

const auxLoginReducer = createReducer(
    initialState,
    on(LoginActions.login, login),
    on(LoginActions.onSuccessLogin, onSuccessLogin),
    on(LoginActions.logout, logout)
);

export function loginReducer(state: ISession | undefined, action: Action) {
    return auxLoginReducer(state, action);
}

function login(): ISession {
    return initialState;
}

function onSuccessLogin(state: ISession, action): ISession {
    return action.data;
}

function logout(): ISession {
    return initialState;
}
