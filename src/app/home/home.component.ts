import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCutomers().subscribe(data => {
      this.customers = data;
      console.log(data);
    });
  }

}
