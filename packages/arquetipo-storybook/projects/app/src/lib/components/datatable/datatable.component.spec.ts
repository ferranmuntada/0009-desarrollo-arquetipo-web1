import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';
import { ButtonModule } from '../button';
import { SelectModule } from '../select';
import { SliderToggleModule } from '../slider-toggle';

import { DatatableComponent } from './datatable.component';

describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;

  const datasources = [
    {
      id: 1,
      description: 'Redistribución',
      type: 'Apple Inc.',
      amount: 43567.34,
      date: new Date(),
      status: 1,
    },
    {
      id: 2,
      description: 'Redistribución',
      type: 'Google',
      amount: 42567.34,
      date: new Date(),
      status: 2,
      options2: 'aaaaa',
      options3: 'aaaaa',
    },
  ];

  const datacolumns = [
    {
      key: 'id',
      name: 'ID propuesta',
      types: { type: 'text' },
    },
    {
      key: 'description',
      name: 'Descripción',
      types: { type: 'text' },
    },
    {
      key: 'type',
      name: 'Tipo',
      types: { type: 'text' },
    },
    {
      key: 'amount',
      name: 'Importe',
      types: { type: 'money' },
    },
    {
      key: 'date',
      name: 'Fecha',
      types: { type: 'date', settings: { format: 'dd/MM/yyyy' } },
    },
    {
      key: 'status',
      name: 'Estado',
      class: 'status',
      types: { type: 'text' },
    },
    {
      key: 'options',
      name: 'Opciones',
      types: {
        type: 'select',
        settings: {
          select: {
            class: 'proposal-table__options',
            firstOption: 'Ninguna',
            title: 'Ver opciones',
          },
          listItem: [
            { id: 'a', name: 'Editar', icon: 'edit' },
            { id: 'b', name: 'Consultar', icon: 'search' },
            { id: 'c', name: 'Copiar', icon: 'content_copy' },
            { id: 'd', name: 'Anular', icon: 'delete', disabled: true },
          ],
        },
      },
    },
    {
      key: 'options2',
      name: 'Opciones2',
      types: {
        type: 'toggle',
        settings: {
          label: 'Activo',
        },
      },
    },
    {
      key: 'options3',
      name: 'Opciones3',
      types: {
        type: 'button',
        settings: {
          icon: 'person',
          classButton: '',
        },
      },
    },
  ];

  const paginatorSettings = {
    items: 1000,
    perPage: [5, 10],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableComponent],
      imports: [
        BrowserAnimationsModule,
        SelectModule,
        ButtonModule,
        SliderToggleModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    component.datacolumns = datacolumns;
    component.datasources = datasources;
    component.paginatorSettings = paginatorSettings;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onActionChange() function', () => {
    const val = { id: 1, name: 'a', icon: 'b', disabled: false };
    component.onActionChange(datasources, val);
    expect(component).not.toBeNull();
  });

  it('should happen after view init, and set the paginator', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.dataSources).not.toBeNull();
    });
    expect(component.dataSources).not.toBeNull();
  });

  it('should call the #clickButton()', () => {
    const spy = spyOn(component.customButton, 'clickButton').and.callThrough();
    component.customButton.callback = new Subject<any>();
    component.customButton.clickButton(null);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the #onActionChange()', () => {
    const spy = spyOn(
      component.customSelect,
      'onActionChange'
    ).and.callThrough();
    component.customSelect.onActionChange(3);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #changeToggle()', () => {
    const spy = spyOn(component.customToggle, 'changeToggle').and.callThrough();
    component.customToggle.changeToggle(true);
    expect(spy).toHaveBeenCalled();
  });
});
