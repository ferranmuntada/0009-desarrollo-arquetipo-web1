import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybookComponent } from './storybook.component';
import { ProfileTableModule } from '../profile-table.module';

describe('StorybookComponent', () => {
  let component: StorybookComponent;
  let fixture: ComponentFixture<StorybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StorybookComponent],
      imports: [ProfileTableModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
