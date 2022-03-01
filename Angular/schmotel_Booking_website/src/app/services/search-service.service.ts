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
  };

  async getHotels(
    location: string,
    checkInDate: string,
    checkOutDate: string,
    numAdults: number
  ) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-rapidapi-host', 'hotels4.p.rapidapi.com')
      .set(
        'x-rapidapi-key',
        '13b1eeb183msh58e9387b74bbd30p13f30ejsnf3d12efe8960'
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
  constructor(private http: HttpClient) {}
}
