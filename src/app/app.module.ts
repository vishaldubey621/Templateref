import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementrefComponent } from './elementref/elementref.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ElementchildComponent } from './elementref/elementchild/elementchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementrefComponent,
     DynamicComponent,
    ElementchildComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
