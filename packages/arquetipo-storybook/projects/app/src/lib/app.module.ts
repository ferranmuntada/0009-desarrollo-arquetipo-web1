import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from './components/alert';
import { BoxItemsModule } from './components/box-items';
import { ButtonModule } from './components/button';
import { BigButtonModule } from './components/button-big';
import { DoubleButtonModule } from './components/button-double';
import { CheckBoxModule } from './components/check-box';
import { CustomerInfoModule } from './components/customer-info';
import { DataTableModule } from './components/datatable';
import { HeaderModule } from './components/header';
import { NewProposalModule } from './components/new-proposal/storybook';
import { ProfileTableModule } from './components/profile-table';
import { ProgressBarModule } from './components/progress-bar';
import { ProposalMessageModule } from './components/proposal-message';
import { RadioButtonListModule } from './components/radio-button-list';
import { SearchInputModule } from './components/search-input';
import { SelectModule } from './components/select';
import { SliderToggleModule } from './components/slider-toggle';
import { SharedModule } from './shared/shared.module';
import { SubHeaderModule } from './components/sub-header/sub-header.module';
import { ChartCircleModule } from './components/chart-circle';
import { AccordionModule } from './components/accordion';
import { ChartBarModule } from './components/chart-bar/chart-bar.module';
@NgModule({
  declarations: [],
  imports: [BrowserModule],
  exports: [
    SharedModule,
    CommonModule,
    AlertModule,
    BoxItemsModule,
    ButtonModule,
    BigButtonModule,
    DoubleButtonModule,
    CheckBoxModule,
    CustomerInfoModule,
    DataTableModule,
    HeaderModule,
    NewProposalModule,
    ProfileTableModule,
    ProgressBarModule,
    ProposalMessageModule,
    RadioButtonListModule,
    SearchInputModule,
    SelectModule,
    SliderToggleModule,
    SubHeaderModule,
    ChartCircleModule,
    AccordionModule,
    ChartBarModule,
  ],
})
export class AppModule {}
