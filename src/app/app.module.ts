import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { NavbarComponent } from './blocks/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { ProjectsComponent } from './pages/projects/projects.component';
import { MdlCurrencyPipe } from './pipes/mdl-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    MdlCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
