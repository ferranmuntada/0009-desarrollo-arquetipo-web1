import { combineReducers } from '@ngrx/store';
import { accessTokenReducer } from './token/access-token/access-token.reducer';
import { currentTokenReducer } from './token/current-token/current-token.reducer';

export const userReducer = combineReducers({
    accessToken: accessTokenReducer,
    currentToken: currentTokenReducer,
});
