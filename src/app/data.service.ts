import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getCutomers() {
    return this.http.get('http://localhost:8000/sortomatic/customers');
  }

  getCutomersByLevel(level) {
    return this.http.get('http://localhost:8000/sortomatic/customers/' + level);
  }

  getTrophy() {
    return this.http.get('http://localhost:8000/sortomatic/highest-customer');
  }

  getAvg() {
    return this.http.get('http://localhost:8000/sortomatic/average-point');
  }

  search(name) {
    return this.http.get('http://localhost:8000/sortomatic/search/' + name);
  }
}
