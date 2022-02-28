import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from 'src/app/Interfaces/search';
import { SearchresultService } from 'src/app/services/searchresult.service';
import { Destination } from 'src/app/Interfaces/destination';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {


  lstdestinations: Destination[] = [];


  constructor(private searchresultService: SearchresultService) {

  }

    // searchreaultData = null;


  ngOnInit(): void {
  //   this.searchresultService.getsearchresult().subscribe((data)=>{

  //     console.log(data);
  //     this.searchreaultData = data;
  //   });
  }

  public callApi() {
      console.log("the api has been called");
      this.searchresultService.callApi().subscribe((data)=>{
       console.log(data);
        });
  }

  }
