import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

import { RoomService } from 'src/app/shared/room.service';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
  providers:[RoomService]
})
export class AddRoomComponent implements OnInit {

  constructor(public roomService: RoomService,public router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.roomService.selectedRoom = {
      _id:"",
      roomNo:"",
      roomType:"",
      occupancy:"",
      price:"",
      description:"",
      status:""
    }
  }

  onSubmit(form : NgForm){
    this.roomService.postRoom(form.value).subscribe(res => {
      alert("added Room Successfully");
      this.router.navigate(['/room']);
      console.log(res);
      
    });
  }
}
