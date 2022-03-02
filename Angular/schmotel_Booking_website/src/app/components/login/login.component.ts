import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  

  async onSubmit ():Promise<void>{
    console.log(this.username)
    await this.userService.login(this.username)
    if(this.password==this.userService.loginUser.password){
      console.log("correct username and password") 
      this.dataService.changeUser(this.userService.loginUser)
      this.router.navigate(['home']);
    
      
      
    }else{
      console.log("incorrect username or password")
    }
  }

 navigateRegister():void{
    
  this.router.navigate(['register']);
}

  constructor(private router:Router,private userService:UserServiceService, private dataService: DataService) {}

  ngOnInit(): void {
  }

}
