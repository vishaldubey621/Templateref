import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  today = Date.now();
  name  = "vishal dubey";
  money = 122;
 
  @ViewChild('container', { read: ViewContainerRef })  
   container!: ViewContainerRef;  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }  
  public add(): void {  
   
    // create the component factory  
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);  
    // add the component to the view  
    const componentRef = this.container.createComponent(dynamicComponentFactory);  

    this.container.detach();
 
  } 
 
  
 
 

  
 

  ngOnInit(): void { 

    
    
  }


  url ="./assets/2016-11-24-19-44-28-525.jpg";
  url2 ="./assets/63.JPG";
  url3 ="./assets/64.JPG";
  url4 ="./assets/65.JPG";
}
