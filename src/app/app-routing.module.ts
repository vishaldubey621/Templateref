import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementrefComponent } from './elementref/elementref.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  {
  path : 'Elementref',
  component : ElementrefComponent
  },
  {
    path : 'dynamic',
    component : DynamicComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
