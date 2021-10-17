import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsModel } from './models/analytics.model';
import { ToggleSettingsInterface } from '../../shared/interfaces/toggle.interface';
import { SettingProgressInterface } from '../../shared/interfaces/progress.interface';
import { SettingBoxInterface } from '../../shared/interfaces/box.interface';
import { ButtonInterface } from '../../shared/interfaces/button.interface';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { MenuItems } from '../../shared/interfaces/menuitems.interface';
import { BoxItemsComponent } from '../../components/box-items';
import { ButtonComponent } from '../../components/button';
import { HeaderComponent } from '../../components/header';
import { SliderToggleComponent } from '../../components/slider-toggle';

@Component({
  selector: 'mln-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  @ViewChild('boxItems', { static: false }) public boxItems: BoxItemsComponent;
  @ViewChild('customButton', { static: false })
  public customButton: ButtonComponent;
  @ViewChild('headerCustom', { static: false })
  public headerCustom: HeaderComponent;
  @ViewChild('toggleCustom', { static: false })
  public toggleCustom: SliderToggleComponent;
  public user: UserInterface = {
    name: 'Carlos Alberto',
    lastname: 'Tauroni Hernandéz',
    patrimony: 35677000.13,
  };
  public menuItems: Array<MenuItems> = [
    { text: 'Patrimonio', class: '', navigation: 'heritage', disabled: true },
    { text: 'Análisis 5D', class: 'active', navigation: 'analytics' },
    {
      text: 'Propuestas de inversión',
      class: '',
      navigation: 'proposal',
      disabled: true,
    },
    { text: 'Informes', class: '', navigation: 'reports', disabled: true },
  ];
  public statusTextToggleSettings: ToggleSettingsInterface;
  public settingsProgress: SettingProgressInterface[];
  public settingsBoxd: SettingBoxInterface;
  public settingsButton: ButtonInterface[];
  public analyticsDatasource: AnalyticsModel;
  public settings = {
    title: `<span>900.217</span><span class='decimal'>,00 €</span>`,
    subTitle: 'IMPORTE ANALIZADO',
    listItems: [
      'Servicios Bancarios',
      'Inversiones en forma de Seguro de Vida',
      'Inversiones Bancarias',
    ],
    footerText: 'Editar filtros',
  };

  constructor() {
    this.analyticsDatasource = new AnalyticsModel();
    this.settingsProgress = this.analyticsDatasource.getSettingsProgress();
    this.statusTextToggleSettings = this.analyticsDatasource.getSettingsToggleSettings();
    this.settingsBoxd = this.analyticsDatasource.getSettingsBox();
    this.settingsButton = this.analyticsDatasource.getSettingsButton();
  }

  ngOnInit(): void {}
}
