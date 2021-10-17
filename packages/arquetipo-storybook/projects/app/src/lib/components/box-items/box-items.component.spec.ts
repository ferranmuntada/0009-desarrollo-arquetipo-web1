import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxItemsComponent } from './box-items.component';

describe('BoxItemsComponent', () => {
  let component: BoxItemsComponent;
  let fixture: ComponentFixture<BoxItemsComponent>;

  const settings = {
    title: '<span>900.217</span><span class="decimal">,00 €</span>',
    subTitle: 'IMPORTE ANALIZADO',
    listItems: [
      'Servicios Bancarios',
      'Inversiones en forma de Seguro de Vida',
      'Inversiones Bancarias',
    ],
    amountDecimal: '00',
    footerText: 'Editar filtros',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxItemsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxItemsComponent);
    component = fixture.componentInstance;
    component.settings = settings;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the editFilterAction()', () => {
    const spy = spyOn(component, 'editFilterAction').and.callThrough();
    const event = new Event('Prueba de evento');
    component.editFilterAction(event);
    expect(spy).toHaveBeenCalled();
  });
});
