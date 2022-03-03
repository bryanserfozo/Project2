import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ISearch } from 'src/app/Interfaces/ISearch';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Output() filter = new EventEmitter<ISearch>();

  search:ISearch = {
    location: '',
    checkIn: '',
    checkOut: '',
    numAdults: 1,
    pageNumber: 1,
    searchOrder: 0
  }

  sortBestSellers(){
    console.log("clicked 0")
    this.search.searchOrder = 0;
    this.dataService.changeSearch(this.search)
    this.filter.emit(this.search)
  }

  sortPriceLowHigh(){
    console.log("clicked 1")
    this.search.searchOrder = 1;
    this.dataService.changeSearch(this.search)
    this.filter.emit(this.search)
  }

  sortPriceHighLow(){
    console.log("clicked 2")
    this.search.searchOrder = 2;
    this.dataService.changeSearch(this.search)
    this.filter.emit(this.search)
  }

  sortRating(){
    console.log("clicked 3")
    this.search.searchOrder = 3;
    this.dataService.changeSearch(this.search)
    this.filter.emit(this.search)
  }

  constructor(private router:Router, private dataService:DataService) { }

  async ngOnInit(){
    await this.dataService.currentSearch.subscribe(search => this.search = search)
  }

}
