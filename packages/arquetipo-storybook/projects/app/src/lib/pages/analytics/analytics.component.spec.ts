import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from '../../components/button';
import { ProgressBarModule } from '../../components/progress-bar/progress-bar.module';
import { SliderToggleModule } from '../../components/slider-toggle/slider-toggle.module';
import { BoxItemsModule } from '../../components/box-items/box-items.module';
import { HeaderModule } from '../../components/header';
import { AnalyticsComponent } from './analytics.component';
import { Subject } from 'rxjs';

describe('AnalyticsComponent', () => {
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsComponent],
      imports: [
        ButtonModule,
        ProgressBarModule,
        SliderToggleModule,
        BoxItemsModule,
        HeaderModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be call to #editFilterAction()', () => {
    const spy = spyOn(component.boxItems, 'editFilterAction').and.callThrough();
    const event = new Event('Prueba de evento');
    component.boxItems.editFilterAction(event);
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should call the #clickButton()', () => {
    const spy = spyOn(component.customButton, 'clickButton').and.callThrough();
    component.customButton.callback = new Subject<any>();
    component.customButton.clickButton(null);
    expect(spy).toHaveBeenCalled();
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
    const spy = spyOn(component.toggleCustom, 'changeToggle').and.callThrough();
    component.toggleCustom.changeToggle(true);
    expect(spy).toHaveBeenCalled();
  });
});
