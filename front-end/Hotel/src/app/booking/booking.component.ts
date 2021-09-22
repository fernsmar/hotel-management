import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RoomService } from '../shared/room.service';

import { BookingService } from '../shared/booking.service';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookingService,RoomService]
})
export class BookingComponent implements OnInit {

  public rno:any;
  public date:any;
  constructor(public bookingService: BookingService,public route:ActivatedRoute,public router:Router,public roomService:RoomService) { }

  ngOnInit(): void {
    this.resetForm();
    let roomNo = this.route.snapshot.paramMap.get('roomNo');
    this.rno=roomNo
    this.date = new Date().toISOString().slice(0, 10);

  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.bookingService.selectedBooking = {
      _id:"",
      roomNo:"rno",
      name:"",
      children:"",
      adult:"",
      checkin:"",
      checkout:"",
      days:""
    }
  }

  onSubmit(form : NgForm){
    this.bookingService.postBooking(form.value).subscribe((res)=>{
      this.resetForm(form);
      alert("booking Successfull");
      this.router.navigate(['/userHome']);
      this.roomService.updateRoom1(this.rno);
    })
  }

}
