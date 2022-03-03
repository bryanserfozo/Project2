import { Injectable } from '@angular/core';
import { IHotel } from '../Interfaces/IHotel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  hotels: IHotel[] = [];

  entry: IHotel = {
    id: 0,
    hotelName: '',
    rating: '',
    price: '',
    thumbnailUrl: '',
    address: '',
    description:''
  };

  async getHotels(
    location: string,
    checkInDate: string,
    checkOutDate: string,
    numAdults: number
  ) {
    this.hotels = [];
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-rapidapi-host', 'hotels4.p.rapidapi.com')
      .set(
        'x-rapidapi-key',
        '44b3c64519mshaa86b6304abe377p19c896jsne726492bbb98'
      );
    let destUrl =
      'https://hotels4.p.rapidapi.com/locations/v2/search?query=' +
      location +
      '&locale=en_US&currency=USD';
    let destination = await lastValueFrom(
      this.http.get(destUrl, { headers: headers })
    ).then((response) => JSON.parse(JSON.stringify(response)));
    let destId = destination.suggestions[0].entities[0].destinationId;
    let propUrl =
      'https://hotels4.p.rapidapi.com/properties/list?destinationId=' +
      destId +
      '&pageNumber=1&pageSize=25&checkIn=' +
      checkInDate +
      '&checkOut=' +
      checkOutDate +
      '&adults1=' +
      numAdults +
      '&sortOrder=PRICE&locale=en_US&currency=USD';
    let propertieslist = await lastValueFrom(
      this.http.get(propUrl, { headers: headers })
    ).then((response) => JSON.parse(JSON.stringify(response)));
    console.log("Process Hotel Info")
    for (
      let i = 0;
      i < propertieslist.data.body.searchResults.results.length;
      i++
    ) {
      try {
        this.entry.id = propertieslist.data.body.searchResults.results[i].id;
        this.entry.hotelName =
          propertieslist.data.body.searchResults.results[i].name;
        this.entry.rating =
          propertieslist.data.body.searchResults.results[i].guestReviews.rating;
        this.entry.price =
          propertieslist.data.body.searchResults.results[
            i
          ].ratePlan.price.current;
        this.entry.thumbnailUrl =
          propertieslist.data.body.searchResults.results[
            i
          ].optimizedThumbUrls.srpDesktop;
        this.hotels.push(this.entry);
        this.entry = {
          id: 0,
          hotelName: '',
          rating: '',
          price: '',
          thumbnailUrl: '',
        };
      } catch {
        continue;
      }
    }
  }


  async getHotelInfo(
    hotelId: number,
    checkInDate: string,
    checkOutDate: string,
    numAdults: number
  ){
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-rapidapi-host', 'hotels4.p.rapidapi.com')
      .set(
        'x-rapidapi-key',
        '44b3c64519mshaa86b6304abe377p19c896jsne726492bbb98'
      );
    let infoUrl = "https://hotels4.p.rapidapi.com/properties/get-details?id=" + 
    hotelId + 
    "&checkIn=" + 
    checkInDate + 
    "&checkOut=" + 
    checkOutDate + 
    "&adults1=" + 
    numAdults + 
    "&currency=USD&locale=en_US"

    let hotelInfo = await lastValueFrom(
      this.http.get(infoUrl, { headers: headers })
    ).then((response) => JSON.parse(JSON.stringify(response)));
    this.entry.address = hotelInfo.data.body.propertyDescription.address.fullAddress;
    this.entry.description = "\n";
    for ( let i = 0; i<hotelInfo.data.body.overview.overviewSections.length-1; i++){
      for ( let j = 0; j<hotelInfo.data.body.overview.overviewSections[i].content.length; j++)
      this.entry.description += hotelInfo.data.body.overview.overviewSections[i].content[j] + "\n";
    }

  }
  constructor(private http: HttpClient) {}

}
