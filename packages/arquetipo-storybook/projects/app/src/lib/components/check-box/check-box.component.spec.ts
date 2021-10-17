import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { CheckBoxComponent } from './check-box.component';
import { Subject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

describe('CheckBoxComponent', () => {
  let component: CheckBoxComponent;
  let fixture: ComponentFixture<CheckBoxComponent>;
  const callback = new Subject<boolean>();
  const settings = {
    color: 'green',
    title: 'Test Text',
    checked: true,
    id: 'id',
    callBack: callback,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBoxComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxComponent);
    component = fixture.componentInstance;
    component.settings = settings;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    // fixture.detectChanges();
    tick(1000);
    expect(component).toBeTruthy();
  }));

  it('should call the changeChk() function', () => {
    const spy = spyOn(component, 'changeChk').and.callThrough();
    const status = true;
    component.changeChk(status, callback);
    expect(spy).toHaveBeenCalled();
  });

  it('settings should be initialized in a checkbox component', () => {
    component.settings = {
      title: 'Texto de prueba',
      checked: true,
      id: 'id',
      callBack: new Subject<any>(),
      color: '',
    };
    expect(component.settings).toEqual({
      title: 'Texto de prueba',
      checked: true,
      id: 'id',
      callBack: new Subject<any>(),
      color: '',
    });
  });
});
