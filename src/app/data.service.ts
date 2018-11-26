import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getCutomers() {
    return this.http.get('http://localhost:8000/customers.json');
  }

  getTrophy() {
    return this.http.get('http://localhost:8000/trophy.json');
  }

  getAvg() {
    return this.http.get('http://localhost:8000/avg.json');
  }

}
