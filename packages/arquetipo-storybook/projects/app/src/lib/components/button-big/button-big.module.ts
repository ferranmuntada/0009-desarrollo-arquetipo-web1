import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBigComponent } from './button-big.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ButtonBigComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ButtonBigComponent, MatIconModule],
})
export class BigButtonModule {}
