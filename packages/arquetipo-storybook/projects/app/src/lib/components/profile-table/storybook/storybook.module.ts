import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookComponent } from './storybook.component';
import { ProfileTableModule } from '../profile-table.module';

@NgModule({
  declarations: [ StorybookComponent ],
  imports: [
    CommonModule,
    ProfileTableModule,
  ],
  exports: [
    StorybookComponent,
    ProfileTableModule,
  ]
})
export class StorybookModule { }
