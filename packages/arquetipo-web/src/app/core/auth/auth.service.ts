import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppConfig } from 'src/app/config/app.config';
import { Router } from '@angular/router';
import { ITokenData, IUserData, ILoginData } from '@shared/models/auth.model';
import { ISession } from '@shared/models/session.model';
import { map } from 'rxjs/operators';
import { userAdminC, userAdminJ, userAdminE, userReader } from '@core/mocks/auth.mock';

const helper = new JwtHelperService();

/**
 * Ejemplo de servicio de autenticación
 */
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public currentToken$: Observable<any>;
    public getCurrentToken$: Observable<any>;
    public tokenData: ITokenData;
    public userData: IUserData;

    constructor(private http: HttpClient, private store: Store<any>, private router: Router) {
        this.getCurrentToken$ = this.store.pipe(select('session', 'email', 'currentToken'));
        this.getCurrentToken$.subscribe((res) => this.setTokenData(res));
    }

    public accessToken(loginData: ILoginData): Observable<HttpResponse<any[]>> {
        return this.http.post<HttpResponse<any[]>>(AppConfig.PATH_ACCESS_TOKEN_GET, loginData);
    }

    public currentToken(): Observable<HttpResponse<any[]>> {
        return this.http.get<HttpResponse<any[]>>(AppConfig.PATH_CURRENT_TOKEN_GET);
    }

    public decodedToken(myRawToken: string): ITokenData {
        return helper.decodeToken(myRawToken);
    }

    public expirationDate(myRawToken: string): Date {
        return helper.getTokenExpirationDate(myRawToken);
    }

    public addTokenHeaders(token: string): HttpHeaders {
        const headers = new HttpHeaders();
        headers.append('Authorization', 'Bearer ' + token);
        return headers;
    }

    public setTokenData(res: { accessToken: string }): void {
        if (res && res.accessToken) {
            const token = this.decodedToken(res.accessToken);
            this.userData = token.data;
            this.tokenData = Object.assign({}, token, {
                UserData: this.userData,
            });
        } else {
            this.userData = undefined;
            this.tokenData = undefined;
        }
    }

    public getTokenData(): ITokenData | undefined {
        return this.tokenData;
    }

    public getUserData(): IUserData | undefined {
        return {
            ...this.userData,
        };
    }

    public isExpired(myRawToken: string): boolean {
        return helper.isTokenExpired(myRawToken);
    }

    public isLoggedIn(): Observable<any> {
        return (this.currentToken$ = this.store.pipe(
            select((stateStore: any) => {
                if (stateStore.session.user && stateStore.session.user.currentToken && stateStore.session.user.currentToken.accessToken) {
                    return stateStore.session.user.currentToken.accessToken;
                } else {
                    return undefined;
                }
            })
        ));
    }

    /**
     *
     * Llamadas de prueba.
     *
     */
    public login(credentials: ILoginData): Observable<ISession> {
        const sessionData = { email: credentials.email, token: '', isValid: true, name: credentials.name };
        return of(sessionData).pipe(
            map((user) => {
                const isAdminValidC = user.email.trim().toLocaleLowerCase() === userAdminC.email.trim().toLocaleLowerCase();
                const isAdminValidJ = user.email.trim().toLocaleLowerCase() === userAdminJ.email.trim().toLocaleLowerCase();
                const isAdminValidE = user.email.trim().toLocaleLowerCase() === userAdminE.email.trim().toLocaleLowerCase();
                const isUserReadValid = user.email.trim().toLocaleLowerCase() === userReader.email.trim().toLocaleLowerCase();

                if (isAdminValidC) {
                    return userAdminC;
                }
                if (isAdminValidJ) {
                    return userAdminJ;
                }
                if (isAdminValidE) {
                    return userAdminE;
                }
                if (isUserReadValid) {
                    return userReader;
                }
                throw new Error('Invalid User');
            })
        );
    }

    public logout(): Observable<ISession> {
        const sessionData = { email: undefined, token: undefined, isValid: undefined, name: Credential.name, role: [] };
        return of(sessionData);
    }
}
