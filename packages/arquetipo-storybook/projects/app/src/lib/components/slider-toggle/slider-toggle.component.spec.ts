import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SliderToggleComponent } from './slider-toggle.component';

describe('SliderToggleComponent', () => {
  let component: SliderToggleComponent;
  let fixture: ComponentFixture<SliderToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderToggleComponent],
      imports: [MatSlideToggleModule, MatFormFieldModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the changeToggle()', () => {
    const spy = spyOn(component, 'changeToggle').and.callThrough();
    component.changeToggle(true);
    expect(spy).toHaveBeenCalled();
  });
});
