import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, lastValueFrom } from 'rxjs';


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
        'http://35.226.38.161:7000/user/',
        JSON.stringify({
          id,
          email,
          username,
          firstName,
          lastName,
          password,
          phoneNumber,
        }),
        { headers: { 'Content-Type': 'application/json' ,
        'http-equiv': 'Content-Security-Policy',
        'content': 'upgrade-insecure-requests'} }
      )
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }



loginUser: IUser = {
  id: 0,
  email: '',
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  phoneNumber: '1234567891',
};

async login(username:string)
  {
  let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('username', username)
    .set('http-equiv','Content-Security-Policy')
    .set('content', 'upgrade-insecure-requests')
    
  let loginUrl="http://35.226.38.161:7000/user/" 
  let loginInfo = await lastValueFrom(
    this.http.get(loginUrl, { headers: headers })
  ).then((response) => JSON.parse(JSON.stringify(response)))
  .catch((error)=> console.log(error));
  this.loginUser.id=loginInfo.id
  this.loginUser.email=loginInfo.email
  this.loginUser.username=loginInfo.username
  this.loginUser.firstName=loginInfo.firstName
  this.loginUser.lastName=loginInfo.lastName
  this.loginUser.password=loginInfo.password
  this.loginUser.phoneNumber=loginInfo.phoneNumber
  
}

 updateUser(
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  phoneNumber: string) {
  console.log("update method called")
  console.log(id, email, username, firstName, lastName, password, phoneNumber)
  this.http.put<IUser>('http://35.226.38.161:7000/user/', JSON.stringify({
  id,
  email,
  firstName,
  lastName,
  username,
  password,
  phoneNumber
  }),
  { headers: { 'Content-Type': 'application/json' ,
  'http-equiv': 'Content-Security-Policy',
  'content': 'upgrade-insecure-requests'} }
    )
    .pipe(
      catchError((e) => {
        return throwError(e);
      })
    )
  .subscribe(data => {
    console.log("the result is " + data)
  })
}



  
  constructor(private http: HttpClient) {}


}
