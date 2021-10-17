import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanLoad, Router } from '@angular/router';
import { ISession } from '@shared/models/session.model';
import { take, map } from 'rxjs/operators';
import { LoginNgrxService } from '../../ngrx/login/services/login-ngrx.service';

/**
 * Ejemplo de guard de autenticación.
 */
@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {
    constructor(private loginService: LoginNgrxService, private readonly router: Router) {}

    public canLoad(): Observable<boolean> {
        return this.loginService.getSessionData$().pipe(
            map((session: ISession) => {
                if (session.isValid) {
                    return true;
                }

                this.router.navigate(['/login']);
            }),
            take(1)
        );
    }
}
