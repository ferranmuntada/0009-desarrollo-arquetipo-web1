import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderToggleComponent } from './slider-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SliderToggleComponent],
  imports: [CommonModule, MatSlideToggleModule, MatFormFieldModule],
  exports: [SliderToggleComponent, MatSlideToggleModule, MatFormFieldModule],
})
export class SliderToggleModule {}
