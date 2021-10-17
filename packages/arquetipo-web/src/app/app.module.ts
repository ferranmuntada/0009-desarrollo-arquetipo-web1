import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AppConfig } from './config/app.config';

// NGRX
import { localStorageSync } from 'ngrx-store-localstorage';
import { MetaReducer, ActionReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { clientsReducer, clientsFeatureKey } from './ngrx/clients/clients.reducer';
import { proposalReducer, proposalFeatureKey } from './ngrx/proposal/proposal.reducer';
import { loginReducer, loginFeatureKey } from './ngrx/login/login.reducer';
import { clientFeatureKey, clientReducer } from './ngrx/client/client.reducer';

import { BrowserModule } from '@angular/platform-browser';

import { LoginEffects } from './ngrx/login/login.effect';

// LOCALE
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-EA';
import localeEn from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LoggingService } from '@shared/services/logging.service';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeEn, 'en');

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['session', 'client'],
        rehydrate: true,
    })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
const appReducers = {
    [loginFeatureKey]: loginReducer,
    [clientsFeatureKey]: clientsReducer,
    [clientFeatureKey]: clientReducer,
    [proposalFeatureKey]: proposalReducer,
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        StoreModule.forRoot(appReducers, { metaReducers }),
        EffectsModule.forRoot([LoginEffects]),
        StoreDevtoolsModule.instrument(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        BrowserAnimationsModule,
        MatDialogModule,
    ],
    providers: [{ provide: 'env', useValue: environment }, { provide: LOCALE_ID, useValue: AppConfig.I18N_DEFAULT }, LoggingService],
    bootstrap: [AppComponent],
})
export class AppModule {}
