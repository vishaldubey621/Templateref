import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementrefComponent } from './elementref/elementref.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PracticeComponent } from './practice/practice.component';
import { FormComponent } from './form/form.component';
import { AngularCdkComponent } from './angular-cdk/angular-cdk.component';
import { OverlayComponent } from './overlay/overlay.component';

const routes: Routes = [
  {
  path : 'Elementref',
  component : ElementrefComponent
  },
  {
    path : 'dynamic',
    component : DynamicComponent
    },
    {
      path : 'practice',
      component : PracticeComponent
     },
     {
       path : 'form',
       component : FormComponent
     },
     {
      path : 'cdk',
      component : AngularCdkComponent
    },
    {
      path : 'overlay',
      component : OverlayComponent
    }
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
