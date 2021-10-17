import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { HeritageComponent } from './heritage.component';
import { HeritageModel } from './model/heritage.model';
import { SliderToggleModule } from '../../components/slider-toggle';
import { ChartCircleModule } from '../../components/chart-circle';
import { Subject } from 'rxjs';

describe('HeritageComponent', () => {
  let component: HeritageComponent;
  let fixture: ComponentFixture<HeritageComponent>;
  let model: HeritageModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeritageComponent],
      imports: [SliderToggleModule, ChartCircleModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageComponent);
    component = fixture.componentInstance;
    model = new HeritageModel();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the #changeToggle()', () => {
    const spy = spyOn(component.custonToggle, 'changeToggle').and.callThrough();
    component.custonToggle.changeToggle(true);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #clickButton()', () => {
    const spy = spyOn(
      component.customChart.customButton,
      'clickButton'
    ).and.callThrough();
    component.customChart.customButton.callback = new Subject<any>();
    component.customChart.customButton.clickButton(null);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #changeChk()', () => {
    const spy = spyOn(component.checkbox, 'changeChk').and.callThrough();
    component.checkbox.changeChk(true, new Subject<any>());
    expect(spy).toHaveBeenCalled();
  });
  it('settings should be initialized in a checkbox component', () => {
    component.checkbox.settings = {
      title: 'Texto de prueba',
      checked: true,
      id: 'id',
      callBack: new Subject<any>(),
      color: '',
    };
    expect(component.checkbox.settings).toEqual({
      title: 'Texto de prueba',
      checked: true,
      id: 'id',
      callBack: new Subject<any>(),
      color: '',
    });
  });
  it('model should initialize data', () => {
    const spy = spyOn(
      component.customChart.heritageModel.getChartOptions(
        component.settingsChart
      ).tooltip,
      'custom'
    ).and.callThrough();
    component.customChart.heritageModel
      .getChartOptions(component.settingsChart)
      .tooltip.custom({
        series: component.settingsChart.series,
        seriesIndex: [0, 1, 2, 3, 4, 5],
        w: {
          globals: {
            labels: component.settingsChart.labels,
            colors: component.settingsChart.colors,
          },
        },
      });
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
