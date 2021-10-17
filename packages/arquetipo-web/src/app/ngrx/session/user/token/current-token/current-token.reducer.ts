import { createReducer, on } from '@ngrx/store';
import { TOKEN_CURRENT_ACTION_LOAD, TOKEN_CURRENT_ACTION_SUCCESS } from './current-token.action';

// !! ApiGetMockData and ApiGetMockDataWithError not used because it is handled in ./effects

export const initialState = {};

const auxcurrentTokenReducer = createReducer(
    initialState,
    on(TOKEN_CURRENT_ACTION_LOAD, currentTokenLoad),
    on(TOKEN_CURRENT_ACTION_SUCCESS, currentTokenSuccess)
);

export function currentTokenReducer(state, action) {
    return auxcurrentTokenReducer(state, action);
}

function currentTokenLoad(state, action) {
    return Object.assign({}, state, action);
}

function currentTokenSuccess(state, action) {
    return Object.assign({}, state, action.currentToken);
}
