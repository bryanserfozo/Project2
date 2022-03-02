import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/IUser';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  signedIn: boolean = false;

  navigateHome():void{
    this.router.navigate(['home']);
  }

  
  
  navigateLogin():void{
      this.dataService.changeUser({
        id: 0,
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      phoneNumber: '1234567891',
      })
      this.router.navigate(['login']);
    }
  constructor(private router:Router, private dataService:DataService){}


  async ngOnInit(): Promise<void> {
    console.log("Initialized")
    this.dataService.currentSignedIn.subscribe(value=>this.signedIn = value)
    
  }

}