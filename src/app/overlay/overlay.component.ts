import { Component, OnInit } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentRef, Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { UserformComponent } from '../userform/userform.component';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  isOpen = false;


  ngOnInit(): void {
  }
 // call viewProfileOverlay() from Presenter
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