import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from 'src/app/Interfaces/IHotel';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() result: IHotel = {
    id: 0,
    hotelName: '',
    rating: '',
    price: '',
    thumbnailUrl: '',
  };

<<<<<<< HEAD
  @Input() result:IHotel = {
    id:0,
    hotelName : "",
    rating:"",
    price:"",
    thumbnailUrl:""
  };

  constructor() { }

  ngOnInit(): void {
  }
=======
  constructor() {}
>>>>>>> 3ffdd831c81345b612fb8c659b78cb47cb2c9c97

  ngOnInit(): void {}
}
