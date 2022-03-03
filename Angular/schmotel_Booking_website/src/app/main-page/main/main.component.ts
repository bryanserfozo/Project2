import { Component, OnInit } from '@angular/core';
import { SearchComponent } from 'src/app/components/search/search.component';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { ISearch } from 'src/app/Interfaces/ISearch';
import { DataService } from 'src/app/services/data.service';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  hotels: IHotel[] = [];

  search: ISearch = {
    location: '',
    checkIn: '',
    checkOut: '',
    numAdults: 1,
    pageNumber: 1,
    searchOrder: 0
  }


  onNotifyClicked(list: any) {
    this.hotels = [];
    this.hotels = list;

  }

  async onFilterClicked(search: ISearch){
    this.hotels = [];
    console.log("caught the emit")
    console.log(search)
    await this.searchService.getHotels(
      search.location,
      search.checkIn,
      search.checkOut,
      search.numAdults,
      search.pageNumber,
      search.searchOrder
    );
    this.hotels = this.searchService.hotels
  }

  async onPageChange(search: ISearch){
    this.hotels = [];
    console.log("caught the page change")
    console.log(search)
    await this.searchService.getHotels(
      search.location,
      search.checkIn,
      search.checkOut,
      search.numAdults,
      search.pageNumber,
      search.searchOrder
    );
    this.hotels = this.searchService.hotels
  }

  constructor(private searchService: SearchServiceService, private dataService:DataService) {}

  async ngOnInit(){
    // console.log("main initialized")
    // this.dataService.currentSearch.subscribe(search=>this.search = search)
    // await this.searchService.getHotels(
    //   this.search.location,
    //   this.search.checkIn,
    //   this.search.checkOut,
    //   this.search.numAdults,
    //   this.search.pageNumber,
    //   this.search.searchOrder
    // );
    // console.log(this.search)
    // console.log(this.searchService.hotels)
    // this.hotels = this.searchService.hotels;

  }
}
