import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Search } from '../Interfaces/search';
import { catchError, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchresultService {
  constructor(private httpclient: HttpClient) {}

  //   getsearchresult(): Observable<any> {
  //        console.log("request is send");
  //          return this.httpclient.get("https://hotels4.p.rapidapi.com/properties/list");
  //   }

  callApi(): Observable<any> {
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'hotels4.p.rapidapi.com')
      .set(
        'x-rapidapi-key',
        '1102d71a47msh51a4afddc13a729p1720b3jsn54bd62d2efb3'
      );

    const params = new HttpParams()
      .set('query', 'new york')
      .set('locale', 'en_US')
      .set('currency', 'USD');

    console.log('request is send');
    return this.httpclient.get(
      'https://hotels4.p.rapidapi.com/locations/v2/search',
      { headers: headers, params: params }
    );
  }
}
