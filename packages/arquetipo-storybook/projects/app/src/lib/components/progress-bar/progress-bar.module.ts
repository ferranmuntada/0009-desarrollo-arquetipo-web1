import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [CommonModule, MatProgressBarModule, MatIconModule],
  exports: [ProgressBarComponent, MatProgressBarModule, MatIconModule],
})
export class ProgressBarModule {}
