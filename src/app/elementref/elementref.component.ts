import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, asNativeElements, ContentChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-elementref',
  templateUrl: './elementref.component.html',
  styleUrls: ['./elementref.component.css']
})
export class ElementrefComponent implements OnInit {
   constructor(private renderer:Renderer2){}

  @ViewChild('change') change:ElementRef
  @ViewChild('change1') change1:ElementRef
  @ContentChild ('childCon') childparagaph:ElementRef
  title = 'Elementref';
  
  public click()
  {
     this.change.nativeElement.style.background = 'yellow';
  }
  
  public click1()

  {
     this.change1.nativeElement.classList.add('style');
     
  }
  public click2()

  {
     this.change1.nativeElement.classList.remove('style');
     
  }
  
  public click3()

  {
   var text = this.renderer.createText('this is child content')
   this.renderer.appendChild(this.childparagaph.nativeElement,'text')

   console.log(this.childparagaph)
    this.renderer.setStyle(this.childparagaph.nativeElement,'color','red')
     
  }
  
  
 

  ngOnInit(): void {
  }

}
