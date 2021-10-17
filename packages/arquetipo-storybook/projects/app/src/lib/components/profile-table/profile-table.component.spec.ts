import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { ProfileTableComponent } from './profile-table.component';

describe('ProfileTableComponent', () => {
  let component: ProfileTableComponent;
  let fixture: ComponentFixture<ProfileTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileTableComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
