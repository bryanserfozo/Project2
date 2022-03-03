import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { DataService } from 'src/app/services/data.service';

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
    address: '',
    thumbnailUrl: '',
  };

  sendHotel(newHotel:IHotel){
    this.data.changeHotel(newHotel)
    this.router.navigate(['booking']);
  }

  constructor(private data:DataService, private router:Router) {}

  ngOnInit(): void {}
}
