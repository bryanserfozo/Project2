import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  registerUser: IUser = {
    id: 0,
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '1234567891',
  };

  register(
    id: number,
    email: string,
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    phoneNumber: string
  ): Observable<IUser> {
    return this.http
      .post<IUser>(
        'http://localhost:7000/user/',
        JSON.stringify({
          id,
          email,
          username,
          firstName,
          lastName,
          password,
          phoneNumber,
        }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }

  constructor(private http: HttpClient) {}
}
