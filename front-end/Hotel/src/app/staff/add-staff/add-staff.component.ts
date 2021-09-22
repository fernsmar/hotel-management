import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
  providers:[StaffService]
})
export class AddStaffComponent implements OnInit {

  constructor(public staffService: StaffService,public router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.staffService.selectedStaff = {
      _id:"",
      staffNo:"",
      name:"",
      department:"",
      salary:""
    }
  }

  onSubmit(form : NgForm){
    this.staffService.postStaff(form.value).subscribe(res => {
      alert("added Staff Successfully");
      this.router.navigate(['/staff']);
      console.log(res);
      
    });
  }

}
