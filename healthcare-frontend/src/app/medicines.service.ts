import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicines } from './medicines';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  private baseURL= "http://localhost:8080/medicare/medicines";
  constructor(private httpClient: HttpClient) { }

  getMedicinesList(): Observable<Medicines[]>{
    return this.httpClient.get<Medicines[]>(`${this.baseURL}`);
  }

  addMedicines(medicines: Medicines): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, medicines);
  }

  getMedicinesById(id: number): Observable<Medicines>{
    return this.httpClient.get<Medicines>(`${this.baseURL}/${id}`);
  }

  editMedicines(id: number, medicines: Medicines): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, medicines);
  }

  deleteMedicines(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}