import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  error:boolean=false;

 onSubmit():void{
    console.log(this.email,this.password)
    this.userService.login(this.email,this.password)
    .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/home')
    
  })
 }

 navigateRegister():void{
    
  this.router.navigate(['register']);
}

  constructor(private router:Router,private userService:UserServiceService) {}

  ngOnInit(): void {
  }

}
