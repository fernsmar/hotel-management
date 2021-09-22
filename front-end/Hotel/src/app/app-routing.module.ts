import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRoomComponent } from './search-room/search-room.component';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';
import { ShowBookingComponent } from './booking/show-booking/show-booking.component';
import { StaffComponent } from './staff/staff.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { EditStaffComponent } from './staff/edit-staff/edit-staff.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'search', component: SearchRoomComponent},
  {path:'booking/:roomNo', component: BookingComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'room', component:RoomComponent},
  {path:'addroom', component:AddRoomComponent},
  {path:'editroom/:roomNo/:roomType/:occupancy/:price/:description/:status', component:EditRoomComponent},
  {path:'showbooking', component:ShowBookingComponent},
  {path:'staff',component:StaffComponent},
  {path:'addstaff', component:AddStaffComponent},
  {path:'editstaff/:staffNo/:name/:department/:salary', component:EditStaffComponent},
  {path:'managerHome', component:ManagerHomeComponent},
  {path:'userHome', component:UserHomeComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SearchRoomComponent,BookingComponent,SignupComponent,LoginComponent,RoomComponent,AddRoomComponent,EditRoomComponent,ShowBookingComponent,StaffComponent,AddStaffComponent,EditStaffComponent,ManagerHomeComponent,UserHomeComponent,HomeComponent]
