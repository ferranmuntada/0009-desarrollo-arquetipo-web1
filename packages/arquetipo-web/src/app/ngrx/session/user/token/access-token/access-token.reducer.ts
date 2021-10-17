import { createReducer, on } from '@ngrx/store';
import {
    TOKEN_ACCESS_ACTION_LOAD,
    TOKEN_ACCESS_ACTION_SUCCESS,
    TOKEN_ACCESS_ACTION_DELETE,
} from './access-token.action';

// !! ApiGetMockData and ApiGetMockDataWithError not used because it is handled in ./effects

const initialState = {};

const auxAccessTokenReducer = createReducer(
    initialState,
    on(TOKEN_ACCESS_ACTION_LOAD, accessTokenLoad),
    on(TOKEN_ACCESS_ACTION_SUCCESS, accessTokenSuccess),
    on(TOKEN_ACCESS_ACTION_DELETE, accessTokenDelete)
);

export function accessTokenReducer(state, action) {
    return auxAccessTokenReducer(state, action);
}

function accessTokenLoad(state, action) {
    return Object.assign({}, state, action.accessToken);
}

function accessTokenSuccess(state, action) {
    return Object.assign({}, state, action.accessToken);
}

function accessTokenDelete(state, action) {
    return initialState;
}
