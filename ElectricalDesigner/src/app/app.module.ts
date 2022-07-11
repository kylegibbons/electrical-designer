import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewComponent } from './circuit/new/new.component';
import { DetailsComponent } from './circuit/details/details.component';
import { SelectComponent } from './panel/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    DetailsComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
