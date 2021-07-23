import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nameSearch:string= ''
  

nameArr = [
{
 Srno : 1,
  Name : 'vishal',
  Sallary :23444
},
{
  Srno : 2,
   Name : 'kishan',
   Sallary :23444
 },
 {
  Srno : 3,
   Name : 'praveen',
   Sallary :23444
 },
 {
  Srno : 4,
   Name : 'nitin',
   Sallary :23444
 },
 {
  Srno : 5,
   Name : 'vikash',
   Sallary :23444
 },
 {
  Srno : 6,
   Name : 'pratik',
   Sallary :23444
 },
 {
  Srno : 7,
   Name : 'viraj',
   Sallary :23444
 },
 {
  Srno : 8,
   Name : 'Siraj',
   Sallary :23444
 },
 {
  Srno : 9,
   Name : 'viraT',
   Sallary :23444
 },
 {
  Srno : 11,
   Name : 'PANKAJ',
   Sallary :23444
 },
]
 
  constructor() { }

  ngOnInit(): void {
  }

}
