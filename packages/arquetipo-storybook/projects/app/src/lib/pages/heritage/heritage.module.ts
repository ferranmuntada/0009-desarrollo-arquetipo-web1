import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeritageComponent } from './heritage.component';
import { SliderToggleModule } from '../../components/slider-toggle';
import { ChartCircleModule } from '../../components/chart-circle';

@NgModule({
  declarations: [HeritageComponent],
  imports: [
    CommonModule,
    SliderToggleModule,
    ChartCircleModule,
  ],
  exports: [HeritageComponent, SliderToggleModule, ChartCircleModule],
  schemas: [],
})
export class HeritageModule {}
