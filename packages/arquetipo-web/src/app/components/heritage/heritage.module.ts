import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeritageRoutingModule } from './heritage-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { HeritageComponent } from './heritage.component';

@NgModule({
    declarations: [HeritageComponent],
    imports: [CommonModule, SharedModule, HeritageRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeritageModule {}
