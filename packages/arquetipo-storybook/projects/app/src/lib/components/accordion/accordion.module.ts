import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AccordionComponent, AccordionPanelComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    AccordionComponent,
    AccordionPanelComponent,
    MatIconModule,
  ]
})
export class AccordionModule { }
