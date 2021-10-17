import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTableComponent } from './profile-table.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [ProfileTableComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ProfileTableComponent, MatIconModule],
})
export class ProfileTableModule {}
