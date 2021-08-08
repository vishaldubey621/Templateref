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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HighlightDirective } from './highlight.directive';
import { OverlayComponent } from './overlay/overlay.component';
import { UserformComponent } from './userform/userform.component';

import {NgxPaginationModule} from 'ngx-pagination'; 
import { SortPipe } from './sort.pipe';



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
    SortPipe,
    HighlightDirective,
    OverlayComponent,
    UserformComponent,
    
  

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    OverlayModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
 
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
