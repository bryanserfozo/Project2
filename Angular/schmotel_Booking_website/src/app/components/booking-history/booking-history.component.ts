import { Component, OnInit } from '@angular/core';
import { IPastBooking } from 'src/app/Interfaces/IPastBooking';
import { BookingService } from 'src/app/services/booking.service';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { IUser } from 'src/app/Interfaces/IUser';

@Component({
  selector: 'booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  user: IUser = {
    id: 0,
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber : ""
  }

  pastBookings:Observable<IPastBooking[]> = new Observable<IPastBooking[]>();

  constructor(private bookingService: BookingService, private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => this.user = user)
    this.bookingService.getPastBooking(this.user.id);
    this.pastBookings = this.bookingService.bookingSubject;
  }

}
