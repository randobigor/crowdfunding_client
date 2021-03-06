import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './blocks/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {ProjectsComponent} from './pages/projects/projects.component';
import {MdlCurrencyPipe} from './pipes/mdl-currency.pipe';
import {ProjectComponent} from './pages/project/project.component';
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TextReducerPipe} from './pipes/text-reducer.pipe';
import {ProjectCreateComponent} from './pages/project-create/project-create.component';
import {FormsModule} from "@angular/forms";
import {NoProjectsComponent} from './pages/no-projects/no-projects.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {ModalComponent} from './blocks/modal/modal.component';
import {NotificationComponent} from './blocks/notification/notification.component';
import {CreditCardFormComponent} from './blocks/credit-card-form/credit-card-form.component';
import {LoginComponent} from './pages/login/login.component';
import {authInterceptorProviders} from "./interceptors/auth.interceptor";
import {ToastrModule} from "ngx-toastr";
import { HomeComponent } from './pages/home/home.component';
import { RuProjectTmPipe } from './pipes/ru-project-tm.pipe';
import { AllowNumbersOnlyDirective } from './directives/allow-numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    MdlCurrencyPipe,
    ProjectComponent,
    TextReducerPipe,
    ProjectCreateComponent,
    NoProjectsComponent,
    ProfileComponent,
    ModalComponent,
    NotificationComponent,
    CreditCardFormComponent,
    LoginComponent,
    HomeComponent,
    RuProjectTmPipe,
    AllowNumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
