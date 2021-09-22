import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


import { RoomService } from '../shared/room.service'
import {Room} from '../shared/room.model'

interface Room1 {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css'],
  providers:[RoomService]
})
export class SearchRoomComponent implements OnInit {

 
  roomType:String='';
  status:String='Available';
  constructor(public roomService: RoomService,private router: Router) { 
  }

  ngOnInit(): void {
    
  }

  
  displayedColumns: string[] = ['roomNo', 'roomType', 'price'];
  

  rooms: Room1[] = [
    {value: 'Single Bed', viewValue: 'Single Bed'},
    {value: 'Double Bed', viewValue: 'Double Bed'},
    {value: 'Delux', viewValue: 'Delux'}
  ];

 onSubmit(form : NgForm){
   this.roomService.getRoom(this.roomType,this.status)
  }
  
  refershRoomList(){
    this.roomService.getRoom(this.roomType,this.status).subscribe((res) => {
      this.roomService.rooms = res as Room[];
    });
  }
  onSelect(room:any){
    this.router.navigate(['/booking',room.roomNo])
  }
}


