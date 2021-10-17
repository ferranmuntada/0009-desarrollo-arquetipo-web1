import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SearchInputModule } from '../../components/search-input';
import { CustomerInfoModule } from '../../components/customer-info';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SearchInputModule,
    CustomerInfoModule,
  ],
  exports: [
    BrowserAnimationsModule,
    HomeComponent,
    SearchInputModule,
    CustomerInfoModule,
  ],
})
export class HomeModule {}
