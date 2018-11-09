import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
 
  list = [{
     x: 'text',
     y: 'text2'
  },
  {      
    x: 'text',
    y: 'text2'
}]; 

  constructor() { }

  ngOnInit() {
  }

}
