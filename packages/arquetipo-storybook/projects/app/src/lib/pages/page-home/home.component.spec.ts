import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SearchInputModule } from '../../components/search-input';
import { CustomerInfoModule } from '../../components/customer-info';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [BrowserAnimationsModule, SearchInputModule, CustomerInfoModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the #onActionChange()', () => {
    const spy = spyOn(
      component.customCustomerInfo.customSelect,
      'onActionChange'
    ).and.callThrough();
    component.customCustomerInfo.customSelect.onActionChange(0);
    expect(spy).toHaveBeenCalled();
  });
  it('should call the #subscribeToFormFilters()', () => {
    spyOn(component.customSearchInput.changes, 'emit').and.callThrough();
    component.customSearchInput.formGroupSearch.get('search').setValue('hello');
    fixture.detectChanges();
    expect(component.customSearchInput.changes.emit).toHaveBeenCalledWith(
      'hello'
    );
  });
  it('should call the #goToUserProposal()', () => {
    spyOn(component.customCustomerInfo, 'goToUserProposal').and.callThrough();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.customer-go');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.customCustomerInfo.goToUserProposal).toHaveBeenCalled();
  });
  it('userProposal should emit value', () => {
    spyOn(component.customCustomerInfo.userProposal, 'emit').and.callThrough();
    component.customCustomerInfo.proposalSelected = 'hello';
    component.customCustomerInfo.user = {
      name: 'Jose',
      lastname: 'Manuel Perez',
      type: 'equilibrado',
      available: true,
      patrimony: 52416362,
    };
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.customer-go');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.customCustomerInfo.userProposal.emit).toHaveBeenCalledWith(
      {
        user: component.customCustomerInfo.user,
        proposal: component.customCustomerInfo.proposalSelected,
      }
    );
  });
});
