import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  
  
  public Employee = {
    $implicit : 'vishal',

    User : [
      {
        EmployeeName : 'vishal',
        EmployeeSallary : 23333
      },
      {
        EmployeeName : 'kishan',
        EmployeeSallary : 12221
      },
      {
        EmployeeName : 'praveen',
        EmployeeSallary : 11111
      },
      {
        EmployeeName : 'Nitin',
        EmployeeSallary : 111111
      },
      {
        EmployeeName : 'Sunil',
        EmployeeSallary : 15000
      },
      

    ]
 
  }
  static container: any;
   constructor() { }
      isValid :boolean = false;
      EmployeeSallary  
  public show()
  {
    this.isValid=true;
  
  }

  ngOnInit(): void {
    
  }

}
