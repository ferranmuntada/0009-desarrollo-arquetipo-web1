import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SelectModule } from '../select';
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from '../button';
import { SliderToggleModule } from '../slider-toggle';
@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = ' Siguiente';
    this.previousPageLabel = ' Atrás';
    this.itemsPerPageLabel = 'Cantidad por página';
  }
}
@NgModule({
  declarations: [DatatableComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelectModule,
    ButtonModule,
    SliderToggleModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    SelectModule,
    ButtonModule,
    SliderToggleModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    DatatableComponent,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginator,
    },
  ],
})
export class DataTableModule {}
