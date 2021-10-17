import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionStorybookComponent } from './accordion-storybook.component';
import { AccordionModule } from '../accordion.module';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AccordionStorybookComponent', () => {
  let component: AccordionStorybookComponent;
  let fixture: ComponentFixture<AccordionStorybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionStorybookComponent],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionStorybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onOpen() function ', () => {
    const spy = spyOn(component, 'onOpen').and.callThrough();
    const ev = new Event('Evento de prueba');
    component.onOpen(ev);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the onClose() function', () => {
    const spy = spyOn(component, 'onClose').and.callThrough();
    const ev = new Event('Evento de prueba');
    component.onClose(ev);
    expect(spy).toHaveBeenCalled();
  });
});
