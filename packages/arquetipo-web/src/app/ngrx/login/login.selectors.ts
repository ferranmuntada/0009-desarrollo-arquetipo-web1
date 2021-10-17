import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loginFeatureKey } from './login.reducer';
import { ISession } from 'src/app/shared/models/session.model';

export const getSessionState = createFeatureSelector<ISession>(loginFeatureKey);

export const getSessionData = createSelector(getSessionState, (state: ISession) => state);
