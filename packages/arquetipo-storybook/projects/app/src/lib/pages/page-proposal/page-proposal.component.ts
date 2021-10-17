import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableInterface } from '../../shared/interfaces/data-table/datatable.interface';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { MenuItems } from '../../shared/interfaces/menuitems.interface';
import { datatableMock } from '../../shared/model/data-table/datatable.model';
import { datatableActionsMock } from '../../shared/model/data-table/actions.model';
import { DataColumns } from '../../shared/interfaces/data-columns.interface';
import { ButtonComponent } from '../../components/button';
import { DatatableComponent } from '../../components/datatable';
import { HeaderComponent } from '../../components/header';
@Component({
  selector: 'mln-page-proposal',
  templateUrl: './page-proposal.component.html',
  styleUrls: ['./page-proposal.component.scss'],
})
export class PageProposalComponent implements OnInit {
  @ViewChild('customHeader', { static: false })
  public customHeader: HeaderComponent;
  @ViewChild('customButton', { static: false })
  public customButton: ButtonComponent;
  @ViewChild('customTable', { static: false })
  public customTable: DatatableComponent;
  public user: UserInterface = {
    name: 'Carlos Alberto',
    lastname: 'Tauroni Hernandéz',
    patrimony: 35677000.13,
  };
  public menuItems: Array<MenuItems> = [
    { text: 'Patrimonio', class: '', navigation: 'heritage', disabled: true },
    { text: 'Análisis 5D', class: '', navigation: 'analytics', disabled: true },
    {
      text: 'Propuestas de inversión',
      class: 'active',
      navigation: 'proposal',
    },
    { text: 'Informes', class: '', navigation: 'reports', disabled: true },
  ];
  public datasources: DataTableInterface[];
  public datacolumns: DataColumns[];

  constructor() {}

  ngOnInit(): void {
    this.datasources = datatableMock;
    this.datacolumns = this.getColumnsData();
  }

  private getColumnsData(): DataColumns[] {
    return [
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
            listItem: datatableActionsMock,
          },
        },
      },
    ];
  }
}
