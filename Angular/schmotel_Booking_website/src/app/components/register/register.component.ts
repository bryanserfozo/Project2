import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayInfoService } from 'src/app/services/pay-info.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string = "";
  username:string = "";
  firstName:string = "";
  lastName:string = "";
  password:string = "";
  phoneNumber:string = "";
  cardNumber:number = 0;
  cardFirstName:string = "";
  cardLastName:string = "";
  error: boolean = false;

  onSubmit(){
    console.log(this.email, this.username, this.firstName, this.lastName, this.password)
    this.userService.register(0, this.email,this.username,this.firstName,this.lastName,this.password, this.phoneNumber)
    .subscribe((data)=>{
      console.log(data)
      let res = JSON.parse(JSON.stringify(data))
      this.payInfoService.createPayInfo(0, res.id, this.cardFirstName, this.cardLastName, this.cardNumber)
      .subscribe((res)=> console.log(res))
      this.router.navigateByUrl('/login')
    })
  }

  navigateLogin():void{
    
    this.router.navigate(['login']);
  }

  constructor(private router:Router, private userService:UserServiceService, private payInfoService:PayInfoService){}

  ngOnInit(): void {
  }

}
