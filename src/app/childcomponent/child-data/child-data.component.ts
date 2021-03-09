import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent implements OnInit {
  @Input()
  coudata:Course[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  
  

}
