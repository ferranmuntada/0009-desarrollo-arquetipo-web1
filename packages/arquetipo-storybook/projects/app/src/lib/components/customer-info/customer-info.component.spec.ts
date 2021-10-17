import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoComponent } from './customer-info.component';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SelectModule } from '../select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomerInfoComponent', () => {
  let component: CustomerInfoComponent;
  let fixture: ComponentFixture<CustomerInfoComponent>;

  const user: UserInterface = {
    name: 'Jose',
    lastname: 'Manuel Perez',
    type: 'equilibrado',
    available: true,
    patrimony: 52416362,
  };
  const settingsSelect = {
    firstOption: 'Ninguna',
    title: 'Propuestas',
    listItemSelect: [
      {
        id: 0,
        name: 'Propuesta 1',
      },
      {
        id: 1,
        name: 'Propuesta 2',
      },
      {
        id: 2,
        name: 'Propuesta 3',
      },
      {
        id: 3,
        name: 'Propuesta 4',
      },
      {
        id: 4,
        name: 'Propuesta 5',
      },
    ],
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerInfoComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatIconModule,
        SelectModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoComponent);
    component = fixture.componentInstance;
    component.settingsSelect = settingsSelect;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the goToUserProposal() function', () => {
    component.goToUserProposal();
    expect(component).not.toBeNull();
  });

  it('should call the goToUserProposal() function and emit proposal', () => {
    component.proposalSelected = '1';
    component.goToUserProposal();
    expect(component).not.toBeNull();
  });
  it('should call the #onActionChange()', () => {
    const spy = spyOn(
      component.customSelect,
      'onActionChange'
    ).and.callThrough();
    component.customSelect.onActionChange(3);
    expect(spy).toHaveBeenCalled();
  });
});
