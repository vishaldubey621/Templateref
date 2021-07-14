import { Component, OnInit, ElementRef, ContentChild, AfterViewInit, AfterContentInit, Renderer2, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-elementchild',
  templateUrl: './elementchild.component.html',
  styleUrls: ['./elementchild.component.css']
})
export class ElementchildComponent implements OnInit,AfterContentInit {

  @ContentChild ('childCon') childparagaph:ElementRef
  constructor(private renderer :Renderer2 ) { }

 

  ngOnInit(): void {
   
    
  }
  ngAfterContentInit(): void {
    console.log(this.childparagaph)
     this.renderer.setStyle(this.childparagaph.nativeElement,'color','red')
  }
   public click3()

  {
   var text = this.renderer.createText("this is child text")
   this.renderer.appendChild(this.childparagaph.nativeElement,'text')
     
  }
  

}
