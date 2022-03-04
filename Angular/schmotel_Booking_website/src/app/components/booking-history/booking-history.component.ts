import { Component, OnInit } from '@angular/core';
import { IPastBooking } from 'src/app/Interfaces/IPastBooking';
import { BookingService } from 'src/app/services/booking.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  pastBookings:Observable<IPastBooking[]> = new Observable<IPastBooking[]>();

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getPastBooking(1);
    this.pastBookings = this.bookingService.bookingSubject;
  }

}
