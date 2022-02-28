import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private URL: string =
  
  constructor(private http: HttpClient) {}

  getHotels(){
return this.http.get();

  }
}
