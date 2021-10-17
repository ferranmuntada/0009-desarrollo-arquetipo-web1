import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TOKEN_CURRENT_ACTION_SUCCESS } from './current-token.action';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { TOKEN_ACCESS_ACTION_DELETE } from '../access-token/access-token.action';
import { AppConfig } from '../../../../../config/app.config';

@Injectable()
export class CurrentTokenEffects {
    @Effect({ dispatch: false })
    public success$: Observable<Action> = this.actions$.pipe(
        ofType(TOKEN_CURRENT_ACTION_SUCCESS),
        tap(() => {
            this.store.dispatch(TOKEN_ACCESS_ACTION_DELETE());
            this.router.navigate([`/${AppConfig.APP_ROUTE_HOME}`]);
        })
    );

    constructor(private actions$: Actions, private router: Router, private store: Store<any>) {}
}
