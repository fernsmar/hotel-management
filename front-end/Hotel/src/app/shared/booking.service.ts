import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  selectedBooking: Booking = new Booking;
  bookings: Booking[] = [];
  readonly baseURL = 'http://localhost:3000';

  constructor(private http : HttpClient) { }
  postBooking(book : Booking){
    return this.http.post(this.baseURL+'/booking',book,{responseType: 'text'});
  }

  getBooking(){
    return this.http.get(this.baseURL+'/booking')
  }

  getpayment(){
    window.location.href = "http://localhost:3002/";
  }
  
  checkout(_id:any){
    return this.http.delete(this.baseURL+'/booking'+ `/${_id}`,{responseType: 'text'});
  }
}
