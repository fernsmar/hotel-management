import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/shared/room.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  public rno:any;
  public rty:any;
  public occ:any;
  public pri:any;
  public des:any;
  public sta:any;
  constructor(public roomService: RoomService,public router: Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    let roomNo = this.route.snapshot.paramMap.get('roomNo');
    this.rno=roomNo;
    let roomType = this.route.snapshot.paramMap.get('roomType');
    this.rty=roomType
    let occupancy = this.route.snapshot.paramMap.get('occupancy');
    this.occ=occupancy
    let price = this.route.snapshot.paramMap.get('price');
    this.pri=price
    let description = this.route.snapshot.paramMap.get('description');
    this.des=description
    let status = this.route.snapshot.paramMap.get('status');
    this.sta=status
  }


  onSubmit(form : NgForm){
    this.roomService.updateRoom(form.value).subscribe(res => {
      alert("Updated Room Successfully");
      this.router.navigate(['/room']);
      console.log(res);
      
    });
  }

}
