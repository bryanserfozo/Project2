import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IPastBooking } from 'src/app/Interfaces/IPastBooking';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent implements OnInit {

  @Input() pastBooking: IPastBooking = {
    bookingId: 0,
    bookingDate: "",
    checkInDate: "",
    checkOutDate: "",
    hotel: 0,
    numNights: 0,
    user: {
      id : 0,
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber : ""
    }
}

  
  constructor() { }

  ngOnInit(): void {
    console.log(this.pastBooking);
  }

}
