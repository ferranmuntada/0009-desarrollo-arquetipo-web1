import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as LoginActions from '@ngrx-app/login/login.action';
import { Observable } from 'rxjs';
import * as LoginSelectors from '@ngrx-app/login/login.selectors';
import { ILoginData } from '@shared/models/auth.model';
import { ISession } from '@shared/models/session.model';

@Injectable({
    providedIn: 'root',
})
export class LoginNgrxService {
    constructor(private store: Store<any>) {}

    public login(data: ILoginData) {
        this.store.dispatch(LoginActions.login({ data }));
    }

    public logout() {
        this.store.dispatch(LoginActions.logout());
    }

    public getSessionData$(): Observable<ISession> {
        return this.store.select(LoginSelectors.getSessionData);
    }
}
