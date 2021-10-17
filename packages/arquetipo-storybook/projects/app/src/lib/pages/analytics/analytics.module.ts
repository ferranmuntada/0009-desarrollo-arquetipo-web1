import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { ButtonModule } from '../../components/button';
import { ProgressBarModule } from '../../components/progress-bar/progress-bar.module';
import { SliderToggleModule } from '../../components/slider-toggle/slider-toggle.module';
import { BoxItemsModule } from '../../components/box-items/box-items.module';
import { HeaderModule } from '../../components/header';
@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressBarModule,
    SliderToggleModule,
    BoxItemsModule,
    HeaderModule,
  ],
  exports: [
    ButtonModule,
    ProgressBarModule,
    SliderToggleModule,
    BoxItemsModule,
  ],
})
export class AnalyticsModule {}
