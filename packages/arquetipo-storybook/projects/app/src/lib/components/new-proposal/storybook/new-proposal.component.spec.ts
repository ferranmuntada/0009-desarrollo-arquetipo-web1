import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalComponent } from './new-proposal.component';
import { StepperModule } from '../stepper.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NewProposalComponent', () => {
  let component: NewProposalComponent;
  let fixture: ComponentFixture<NewProposalComponent>;
  const linkAmount = {
    disabled: true,
    show: true,
    callback: null,
  };
  const linkHiring = {
    disabled: false,
    show: true,
    callback: null,
  };
  const menuItems = [
    { text: 'Titulares 1' },
    { text: 'Titulares 2' },
    { text: 'Titulares 3' },
    { text: 'Titulares 4' },
    { text: 'Titulares 5' },
    { text: 'Titulares 6' },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewProposalComponent],
      imports: [StepperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProposalComponent);
    component = fixture.componentInstance;
    component.menuItems = menuItems as any;
    component.linkAmount = linkAmount;
    component.linkHiring = linkHiring;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the closeActionEmit() function', () => {
    const spy = spyOn(component, 'closeActionEmit').and.callThrough();
    component.closeActionEmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the saveActionEmit() function', () => {
    const spy = spyOn(component, 'saveActionEmit').and.callThrough();
    component.saveActionEmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the selectActionEmit() function', () => {
    const spy = spyOn(component, 'selectActionEmit').and.callThrough();
    const ev = new Event('Evento de prueba');
    component.selectActionEmit(ev);
    expect(spy).toHaveBeenCalled();
  });
});
