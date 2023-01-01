import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _baseURL:string='https://todolist-api.glitch.me/api';

  constructor(private http:HttpClient) { }

  getCurrentTimeStamps(){

    let d = new Date();

    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let fmt = '';
    if (hr > 12) {
      hr = hr - 12;
      fmt = 'PM';
    } else {
      fmt = 'AM';
    }

    let customDate = day+"/"+(month+1)+"/"+year+" "+hr+":"+min+":"+sec+" "+fmt;
    return customDate;
  }

  getAllTodos(){
    return this.http.get(`${this._baseURL}/todos`);
  }

  addTodo(todoData:any){
    return this.http.post(`${this._baseURL}/todo`,todoData);
  }

  updateTodo(id:any,todoData:any){
    return this.http.put(`${this._baseURL}/todo/${id}`,todoData);
  }

  deleteTodo(id:any){
    return this.http.delete(`${this._baseURL}/todo/${id}`);
    
  }
}
