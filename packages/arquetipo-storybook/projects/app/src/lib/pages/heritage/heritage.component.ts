import { Component, OnInit, ViewChild } from '@angular/core';
import { HeritageModel } from './model/heritage.model';
import { Subject } from 'rxjs';
import { SliderToggleComponent } from '../../components/slider-toggle';
import { CheckBoxComponent } from '../../components/check-box';
import { ChartCircleComponent } from '../../components/chart-circle';

@Component({
  selector: 'mln-heritage',
  templateUrl: './heritage.component.html',
  styleUrls: ['./heritage.component.scss'],
})
export class HeritageComponent implements OnInit {
  @ViewChild('customChart', { static: false })
  public customChart: ChartCircleComponent;
  @ViewChild('toggle', { static: false })
  public custonToggle: SliderToggleComponent;
  @ViewChild('checkbox', { static: false })
  public checkbox: CheckBoxComponent;

  public totalHeritage = 1345567.16;
  public statusTextToggleSettings: { first: string; second: string };
  public heritageModel: HeritageModel;
  public settingsChart = {
    colors: ['#85e3d1', '#3bcaaf', '#1ea78d', '#19816d', '#8471d6', '#2fb8de'],
    series: [2378, 2165, 2333, 1852, 2456, 2154],
    labels: [
      'Inversiones en forma de Seguro de Vida',
      'Fondos de Inversión',
      'Inversiones bancarias',
      'Inversiones de Área de valores',
      'Jubilación',
      'Servicios Bancarios',
    ],
    popupText: 'Dinero invertido',
    total: 1345567.16,
  };
  public settingsButton: any;
  public settingsCheckBox: any;
  public testObserver = new Subject<boolean>();
  public settingsCheckBoxRight: any;

  constructor() {
    this.heritageModel = new HeritageModel();
    this.settingsCheckBox = {
      color: '',
      title: '',
      checked: true,
      id: null,
      callBack: this.testObserver,
    };
    this.settingsButton = {
      text: 'SIGUIENTE',
      classButton: 'secondary',
      isDisabled: true,
      callback: this.testObserver,
      isSquare: false,
      icon: '',
    };
  }

  ngOnInit(): void {
    this.statusTextToggleSettings = this.heritageModel.getSettingsToggle();
    this.settingsCheckBoxRight = this.heritageModel.getSettingsCheckBox();
  }
}
