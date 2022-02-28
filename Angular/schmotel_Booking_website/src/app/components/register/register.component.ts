import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  error: boolean = false;

  onSubmit():void{
    console.log(this.email, this.username, this.firstName, this.lastName, this.password)
    this.userService.register(0, this.email,this.username,this.firstName,this.lastName,this.password, this.phoneNumber)
    .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/login')
    })
  }

  navigateLogin():void{
    
    this.router.navigate(['login']);
  }

  constructor(private router:Router, private userService:UserServiceService){}

  ngOnInit(): void {
  }

}
