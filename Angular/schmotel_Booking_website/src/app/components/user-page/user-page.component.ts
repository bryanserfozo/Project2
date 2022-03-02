import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInputTuple } from 'rxjs';
import { IUser } from 'src/app/Interfaces/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users:Observable<IUser[]> = new Observable<IUser[]>()

  hide:boolean = true;

  user: IUser = {
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber : ""
  }

  //navigateMyAccount():void{
    
  //  this.router.navigate(['My Account']);
  //}

  showHidePaycardForm(): void{
    this.hide=!this.hide;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
