import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

import * as LoginActions from './login.action';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { of } from 'rxjs';
import { LoggingService } from '@app/shared/services/logging.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private readonly router: Router,
        private readonly loggingService: LoggingService
    ) {}

    public login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginActions.login),
            mergeMap((action) => {
                return this.authService.login(action.data).pipe(
                    map((response) => {
                        return LoginActions.onSuccessLogin({ data: response });
                    }),
                    catchError((error: HttpErrorResponse) => {
                        this.loggingService.openDialog(error);
                        this.loggingService.sendLog('get', 'none', error);
                        return of(LoginActions.loadErrorLogin({ error }));
                    })
                );
            })
        )
    );

    public logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginActions.logout),
            tap(() => {
                localStorage.clear();
                sessionStorage.clear();
                console.log('LOGOUT');
                this.authService.logout().subscribe(() => this.router.navigate([`/${AppConfig.APP_ROUTE_LOGIN.valueOf()}`]));
            }),
            map(() => {
                return { type: 'NO_ACTION' };
            })
        )
    );
}
