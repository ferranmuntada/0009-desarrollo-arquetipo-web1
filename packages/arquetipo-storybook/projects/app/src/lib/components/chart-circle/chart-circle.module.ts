import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartCircleComponent } from './chart-circle.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from '../button';
import { CheckBoxModule } from '../check-box';
@NgModule({
  declarations: [ChartCircleComponent],
  imports: [CommonModule, ButtonModule, NgApexchartsModule, CheckBoxModule],
  exports: [
    ChartCircleComponent,
    ButtonModule,
    NgApexchartsModule,
    CheckBoxModule,
  ],
})
export class ChartCircleModule {}
