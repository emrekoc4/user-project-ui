import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }
  path = "https://localhost:7076/api/";
  addUser(user: User){
    this.httpClient.post(this.path + 'users',user).subscribe();
  }
}
