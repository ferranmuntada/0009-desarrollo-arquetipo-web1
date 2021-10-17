import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EffectsModule } from '@ngrx/effects';
import { ClientsEffects } from 'src/app/ngrx/clients/clients.effect';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [HomeComponent, SearchComponent, ListComponent],
    imports: [CommonModule, SharedModule, HomeRoutingModule, EffectsModule.forFeature([ClientsEffects])],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
