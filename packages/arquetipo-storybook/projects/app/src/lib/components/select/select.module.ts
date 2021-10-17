import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatIconModule],
  exports: [
    SelectComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
})
export class SelectModule {}
