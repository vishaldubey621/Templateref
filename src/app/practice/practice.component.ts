import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  today = Date.now();
  name  = "vishal dubey";
  money = 122;
 

  constructor() { }
 

  ngOnInit(): void {
   
  }

  url ="./assets/2016-11-24-19-44-28-525.jpg";
  url2 ="./assets/63.JPG";
  url3 ="./assets/64.JPG";
  url4 ="./assets/65.JPG";
}
