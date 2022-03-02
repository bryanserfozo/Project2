import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInputTuple } from 'rxjs';
import { IUser } from 'src/app/Interfaces/IUser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users:Observable<IUser[]> = new Observable<IUser[]>()

  hide:boolean = true;
  hideform: boolean = true;

  user: IUser = {
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber : ""
  }

  updateFirstName:string = "";


  showHidePaycardForm(): void{
    this.hide=!this.hide;
  }

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => this.user = user)
  }

}
