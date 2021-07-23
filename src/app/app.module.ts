import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementrefComponent } from './elementref/elementref.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ElementchildComponent } from './elementref/elementchild/elementchild.component';
import { PracticeComponent } from './practice/practice.component';
import { FormComponent } from './form/form.component';
import { AngularCdkComponent } from './angular-cdk/angular-cdk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {OverlayModule} from '@angular/cdk/overlay';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ElementrefComponent,
     DynamicComponent,
    ElementchildComponent,
    PracticeComponent,
    FormComponent,
    AngularCdkComponent,
    FilterPipe,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    OverlayModule,
    DragDropModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
