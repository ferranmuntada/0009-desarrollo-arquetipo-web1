import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material/radio';
import { By } from '@angular/platform-browser';

import { RadioButtonListComponent } from './radio-button-list.component';

describe('RadioButtonListComponent', () => {
  let component: RadioButtonListComponent;
  let fixture: ComponentFixture<RadioButtonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonListComponent],
      imports: [MatRadioModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonListComponent);
    component = fixture.componentInstance;
    component.textLabel = 'Texto';
    component.list = [
      { text: 'texto 1', checked: true },
      { text: 'texto 2' },
      { text: 'texto 3' },
      { text: 'texto 4' },
    ] as any;
    component.vertical = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call to #changeDetectionRadio()', () => {
    spyOn(component, 'changeDetectionRadio').and.callThrough();
    component.changeDetectionRadio(null);
    expect(component.changeDetectionRadio).toHaveBeenCalled();
  });
});
