import { Component, OnInit, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { UserformComponent } from '../userform/userform.component';
import { ComponentPortal } from '@angular/cdk/portal';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nameSearch:string= ''
  search= '';
  p: number = 1;

  

nameArr = [
{
 Srno : 1,
  Name : 'suo',
  Sallary :2344
},
{
  Srno : 2,
   Name : 'john',
   Sallary :23444
 },
 {
  Srno : 3,
   Name : 'roman',
   Sallary :23444
 },
 {
  Srno : 4,
   Name : 'dop jigler',
   Sallary :23444
 },
 {
  Srno : 5,
   Name : 'rey stedio',
   Sallary :23444
 },
 {
  Srno : 6,
   Name : 'great khali',
   Sallary :23444
 },
 {
  Srno : 7,
   Name : 'micheal obama',
   Sallary :23444
 },
 {
  Srno : 8,
   Name : 'micheal jackson',
   Sallary :23444
 },
 {
  Srno : 9,
   Name : 'lusando',
   Sallary :23444
 },
 {
  Srno : 11,
   Name : 'janjao',
   Sallary :23444
 },
 {
  Srno : 12,
   Name : 'sachin',
   Sallary :23444
 },
 {
  Srno : 13,
   Name : 'dijango',
   Sallary :23444
 },
 {
  Srno : 14,
   Name : 'marko',
   Sallary :23444
 },
 {
  Srno : 15,
   Name : 'lusango-fo',
   Sallary :23444
 },
 {
  Srno : 16,
   Name : 'janjao-fo-fo-jo',
   Sallary :23444
 },{
  Srno : 17,
   Name : 'lusango-fo',
   Sallary :23444
 },
 {
  Srno : 18,
   Name : 'janjao-fo-fo-jo',
   Sallary :23444
 },
 {
  Srno : 19,
   Name : 'lusango-fo',
   Sallary :23444
 },
 {
  Srno : 21,
   Name : 'janjao-fo-fo-jo',
   Sallary :23444
 },
 {
  Srno : 22,
   Name : 'lusango-fo',
   Sallary :23444
 },
 {
  Srno : 23,
   Name : 'janjao-fo-fo-jo',
   Sallary :23444
 },
 {
  Srno : 24,
   Name : 'lusango-fo',
   Sallary :23444
 },
 {
  Srno : 25,
   Name : 'janjao-fo-fo-jo',
   Sallary :23444
 },
 
]
 


  ngOnInit(): void {
  }
  onfilter()
  {
      this.search = this.nameSearch 
  }
  onfilterclear()
  {
    this.nameSearch ='',
    this.search=''
  }
  public viewProfile(profileBtnRef: HTMLButtonElement) {
    this.viewProfileOverlay(profileBtnRef)
   
  }  
    constructor(public overlay: Overlay) { 
    }
  
    // assign overlay
    public viewProfileOverlay(profileBtnRef: HTMLButtonElement) {
      const componentRef: ComponentRef<UserformComponent> = this.overlayConfig(profileBtnRef);
    }
  
    public overlayConfig(profileBtn: HTMLButtonElement): ComponentRef<UserformComponent> {
      const overlayConfig: OverlayConfig = new OverlayConfig();
  
      /* ConnectedPostionStrategy */
      // overlayConfig.positionStrategy = this.overlay.position().flexibleConnectedTo(profileBtn)
      //   .withPositions(
      //     [
      //       {
      //         panelClass: 'top-right',
      //         originX: 'start',
      //         originY: 'bottom',
      //         overlayX: 'end',
      //         overlayY: 'top',
      //         offsetX: 50,
      //         offsetY: 5
  
  
      //         originX: 'center',
      //         originY: 'center',
      //         overlayX: 'center',
      //         overlayY: 'center'
      //       }
      //     ]
      //   );
  
  
      /* GlobalPostionStrategy */
      
      overlayConfig.positionStrategy = this.overlay.position().global()
        .centerHorizontally()
        .centerVertically();
        
  
      overlayConfig.hasBackdrop = true;
  
      const overlayRef = this.overlay.create(overlayConfig);
      const portal: ComponentPortal<UserformComponent> = new ComponentPortal<UserformComponent>(UserformComponent);
      const componentRef: ComponentRef<UserformComponent> = overlayRef.attach(portal);
      // componentRef.instance..subscribe((res: any) => {
      //   console.log(res);
      // })
  
      overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  
      return componentRef;
    }

}
