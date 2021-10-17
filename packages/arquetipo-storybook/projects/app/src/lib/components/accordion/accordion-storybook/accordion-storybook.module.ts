import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionStorybookComponent } from './accordion-storybook.component';
import { AccordionModule } from '../accordion.module';

@NgModule({
  declarations: [AccordionStorybookComponent],
  imports: [
    CommonModule,
    AccordionModule,
  ],
  exports: [
    AccordionStorybookComponent,
    AccordionModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AccordionStorybookModule { }
