import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddformComponent } from './components/addform/addform.component';
import { ListcontainerComponent } from './components/listcontainer/listcontainer.component';
import { ListitemComponent } from './components/listitem/listitem.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    ListcontainerComponent,
    ListitemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
