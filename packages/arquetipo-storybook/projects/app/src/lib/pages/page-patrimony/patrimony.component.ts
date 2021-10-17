import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { MenuItems } from '../../shared/interfaces/menuitems.interface';
import { HeaderComponent } from '../../components/header';
import { HeritageComponent } from '../heritage';

@Component({
  selector: 'mln-patrimony',
  templateUrl: './patrimony.component.html',
  styleUrls: ['./patrimony.component.scss'],
})
export class PatrimonyComponent implements OnInit {
  @ViewChild('headerCustom', { static: false })
  public headerCustom: HeaderComponent;
  @ViewChild('heritageCustom', { static: false })
  public heritageCustom: HeritageComponent;
  public user: UserInterface = {
    name: 'Carlos Alberto',
    lastname: 'Tauroni Hernandéz',
    patrimony: 35677000.13,
  };
  public menuItems: Array<MenuItems> = [
    { text: 'Patrimonio', class: 'active', navigation: 'heritage' },
    { text: 'Análisis 5D', class: '', navigation: 'analytics', disabled: true },
    {
      text: 'Propuestas de inversión',
      class: '',
      navigation: 'proposal',
      disabled: true,
    },
    { text: 'Informes', class: '', navigation: 'reports', disabled: true },
  ];

  constructor() {}

  ngOnInit(): void {}
}
