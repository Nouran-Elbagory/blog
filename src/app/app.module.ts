import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { TableComponentComponent } from './table-component/table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    InputComponentComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
