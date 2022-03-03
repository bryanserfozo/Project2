import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main-page/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

import { RegisterComponent } from './components/register/register.component';

import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

// import { SearchresultService } from './services/searchresult.service';
import { UserServiceService } from './services/user-service.service';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { BookingTableComponent } from './components/booking-table/booking-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BookingService } from './services/booking.service';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SearchComponent,
    RegisterComponent,
    SearchFilterComponent,
    NavComponent,
    ResultsComponent,
    BookingInfoComponent,
    BookingHistoryComponent,
    BookingTableComponent
  ],

  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule],

  providers: [ UserServiceService, BookingService],

  bootstrap: [AppComponent],
})
export class AppModule {}
