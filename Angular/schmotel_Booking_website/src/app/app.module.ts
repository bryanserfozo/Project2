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
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserServiceService } from './services/user-service.service';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';

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
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],

  providers: [ UserServiceService],

  bootstrap: [AppComponent],
})
export class AppModule {}
