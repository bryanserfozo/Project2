import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, lastValueFrom } from 'rxjs';
import { IPayInfo } from '../Interfaces/IPayInfo';

@Injectable({
  providedIn: 'root'
})
export class PayInfoService {

  createPayInfo(
    paymentId : number,
    userId : number,
    firstName : string,
    lastName : string,
    cardNumber : number
  ): Observable<IPayInfo> {
    return this.http.post<IPayInfo>('http://35.226.38.161:7000/pay-info/',
    JSON.stringify({
      paymentId,
      userId,
      firstName,
      lastName,
      cardNumber}),
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

  payInfo: IPayInfo = {
    paymentId : 0,
    userId : 0,
    firstName : "",
    lastName: "",
    cardNumber: 0
  }

  async getPayInfo(userId: number){
    let userIdParam = userId.toString()
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('id', userIdParam)
    let payUrl="http://35.226.38.161:7000/pay-info/" 
    let paymentInfo = await lastValueFrom(
    this.http.get(payUrl, { headers: headers })
  ).then((response) => JSON.parse(JSON.stringify(response)))
  .catch((error)=>console.log(error));
  this.payInfo.paymentId = paymentInfo.paymentId
  this.payInfo.userId = paymentInfo.userId
  this.payInfo.firstName = paymentInfo.firstName
  this.payInfo.lastName = paymentInfo.lastName
  this.payInfo.cardNumber = paymentInfo.cardNumber
  }

  updatePayInfo(
    paymentId:number,
    userId:number,
    firstName:string,
    lastName:string,
    cardNumber:number
  ){
    this.http.put<IUser>('http://35.226.38.161:7000/pay-info/', JSON.stringify({
  paymentId,
  userId,
  firstName,
  lastName,
  cardNumber
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


  constructor(private http:HttpClient) { }
}
