import { Component, OnInit } from '@angular/core';
import { SearchComponent } from 'src/app/components/search/search.component';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  hotels: IHotel[] = [];

<<<<<<< HEAD
  hotels:IHotel[] =[]

  onNotifyClicked(list:any){
    this.hotels = [];
    this.hotels = list;
  }

  constructor(private searchService:SearchServiceService) { }

  ngOnInit(): void {
=======
  onNotifyClicked(list: any) {
    this.hotels = [];
    this.hotels = list;
>>>>>>> 3ffdd831c81345b612fb8c659b78cb47cb2c9c97
  }

  constructor(private searchService: SearchServiceService) {}

  ngOnInit(): void {}
}
