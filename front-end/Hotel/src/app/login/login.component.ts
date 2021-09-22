import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService,private router:Router) { }
  
  serverErrorMessages!: string;

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.userService.selectedUser = {
      _id:"",
      type:"",
      username:"",
      password:""
    }
  }

  onSubmit(form : NgForm){
    if(this.userService.selectedUser.username=="" || this.userService.selectedUser.password=="" ){
      alert("please sepcify username or password");
    }
    else if(this.userService.selectedUser.password.length<6){
      alert("please enter password of minimum 6 characters");
    }
    else if(this.userService.selectedUser.type=='Manager'){
      this.userService.postLogin(form.value).subscribe((res)=>{
        alert("login Successfull");
          this.router.navigate(['/managerHome'])
      })
    }
    else if(this.userService.selectedUser.type=='Reception'){
      this.userService.postLogin(form.value).subscribe((res)=>{
        alert("login Successfull");
          this.router.navigate(['/userHome'])
      })
    }
    /*this.userService.postLogin(form.value).subscribe(res =>{
      alert("login Successfull");
      if(this.userService.selectedUser.type="Manager"){
      this.router.navigate(['/managerHome'])}
      else if(this.userService.selectedUser.type="Reception"){
        this.router.navigate(['/userHome'])}
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });*/
  }

}
