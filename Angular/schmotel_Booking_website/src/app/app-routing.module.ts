import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main-page/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'booking', component: BookingInfoComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'about', component: AboutComponent}
  { path: 'booking-history', component: BookingHistoryComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'confirm', component: ConfirmationComponent }

];

@NgModule({
  declarations: [],

  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
