import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Search } from 'src/app/Interfaces/search';
import { SearchresultService } from 'src/app/services/searchresult.service';
import { Destination } from 'src/app/Interfaces/destination';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private http: HttpClient) {}
  // constructor(private searchresultService: SearchresultService) {}

  destination = '';
  checkInDate = '';
  checkOutDate = '';
  numGuests = 2;

  //submit the form and get values
  onSubmit(data: any) {
    console.log(data);
    this.http.post('', data);
  }
  // plus/minus number of guests
  public setNumGuest(type: string): void {
    console.log('clicked ');
    type === 'plus' ? this.numGuests++ : this.numGuests--;
  }

  lstdestinations: Destination[] = [];

  // searchreaultData = null;

  ngOnInit(): void {
    //   this.searchresultService.getsearchresult().subscribe((data)=>{
    //     console.log(data);
    //     this.searchreaultData = data;
    //   });
  }

  //   public callApi() {

  //     console.log('the api has been called');
  //     // this.searchresultService.callApi().subscribe((data)=>{
  //     //  console.log(data);
  //     //   });

  //   // searchFilter = false;
  // }
}
