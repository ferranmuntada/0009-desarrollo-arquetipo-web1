import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [AnalyticsComponent],
    imports: [CommonModule, AnalyticsRoutingModule, SharedModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnalyticsModule {}
