import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperComponent } from './stepper.component';
import { Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  const testObserverAmount = new Subject<boolean>();
  const testObserverHiring = new Subject<boolean>();
  const linkAmount = {
    disabled: true,
    show: true,
    callback: testObserverAmount,
  };
  const linkHiring = {
    disabled: false,
    show: true,
    callback: testObserverHiring,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperComponent],
      imports: [MatButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    component.linkAmount = linkAmount;
    component.linkHiring = linkHiring;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the close() function', () => {
    const spy = spyOn(component, 'close').and.callThrough();
    component.close();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the save() function', () => {
    const spy = spyOn(component, 'save').and.callThrough();
    component.save();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the back() function', () => {
    const ev = new Event('Evento de prueba');
    component.selectedIndex = 1;
    const spy = spyOn(component, 'back').and.callThrough();
    component.back(ev);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the changeHiring() function', () => {
    const hiringAction = {
      disabled: false,
      show: true,
      callback: new Subject<boolean>(),
    };
    component.selectedIndex = 1;
    const spy = spyOn(component, 'changeHiring').and.callThrough();
    component.changeHiring(hiringAction);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the changeAmount() function', () => {
    const amountAction = {
      disabled: false,
      show: true,
      callback: new Subject<boolean>(),
    };
    component.selectedIndex = 1;
    const spy = spyOn(component, 'changeAmount').and.callThrough();
    component.changeAmount(amountAction);
    expect(spy).toHaveBeenCalled();
  });
});
