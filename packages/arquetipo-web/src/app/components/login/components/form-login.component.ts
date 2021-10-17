import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { ILoginData } from 'src/app/shared/models/auth.model';
import { ISession } from 'src/app/shared/models/session.model';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from '@app/core/services/unsubscribe/usubscribe.service';
import { LoginNgrxService } from '../../../ngrx/login/services/login-ngrx.service';

/**
 * Formulario de login.
 */
@Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit, OnDestroy {
    public formLoginFg: FormGroup;

    /**
     * @ignore
     */
    constructor(
        private readonly fb: FormBuilder,
        private readonly loginService: LoginNgrxService,
        private readonly router: Router,
        private readonly unsubscribeService: UnsubscribeService
    ) {}

    ngOnInit(): void {
        this.initForm();
        const session$ = this.loginService.getSessionData$();
        session$.pipe(takeUntil(this.unsubscribeService.getUnsubscribe())).subscribe((session: ISession) => {
            if (session && session.isValid) {
                this.router.navigate([`/${AppConfig.APP_ROUTE_HOME}`]);
            }
        });
    }

    /**
     * Obtiene el valor actual del usuario.
     */
    get email(): AbstractControl {
        return this.formLoginFg.get('email');
    }
    /**
     * Obtiene el valor actual de la contraseña.
     */
    get password(): AbstractControl {
        return this.formLoginFg.get('password');
    }
    /**
     * Obtiene el valor actual del formulario.
     */
    get loginForm(): { [key: string]: AbstractControl } {
        return this.formLoginFg.controls;
    }

    /**
     * Inicializa el formulario de login.
     */
    private initForm(): void {
        this.formLoginFg = this.fb.group({
            email: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(4)]],
        });
    }

    /**
     * Manejador del evento click del botón de login.
     */
    public onSubmit(): void {
        if (this.formLoginFg.invalid) {
            return;
        }
        this.login();
    }

    /**
     * Inicia la sesión de usuario.
     */
    private login(): void {
        const data: ILoginData = { email: this.email.value, password: this.password.value };
        this.loginService.login(data);
    }

    ngOnDestroy(): void {
        this.unsubscribeService.unsubscribe();
    }
}
