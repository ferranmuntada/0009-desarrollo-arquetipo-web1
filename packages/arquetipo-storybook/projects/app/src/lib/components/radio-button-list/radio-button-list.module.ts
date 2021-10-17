import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonListComponent } from './radio-button-list.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [RadioButtonListComponent],
  imports: [CommonModule, MatRadioModule],
  exports: [RadioButtonListComponent, MatRadioModule],
})
export class RadioButtonListModule {}
