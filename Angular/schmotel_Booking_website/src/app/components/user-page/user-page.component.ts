import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInputTuple } from 'rxjs';
import { IUser } from 'src/app/Interfaces/IUser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { IPayInfo } from 'src/app/Interfaces/IPayInfo';
import { PayInfoService } from 'src/app/services/pay-info.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users:Observable<IUser[]> = new Observable<IUser[]>()

  hide:boolean = false;
  hideform: boolean = false;

  user: IUser = {
    id: 0,
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber : ""
  }

  payInfo: IPayInfo = {
    paymentId : 0,
    userId : 0,
    firstName : "",
    lastName: "",
    cardNumber: 0
  }

  updateFirstName:string = "";
  updateLastName: string = "";
  updateUsername: string = "";
  updateEmail: string = "";
  updatePassword: string = "";
  updatePhoneNumber: string = "";

  updateCardNumber: number = 0;
  updateCardFirstName: string = "";
  updateCardLastName: string = "";

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
    this.userService.updateUser(
      this.user.id,
      this.user.email,
      this.user.firstName,
      this.user.lastName,
      this.user.username,
      this.user.password,
      this.user.phoneNumber
      );
    this.dataService.changeUser(this.user);
    alert("Updated Account Info");
    this.router.navigate(['user']);
  }

  updateCard(){
    if(this.updateCardNumber !== 0){
      this.payInfo.cardNumber = this.updateCardNumber;
    }
    if(this.updateCardFirstName !== ""){
      this.payInfo.firstName = this.updateCardFirstName;
    }
    if(this.updateCardLastName !== ""){
      this.payInfo.lastName = this.updateCardLastName;
    }
    this.payInfoService.updatePayInfo(
      this.payInfo.paymentId,
      this.payInfo.userId,
      this.payInfo.firstName,
      this.payInfo.lastName,
      this.payInfo.cardNumber
    )
    this.dataService.changePayInfo(this.payInfo)
    alert("Updated Payment Info");
    this.router.navigate(['user'])
  }

  constructor(private dataService:DataService, private userService:UserServiceService, private router:Router, private payInfoService:PayInfoService) { }

  async ngOnInit(){
    await this.dataService.currentUser.subscribe(user => this.user = user)
    await this.dataService.currentPayInfo.subscribe(pi=>this.payInfo = pi)
  }

}
