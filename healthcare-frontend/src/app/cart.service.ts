import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Medicines } from './medicines';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseURL = "http://localhost:8080/medicare/cart"
  constructor(private httpClient: HttpClient) { }

  addCart(id:number, cart: Cart): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, cart);
  }

  getCartById(id: number): Observable<Cart>{
    return this.httpClient.get<Cart>(`${this.baseURL}/${id}`);
  }

  editCart(id: number, cart: Cart): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cart);
  }

  deleteCart(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  createCart(cart: Cart): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cart);
  }

  getMedicinesById(id: number): Observable<Medicines>{
    return this.httpClient.get<Medicines>(`${this.baseURL}/${id}`);
  }
}
