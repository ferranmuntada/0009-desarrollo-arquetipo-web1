import { Location } from '@angular/common';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './components/form-login.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { loginFeatureKey, loginReducer } from '@app/ngrx/login/login.reducer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '../../ngrx/login/login.effect';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppConfig } from '@app/config/app.config';
import { LoggingService } from '@app/shared/services/logging.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '@app/shared/components/error-dialog/error-dialog.component';
import { LoginNgrxService } from '@app/ngrx/login/services/login-ngrx.service';

const translations: any = { test: 'This is a test' };

class FakeLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return of(translations);
    }
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['session'],
        rehydrate: true,
    })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
const appReducers = {
    [loginFeatureKey]: loginReducer,
};

@Component({
    selector: 'app-product-editor',
    template: '<p>Mock Product Editor Component</p>',
})
class MockProductEditorComponent {}

describe('LoginComponent', () => {
    let location: Location;
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let router: Router;
    let loggingService: LoggingService;
    let loginService: LoginNgrxService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, FormLoginComponent, ErrorDialogComponent],
            imports: [
                BrowserAnimationsModule,
                HttpClientTestingModule,
                StoreModule.forRoot(appReducers, { metaReducers }),
                EffectsModule.forRoot([LoginEffects]),
                ReactiveFormsModule,
                FormsModule,
                TranslateModule.forRoot({
                    loader: { provide: TranslateLoader, useClass: FakeLoader },
                }),
                LoginRoutingModule,
                MatInputModule,
                MatFormFieldModule,
                MatDialogModule,
                RouterTestingModule.withRoutes([
                    { path: AppConfig.APP_ROUTE_HOME.valueOf(), component: MockProductEditorComponent },
                    { path: AppConfig.APP_ROUTE_LOGIN.valueOf(), component: MockProductEditorComponent },
                ]),
            ],
            providers: [LoggingService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        loggingService = TestBed.inject(LoggingService);
        router.initialNavigation();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('FormLoginComponent should be invalid', () => {
        component.formLoginComponent.email.setValue('');
        component.formLoginComponent.password.setValue('');
        component.formLoginComponent.onSubmit();
        fixture.detectChanges();
        expect(component.formLoginComponent.loginForm.valid).toBeFalsy();
    });

    it('FormLoginComponent should be valid', () => {
        component.formLoginComponent.email.setValue('testuser@test.com');
        component.formLoginComponent.password.setValue('test');
        component.formLoginComponent.onSubmit();
        fixture.detectChanges();
        expect(component.formLoginComponent.formLoginFg.valid).toBeTruthy();
    });

    it('FormLoginComponent should valid email and password', () => {
        component.formLoginComponent.email.setValue('testuser@test.com');
        component.formLoginComponent.password.setValue('test');
        component.formLoginComponent.onSubmit();
        fixture.detectChanges();
        expect(component.formLoginComponent.email.value).toBe('testuser@test.com');
        expect(component.formLoginComponent.password.value).toBe('test');
    });

    it('FormLoginComponent should navigate to home page', fakeAsync(() => {
        component.formLoginComponent.email.setValue('testuser@test.com');
        component.formLoginComponent.password.setValue('test');
        component.formLoginComponent.onSubmit();
        fixture.detectChanges();
        router.navigate([`/${AppConfig.APP_ROUTE_HOME}`]);
        tick(50);
        expect(location.path()).toBe(`/${AppConfig.APP_ROUTE_HOME}`);
    }));

    it('Dialog should be opened', () => {
        spyOn(loggingService, 'openDialog').and.callThrough();
        component.formLoginComponent.email.setValue('test');
        component.formLoginComponent.password.setValue('test');
        component.formLoginComponent.onSubmit();
        fixture.detectChanges();
        expect(loggingService.openDialog).toHaveBeenCalled();
    });

    it('User should be logged out', () => {
        loginService = TestBed.inject(LoginNgrxService);
        spyOn(loginService, 'logout').and.callThrough();
        loginService.logout();
        expect(loginService.logout).toHaveBeenCalled();
    });
});
