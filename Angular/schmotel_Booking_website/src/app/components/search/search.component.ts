import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from 'src/app/Interfaces/search';
import { SearchresultService } from 'src/app/services/searchresult.service';
import { Destination } from 'src/app/Interfaces/destination';
import { SearchServiceService } from 'src/app/services/search-service.service';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { MainComponent } from 'src/app/main-page/main/main.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() notify = new EventEmitter<IHotel[]>();

  hotels: IHotel[] = [];

  hotel: IHotel = {
    id: 0,
    hotelName: '',
    rating: '',
    price: '',
    thumbnailUrl: '',
  };

  location: string = '';
  checkInDate: string = '';
  checkOutDate: string = '';
  numAdults: number = 0;

  error: boolean = false;

  //submit the form and get values
  async onSubmit(): Promise<void> {
    this.hotels = [];
    console.log(
      this.location,
      this.checkInDate,
      this.checkOutDate,
      this.numAdults
    );
    await this.searchService.getHotels(
      this.location,
      this.checkInDate,
      this.checkOutDate,
      this.numAdults
    );
    this.hotels = this.searchService.hotels;
    console.log(this.searchService.hotels);
    this.notify.emit(this.hotels);
  }

  ngOnInit(): void {
 
  }

//celiacodetestapicall

//   public callApi() {
//       console.log("the api has been called");
//       this.searchresultService.callApi().subscribe((data)=>{
//        console.log(data);
//        if (data.suggestions){
         
//        }
//         });
//   }


 // searchFilter = false;

  // plus/minus number of guests
  public setNumGuest(type: string): void {
    console.log('clicked ');
    type === 'plus' ? this.numAdults++ : this.numAdults--;
  }

  // lstdestinations: Destination[] = [];

  constructor(
    private searchService: SearchServiceService,
    private router: Router
  ) {}
  // searchreaultData = null;


  ngOnInit(): void {
    //   this.searchresultService.getsearchresult().subscribe((data)=>{
    //     console.log(data);
    //     this.searchreaultData = data;
    //   });
  }

  
