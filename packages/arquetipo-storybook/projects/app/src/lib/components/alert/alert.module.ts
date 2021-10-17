import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, FormsModule, MatIconModule],
  exports: [AlertComponent, FormsModule, MatIconModule],
})
export class AlertModule {}
