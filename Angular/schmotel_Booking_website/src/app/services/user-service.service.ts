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
    
  let loginUrl="http://localhost:7000/user/" 
  let loginInfo = await lastValueFrom(
    this.http.get(loginUrl, { headers: headers })
  ).then((response) => JSON.parse(JSON.stringify(response)));
  this.loginUser.id=loginInfo.id
  this.loginUser.email=loginInfo.email
  this.loginUser.username=loginInfo.username
  this.loginUser.firstName=loginInfo.firstName
  this.loginUser.lastName=loginInfo.lastName
  this.loginUser.password=loginInfo.password
  this.loginUser.phoneNumber=loginInfo.phoneNumber
  
}




  // login(email:string,password:string):Observable<IUser>{
  //   return this.http.post<IUser>("http//localhost:7000/login",JSON.stringify({email,password}),
  //  {headers:{'Content-Type': 'application/json'}} 
  //  )
  //   .pipe (catchError((e)=>{
  //     return throwError(e);
  //   }));
  // }
  constructor(private http: HttpClient) {}


}
