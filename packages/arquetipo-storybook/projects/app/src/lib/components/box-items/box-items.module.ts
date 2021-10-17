import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxItemsComponent } from './box-items.component';

@NgModule({
  declarations: [BoxItemsComponent],
  imports: [CommonModule],
  exports: [BoxItemsComponent],
})
export class BoxItemsModule {}
