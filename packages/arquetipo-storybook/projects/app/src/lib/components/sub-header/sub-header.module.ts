import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from './sub-header.component';
import { ButtonModule } from '../button';

@NgModule({
  declarations: [SubHeaderComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [SubHeaderComponent]
})
export class SubHeaderModule { }
