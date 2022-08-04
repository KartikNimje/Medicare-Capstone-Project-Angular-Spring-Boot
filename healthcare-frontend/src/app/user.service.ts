import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/medicare/user"
  constructor(private httpClient: HttpClient) { }


  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  registerUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }
}
