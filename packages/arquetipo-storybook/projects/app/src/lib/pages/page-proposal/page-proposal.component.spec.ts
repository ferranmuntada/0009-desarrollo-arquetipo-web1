import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { PageProposalComponent } from './page-proposal.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from '../../components/datatable/datatable.module';
import { ButtonModule } from '../../components/button';
import { HeaderModule } from '../../components/header';
import { Subject } from 'rxjs';

describe('PageProposalComponent', () => {
  let component: PageProposalComponent;
  let fixture: ComponentFixture<PageProposalComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageProposalComponent],
      imports: [
        BrowserAnimationsModule,
        DataTableModule,
        HeaderModule,
        ButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the #goBackAction()', () => {
    const spy = spyOn(component.customHeader, 'goBackAction').and.callThrough();
    component.customHeader.goBackAction();
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #informationUser()', () => {
    const spy = spyOn(
      component.customHeader,
      'informationUser'
    ).and.callThrough();
    component.customHeader.informationUser();
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #navigationMenu()', () => {
    const spy = spyOn(
      component.customHeader,
      'navigationMenu'
    ).and.callThrough();
    component.customHeader.navigationMenu({ text: 'hello' } as any);
    expect(spy).toHaveBeenCalled();
  });
  it('paginator should be initialized', fakeAsync(() => {
    component.customTable.paginatorSettings = {
      items: 5,
      perPage: [5, 10, 15],
    };
    tick();
    expect(component.customTable.dataSources.paginator).toBeTruthy();
  }));
  it('paginator should be initialized', () => {
    const spy = spyOn(
      component.customTable,
      'onActionChange'
    ).and.callThrough();
    component.customTable.onActionChange(null, null);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #clickButton()', () => {
    component.customTable.datasources = datasources;
    component.customTable.datacolumns = datacolumns;
    fixture.detectChanges();
    const spy = spyOn(
      component.customTable.customButton,
      'clickButton'
    ).and.callThrough();
    component.customTable.customButton.callback = new Subject<any>();
    component.customTable.customButton.clickButton(null);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #onActionChange()', () => {
    component.customTable.datasources = datasources;
    component.customTable.datacolumns = datacolumns;
    fixture.detectChanges();
    const spy = spyOn(
      component.customTable.customSelect,
      'onActionChange'
    ).and.callThrough();
    component.customTable.customSelect.onActionChange(3);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #changeToggle()', () => {
    component.customTable.datasources = datasources;
    component.customTable.datacolumns = datacolumns;
    fixture.detectChanges();
    const spy = spyOn(
      component.customTable.customToggle,
      'changeToggle'
    ).and.callThrough();
    component.customTable.customToggle.changeToggle(true);
    expect(spy).toHaveBeenCalled();
  });
});
