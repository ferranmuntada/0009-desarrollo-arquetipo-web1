import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILoginData } from '../../../shared/models/auth.model';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from '@app/core/services/unsubscribe/usubscribe.service';
import { ISession } from '../../../shared/models/session.model';
import { Router } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { LoginNgrxService } from '../../../ngrx/login/services/login-ngrx.service';

@Component({
    selector: 'app-form-register',
    templateUrl: './form-register.component.html',
    styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit, OnDestroy {
    public formRegisterFg: FormGroup;

    session$ = this.loginService.getSessionData$();
    constructor(
        private readonly fb: FormBuilder,
        private readonly loginService: LoginNgrxService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.initForm();

        this.session$.pipe(takeUntil(this.unsubscribeService.getUnsubscribe())).subscribe((session: ISession) => {
            if (session && session.isValid) {
                this.router.navigate([`/${AppConfig.APP_ROUTE_HOME}`]);
            }
        });
    }

    public initForm(): void {
        this.formRegisterFg = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]],
        });
    }

    /**
     * Manejador del evento click del botón de login.
     */
    public onSubmit() {
        if (this.formRegisterFg.invalid) {
            return;
        }
        this.login();
    }

    /**
     * Inicia la sesión de usuario.
     */
    login() {
        const data: ILoginData = { email: this.email.value, password: this.password.value, name: this.name.value };
        this.loginService.login(data);
    }

    /**
     * Obtiene el valor actual del formulario.
     */
    get registerForm(): any {
        return this.formRegisterFg.controls;
    }

    /**
     * Obtiene el valor actual del usuario.
     */
    get email(): any {
        return this.formRegisterFg.get('email');
    }

    /**
     * Obtiene el valor actual del usuario.
     */
    get name(): any {
        return this.formRegisterFg.get('name');
    }
    /**
     * Obtiene el valor actual de la contraseña.
     */
    get password(): any {
        return this.formRegisterFg.get('password');
    }

    ngOnDestroy(): void {
        this.unsubscribeService.unsubscribe();
    }
}
