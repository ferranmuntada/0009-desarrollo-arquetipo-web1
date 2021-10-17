import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfig } from '@app/config/app.config';
import { LoginEffects } from '@app/ngrx/login/login.effect';
import { loginFeatureKey, loginReducer } from '@app/ngrx/login/login.reducer';
import { LoggingService } from '@app/shared/services/logging.service';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { localStorageSync } from 'ngrx-store-localstorage';
import { Observable, of } from 'rxjs';
import { LoginRoutingModule } from '../login-routing.module';

import { FormLoginComponent } from './form-login.component';

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
    let component: FormLoginComponent;
    let fixture: ComponentFixture<FormLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormLoginComponent],
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
        fixture = TestBed.createComponent(FormLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
