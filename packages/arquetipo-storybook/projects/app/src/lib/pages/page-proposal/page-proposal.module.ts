import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProposalComponent } from './page-proposal.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from '../../components/datatable/datatable.module';
import { ButtonModule } from '../../components/button';
import { HeaderModule } from '../../components/header';

@NgModule({
  declarations: [PageProposalComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DataTableModule,
    HeaderModule,
    ButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    DataTableModule,
    ButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    PageProposalComponent,
  ],
})
export class PageProposalModule {}
