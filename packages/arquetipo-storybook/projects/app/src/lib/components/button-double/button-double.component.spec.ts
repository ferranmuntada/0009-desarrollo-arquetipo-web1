import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDoubleComponent } from './button-double.component';

describe('ButtonDoubleComponent', () => {
  let component: ButtonDoubleComponent;
  let fixture: ComponentFixture<ButtonDoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDoubleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onClick()', () => {
    const event = new Event('Prueba de evento');
    component.onClick(event);
    expect(component).toBeDefined();
  });
});
