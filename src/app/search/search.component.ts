import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  submitted = false;
  success = false;
  results: Object;

  constructor(private formBuilder: FormBuilder,
    private data: DataService) { 
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required]      
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }

    this.data.search(this.searchForm.controls.name.value).subscribe(data => {
      this.results = data;
      console.log(data);
      this.success = true;
    });

    
  }

  ngOnInit() {
  }

}
