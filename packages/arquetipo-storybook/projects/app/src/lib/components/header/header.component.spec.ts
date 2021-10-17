import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuItems } from '../../shared/interfaces/menuitems.interface';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const menuItems: Array<MenuItems> = [
    { text: 'Link 1', class: 'active', navigation: '#' },
    { text: 'Link 2', class: '', navigation: '#' },
    { text: 'Link 3', class: '', navigation: '#' },
    { text: 'Link 4', class: '', navigation: '#', disabled: true },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.menuItems = menuItems;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the goBackAction()', () => {
    const spy = spyOn(component, 'goBackAction').and.callThrough();
    component.goBackAction();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the informationUser()', () => {
    const spy = spyOn(component, 'informationUser').and.callThrough();
    component.informationUser();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the navigationMenu()', () => {
    const spy = spyOn(component, 'navigationMenu').and.callThrough();
    component.navigationMenu(component.menuItems[0]);
    expect(spy).toHaveBeenCalled();
  });
});
