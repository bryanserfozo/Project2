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
import { SearchService } from './services/search.service';

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
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],

  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
