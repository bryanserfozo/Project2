import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  navigateLogin():void{
    
    this.router.navigate(['login']);
  }

  constructor(private router:Router){}

  ngOnInit(): void {
  }

}
