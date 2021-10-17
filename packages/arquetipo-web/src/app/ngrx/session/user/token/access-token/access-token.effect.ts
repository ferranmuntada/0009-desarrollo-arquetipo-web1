import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../../../../../core/auth/auth.service';
import { TOKEN_ACCESS_ACTION_LOAD, TOKEN_ACCESS_ACTION_SUCCESS } from './access-token.action';
import { TOKEN_CURRENT_ACTION_SUCCESS } from '../current-token/current-token.action';

@Injectable()
export class AccessTokenEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    load$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TOKEN_ACCESS_ACTION_LOAD),
            tap(() => {}),
            mergeMap((action) => {
                return this.authService.accessToken(action.data).pipe(
                    map((accessToken) => {
                        return TOKEN_ACCESS_ACTION_SUCCESS({ accessToken });
                    }),
                    // catchError((error) => this.responsesService.callError(action.type, error)),
                    tap(() => {})
                );
            })
        )
    );

    success$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TOKEN_ACCESS_ACTION_SUCCESS),
            tap(() => {}),
            mergeMap((action) => {
                return this.authService.currentToken().pipe(
                    map((currentToken) => {
                        return TOKEN_CURRENT_ACTION_SUCCESS({ currentToken });
                    }),
                    // catchError((error) => this.responsesService.callError(action.type, error)),
                    tap(() => {})
                );
            })
        )
    );
}
