import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aditional-settings',
  templateUrl: './aditional-settings.component.html',
  styleUrls: ['./aditional-settings.component.scss']
})
export class AditionalSettingsComponent implements OnInit {
  public listItemDay = [
    {
        name: '30',
    },
    {
        name: '31',
    },
  ];
  public settingsDay = {
    firstOption: 'Ninguna',
    title: 'Día',
  };
  public listItemType = [
    {
        name: 'Mensual',
    },
    {
        name: 'Semanal',
    },
  ];
  public settingsType = {
    firstOption: 'Ninguna',
    title: 'Periodicidad',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
