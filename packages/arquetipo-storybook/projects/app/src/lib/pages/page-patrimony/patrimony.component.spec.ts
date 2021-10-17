import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonyComponent } from './patrimony.component';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HeritageModule } from '../heritage/heritage.module';
import { HeaderModule } from '../../components/header';
import { SliderToggleModule } from '../../components/slider-toggle';
import { ButtonModule } from '../../components/button';
import { CheckBoxModule } from '../../components/check-box';
import { Subject } from 'rxjs';

describe('AnalyticsComponent', () => {
  let component: PatrimonyComponent;
  let fixture: ComponentFixture<PatrimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatrimonyComponent],
      imports: [
        HeaderModule,
        SliderToggleModule,
        ButtonModule,
        CheckBoxModule,
        MatIconModule,
        NgApexchartsModule,
        HeritageModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the #clickButton()', () => {
    const spy = spyOn(
      component.heritageCustom.customChart.customButton,
      'clickButton'
    ).and.callThrough();
    component.heritageCustom.customChart.customButton.callback = new Subject<
      any
    >();
    component.heritageCustom.customChart.customButton.clickButton(null);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #changeChk()', () => {
    const spy = spyOn(
      component.heritageCustom.checkbox,
      'changeChk'
    ).and.callThrough();
    component.heritageCustom.checkbox.changeChk(true, new Subject<any>());
    expect(spy).toHaveBeenCalled();
  });
  it('settings should be initialized in a checkbox component', () => {
    component.heritageCustom.checkbox.settings = {
      title: 'Texto de prueba',
      checked: true,
      id: 'id',
      callBack: new Subject<any>(),
      color: '',
    };
    expect(component.heritageCustom.checkbox.settings).toEqual({
      title: 'Texto de prueba',
      checked: true,
      id: 'id',
      callBack: new Subject<any>(),
      color: '',
    });
  });
  it('should call the #goBackAction()', () => {
    const spy = spyOn(component.headerCustom, 'goBackAction').and.callThrough();
    component.headerCustom.goBackAction();
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #informationUser()', () => {
    const spy = spyOn(
      component.headerCustom,
      'informationUser'
    ).and.callThrough();
    component.headerCustom.informationUser();
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #navigationMenu()', () => {
    const spy = spyOn(
      component.headerCustom,
      'navigationMenu'
    ).and.callThrough();
    component.headerCustom.navigationMenu({ text: 'hello' } as any);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #changeToggle()', () => {
    const spy = spyOn(
      component.heritageCustom.custonToggle,
      'changeToggle'
    ).and.callThrough();
    component.heritageCustom.custonToggle.changeToggle(true);
    expect(spy).toHaveBeenCalled();
  });
  it('model should initialize data', () => {
    const spy = spyOn(
      component.heritageCustom.customChart.heritageModel.getChartOptions(
        component.heritageCustom.settingsChart
      ).tooltip,
      'custom'
    ).and.callThrough();
    component.heritageCustom.customChart.heritageModel
      .getChartOptions(component.heritageCustom.settingsChart)
      .tooltip.custom({
        series: component.heritageCustom.settingsChart.series,
        seriesIndex: [0, 1, 2, 3, 4, 5],
        w: {
          globals: {
            labels: component.heritageCustom.settingsChart.labels,
            colors: component.heritageCustom.settingsChart.colors,
          },
        },
      });
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
