import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  customers: Object;

  platinum_arrow: boolean = true;
  gold_arrow: boolean = false;
  silver_arrow: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCutomers().subscribe(data => {
      this.customers = data;
      console.log(data);
    });
  }

  platinumArrowClicked(){
    this.platinum_arrow = !this.platinum_arrow;
    this.gold_arrow = false;
    this.silver_arrow = false;
  }

  goldArrowClicked(){
    this.gold_arrow = !this.gold_arrow;
    this.platinum_arrow = false;
    this.silver_arrow = false;

  }

  silverArrowClicked(){
    this.silver_arrow = !this.silver_arrow;
    this.platinum_arrow = false;
    this.gold_arrow = false;
  }

}
