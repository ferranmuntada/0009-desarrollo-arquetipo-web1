import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent } from './customer-info.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SelectModule } from '../select';

@NgModule({
  declarations: [CustomerInfoComponent],
  imports: [CommonModule, FormsModule, MatIconModule, SelectModule],
  exports: [CustomerInfoComponent, FormsModule, MatIconModule, SelectModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
  ],
})
export class CustomerInfoModule {}
