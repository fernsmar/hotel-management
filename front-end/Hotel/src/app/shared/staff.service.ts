import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  selectedStaff: Staff = new Staff;
  staffs: Staff[] = [];
  readonly baseURL = 'http://localhost:3001';

  constructor(private http : HttpClient) { }

  getStaff(){
    return this.http.get(this.baseURL+'/staff')
  }

  getStaff1(staffNo:any){
    return this.http.get(this.baseURL+'/staff'+`/${staffNo}`)
  }

  postStaff(staff : Staff){
    return this.http.post(this.baseURL+'/staff',staff,{responseType: 'text'});
  }

  deleteStaff(staffNo: any) {
    return this.http.delete(this.baseURL+'/staff'+ `/${staffNo}`,{responseType: 'text'});
  }

  updateStaff(staff: Staff){
    return this.http.put(this.baseURL+'/staff'+`/${staff.staffNo}`, staff,{responseType: 'text'});
  }
}
