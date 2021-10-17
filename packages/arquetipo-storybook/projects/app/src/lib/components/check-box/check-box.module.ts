import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CheckBoxComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CheckBoxComponent, MatIconModule],
})
export class CheckBoxModule {}
