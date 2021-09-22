import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  public sno:any;
  public nam:any;
  public dep:any;
  public sal:any;
  
  constructor(public staffService: StaffService,public router: Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    let staffNo = this.route.snapshot.paramMap.get('staffNo');
    this.sno=staffNo;
    let name = this.route.snapshot.paramMap.get('name');
    this.nam=name
    let department = this.route.snapshot.paramMap.get('department');
    this.dep=department
    let salary = this.route.snapshot.paramMap.get('salary');
    this.sal=salary
  }

  onSubmit(form : NgForm){
    this.staffService.updateStaff(form.value).subscribe(res => {
      alert("Updated Room Successfully");
      this.router.navigate(['/staff']);
      console.log(res);
      
    });
  }

}
