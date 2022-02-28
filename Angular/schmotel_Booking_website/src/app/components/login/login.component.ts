import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  navigateRegister():void{
    
    this.router.navigate(['register']);
  }

  constructor(private router:Router){}

  ngOnInit(): void {
  }

}
