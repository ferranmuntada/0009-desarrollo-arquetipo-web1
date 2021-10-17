import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartBarComponent } from './chart-bar.component';

@NgModule({
  declarations: [ChartBarComponent],
  imports: [CommonModule, NgApexchartsModule],
  exports: [ChartBarComponent],
})
export class ChartBarModule {}
