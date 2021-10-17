import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrimonyComponent } from './patrimony.component';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HeritageModule } from '../heritage/heritage.module';
import { HeaderModule } from '../../components/header';
import { SliderToggleModule } from '../../components/slider-toggle';
import { ButtonModule } from '../../components/button';
import { CheckBoxModule } from '../../components/check-box';

@NgModule({
  declarations: [PatrimonyComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SliderToggleModule,
    ButtonModule,
    CheckBoxModule,
    MatIconModule,
    NgApexchartsModule,
    HeritageModule,
  ],
  exports: [
    PatrimonyComponent,
    HeaderModule,
    SliderToggleModule,
    ButtonModule,
    CheckBoxModule,
    MatIconModule,
    NgApexchartsModule,
    HeritageModule,
  ],
})
export class PatrimonyModule {}
