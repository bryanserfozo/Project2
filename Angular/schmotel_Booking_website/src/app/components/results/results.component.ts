import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public results = [
    {
      hotelName: 'New York Hotel',
      checkInDate: '2022-03-01',
      checkOutDate: '2022-03-15',
      rating: 3.5,
      numGuests: 2,
      price: 150,
    },
    {
      hotelName: 'Seattle Hotel',
      checkInDate: '2022-03-15',
      checkOutDate: '2022-03-20',
      rating: 2,
      numGuests: 4,
      price: 75,
    },
    {
      hotelName: 'Land O Lakes Hotel',
      checkInDate: '2022-03-01',
      checkOutDate: '2022-03-15',
      rating: 5,
      numGuests: 3,
      price: 88,
    },
    {
      hotelName: 'Columbus Hotel',
      checkInDate: '2022-03-20',
      checkOutDate: '2022-04-15',
      rating: 4.5,
      numGuests: 1,
      price: 100,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
