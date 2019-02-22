import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { DataService } from '../data.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit { 
  @Output() onSearch = new EventEmitter();
  value: string;
  constructor() { }
  
  onChange(){
    this.onSearch.emit(this.value);
  }

  ngOnInit() {
  }

}
