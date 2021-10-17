import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerInfoComponent } from '../../components/customer-info';
import { SearchInputComponent } from '../../components/search-input';

@Component({
  selector: 'mln-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(SearchInputComponent, { static: false })
  public customSearchInput: SearchInputComponent;
  @ViewChild(CustomerInfoComponent, { static: false })
  public customCustomerInfo: CustomerInfoComponent;
  public text: string;

  public clients = [
    {
      name: 'Mónica',
      lastname: 'Minguez Torres',
      email: '',
      phone: '',
      proposal: '',
      type: '',
      available: true,
      patrimony: 5090321,
    },
    {
      name: 'Carlos',
      lastname: 'Tauroni Hernández',
      email: '',
      phone: '',
      proposal: '',
      type: '',
      available: true,
      patrimony: 2490321,
    },
    {
      name: 'Marta',
      lastname: 'Rodriguez Jimenez',
      email: '',
      phone: '',
      proposal: '',
      type: '',
      available: false,
      patrimony: 721000,
    },
    {
      name: 'Eduardo',
      lastname: 'Marín Prieto',
      email: '',
      phone: '',
      proposal: '',
      type: '',
      available: false,
      patrimony: 10800956,
    },
    {
      name: 'Gonzalo',
      lastname: 'Varela Benitez',
      email: '',
      phone: '',
      proposal: '',
      type: '',
      available: true,
      patrimony: 207834,
    },
  ];

  public clientsShow = [];

  public settings = { textInputDefault: 'Search', icon: 'search' };
  public user = { name: 'Jonas', lastname: 'Segura Javier' };
  public amount = 5;
  public settingsSelect = {
    firstOption: 'Ninguna',
    title: 'Propuestas',
    listItemSelect: [
      {
        id: 0,
        name: 'Propuesta 1',
      },
      {
        id: 1,
        name: 'Propuesta 2',
      },
      {
        id: 2,
        name: 'Propuesta 3',
      },
      {
        id: 3,
        name: 'Propuesta 4',
      },
      {
        id: 4,
        name: 'Propuesta 5',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    this.clientsShow = this.clients;
  }

  public searchTextChange(e): void {
    // TODO: Filtering properly data
    // this.clientsShow = this.clients.filter(client => client.name.indexOf(e) != -1);
  }
}
