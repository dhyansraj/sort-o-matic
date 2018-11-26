import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-trophy',
  templateUrl: './trophy.component.html',
  styleUrls: ['./trophy.component.scss']
})
export class TrophyComponent implements OnInit {

  trophy : Object;
  avg: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTrophy().subscribe(data => {
      this.trophy = data;
    });

    this.data.getAvg().subscribe(data => {
      this.avg = data;
    })
  }

}
