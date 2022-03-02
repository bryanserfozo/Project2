import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInputTuple } from 'rxjs';
import { IUser } from 'src/app/Interfaces/IUser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users:Observable<IUser[]> = new Observable<IUser[]>()

<<<<<<< HEAD
  hide:boolean = true;
  hideform: boolean = true;
=======
  hide:boolean = false;
  hideform:boolean = false;
>>>>>>> b0d98b2e78b391a26f520cb4238554ee3798d081

  user: IUser = {
    id: 0,
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber : ""
  }

  updateFirstName:string = "";


  updateFirstName: string = "";
  updateLastName: string = "";
  updateUsername: string = "";
  updateEmail: string = "";
  updatePassword: string = "";
  updatePhoneNumber: string = "";



  showHidePaycardForm(): void{
    this.hide=!this.hide;
  }

  show(): void{
    this.hideform=!this.hideform;
  }

  updateUser(): void{
    if(this.updateFirstName !== ""){
      this.user.firstName = this.updateFirstName;
    }
    if(this.updateLastName !== ""){
      this.user.lastName = this.updateLastName;
    }
    if(this.updateUsername !== ""){
      this.user.username = this.updateUsername;
    }
    if(this.updateEmail !== ""){
      this.user.email = this.updateEmail;
    }
    if(this.updatePassword !== ""){
      this.user.password = this.updatePassword;
    }
    if(this.updatePhoneNumber !== ""){
      this.user.phoneNumber = this.updatePhoneNumber;
    }
    this.userService.updateUser(this.user);
    this.dataService.changeUser(this.user);
    alert("updated");
    this.router.navigate(['user']);
  }

  constructor(private dataService:DataService, private userService:UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => this.user = user)
  }

}
