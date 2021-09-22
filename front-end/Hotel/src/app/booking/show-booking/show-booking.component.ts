import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookingService } from 'src/app/shared/booking.service';
import { Booking } from 'src/app/shared/booking.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-booking',
  templateUrl: './show-booking.component.html',
  styleUrls: ['./show-booking.component.css']
})
export class ShowBookingComponent implements OnInit {

  constructor(public bookingService: BookingService,public route:ActivatedRoute,public router:Router,private http : HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }


  onPayment(){
    window.location.href = "http://localhost:3002/";
  }
 

  getAll(){
    this.bookingService.getBooking().subscribe((res) => {
      this.bookingService.bookings = res as Booking[];
    });
  }

  onCheckout(_id: String, form: NgForm){
    if (confirm('Are you sure to delete this Room ?') == true) {
      this.bookingService.checkout(_id).subscribe((res) => {
        console.log(res);
        alert("Checkout Successfully");
        this.getAll();
      });
    }
  }
}
