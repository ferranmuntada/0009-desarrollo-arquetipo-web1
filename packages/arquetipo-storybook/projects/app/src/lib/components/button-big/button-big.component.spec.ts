import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBigComponent } from './button-big.component';
import { Subject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

describe('ButtonBigComponent', () => {
  let component: ButtonBigComponent;
  let fixture: ComponentFixture<ButtonBigComponent>;

  const callback = new Subject<boolean>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonBigComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBigComponent);
    component = fixture.componentInstance;
    component.active = true;
    component.callback = callback;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onClick() and button is active', () => {
    const event = new Event('Prueba de evento');
    component.onClick(event);
    expect(component).toBeDefined();
  });

  it('should call the onClick() and button is not active', () => {
    const event = new Event('Prueba de evento');
    component.active = false;
    component.onClick(event);
    expect(component).toBeDefined();
  });
});
