import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { MainComponent} from './main-page/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';


import { RouterModule, Routes } from '@angular/router';


const routes: Routes =
 [
   {path:'',redirectTo:'/home',pathMatch:'full'},
   {path:'home', component: MainComponent},
   {path:'login',component:LoginComponent}

 ]

@NgModule({
  declarations:[],
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
