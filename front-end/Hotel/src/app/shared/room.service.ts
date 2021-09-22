import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  selectedRoom: Room = new Room;
  rooms: Room[] = [];
  readonly baseURL = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  getRoom(roomType:any,status:any){
    return this.http.get(this.baseURL+'/room'+`/${roomType}/${status}`)
  }

  getRoom1(roomType:any){
    return this.http.get(this.baseURL+'/room'+`/${roomType}`)
  }

  getRoom3(){
    return this.http.get(this.baseURL+'/room')
  }

  postRoom(room : Room){
    return this.http.post(this.baseURL+'/room',room,{responseType: 'text'});
  }

  deleteRoom(roomNo: any) {
    return this.http.delete(this.baseURL+'/room'+ `/${roomNo}`,{responseType: 'text'});
  }

  updateRoom(room: Room){
    return this.http.put(this.baseURL+'/room'+`/${room.roomNo}`, room,{responseType: 'text'});
  }

  updateRoom1(rno: any){
    return this.http.put(this.baseURL+'/room1'+`/${rno}`,{responseType: 'text'});
  }
}
