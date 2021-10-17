import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subject } from 'rxjs';
import { ButtonModule } from '../button';
import { CheckBoxModule } from '../check-box';

import { ChartCircleComponent } from './chart-circle.component';

describe('ChartCircleComponent', () => {
  let component: ChartCircleComponent;
  let fixture: ComponentFixture<ChartCircleComponent>;

  const settingsChart = {
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
  const settingButton = {
    text: 'Botón',
    classButton: 'primary',
    type: 'submit',
    icon: 'delete',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartCircleComponent],
      imports: [ButtonModule, NgApexchartsModule, CheckBoxModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCircleComponent);
    component = fixture.componentInstance;
    component.settingsChart = settingsChart;
    component.settingsButton = settingButton;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the #clickButton()', () => {
    const spy = spyOn(component.customButton, 'clickButton').and.callThrough();
    component.customButton.callback = new Subject<any>();
    component.customButton.clickButton(null);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #changeChk()', () => {
    const spy = spyOn(component.customChk, 'changeChk').and.callThrough();
    component.customChk.changeChk(true, new Subject<any>());
    expect(spy).toHaveBeenCalled();
  });
  it('model should initialize data', () => {
    const spy = spyOn(
      component.heritageModel.getChartOptions(settingsChart).tooltip,
      'custom'
    ).and.callThrough();
    component.heritageModel.getChartOptions(settingsChart).tooltip.custom({
      series: settingsChart.series,
      seriesIndex: [0, 1, 2, 3, 4, 5],
      w: {
        globals: {
          labels: settingsChart.labels,
          colors: settingsChart.colors,
        },
      },
    });
    expect(spy).toHaveBeenCalledTimes(0);
  });
  it('model should initialize data and call #getSettingsToggle()', () => {
    const spy = spyOn(
      component.heritageModel,
      'getSettingsToggle'
    ).and.callThrough();
    component.heritageModel.getSettingsToggle();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('model should initialize data and call #getSettingsCheckBox()', () => {
    const spy = spyOn(
      component.heritageModel,
      'getSettingsCheckBox'
    ).and.callThrough();
    component.heritageModel.getSettingsCheckBox();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
