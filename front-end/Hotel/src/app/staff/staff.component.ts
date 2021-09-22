import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';


import { StaffService } from '../shared/staff.service';
import {Staff} from '../shared/staff.model'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  providers:[StaffService]
})
export class StaffComponent implements OnInit {

  staffNo:String='';
  constructor(public staffService: StaffService,private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  onSubmit(form : NgForm){
    this.staffService.getStaff1(this.staffNo);
   }


  getAll(){
    this.staffService.getStaff().subscribe((res) => {
      this.staffService.staffs = res as Staff[];
    });
  }
  refershStaffList(){
    this.staffService.getStaff1(this.staffNo).subscribe((res) => {
      this.staffService.staffs = res as Staff[];
    });
  }

  onSelect(staff:any){
    this.router.navigate(['/editstaff',staff.staffNo,staff.name,staff.department,staff.salary])
  }

  onDeletestaff(staffNo: String, form: NgForm){
    if (confirm('Are you sure to delete this Staff ?') == true) {
      this.staffService.deleteStaff(staffNo).subscribe((res) => {
        console.log(res);
        alert("Deleted Successfully");
        this.getAll();
      });
    }
  }

}
