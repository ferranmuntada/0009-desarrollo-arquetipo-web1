import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { Subject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  const callbackObserver = new Subject<{
    element: EventTarget;
    text: string;
    class: string;
  }>();

  const propsButton = {
      text: 'Botón',
      classButton: 'primary',
      callback: callbackObserver,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.text = propsButton.text;
    component.classButton = propsButton.classButton;
    component.callback = callbackObserver;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the clickButton()', () => {
    const event = new Event('Prueba de evento');
    component.clickButton(event);
    expect(component).toBeDefined();
  });
});
