import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ProjectComponent} from "./pages/project/project.component";
import {ProjectCreateComponent} from "./pages/project-create/project-create.component";
import {NoProjectsComponent} from "./pages/no-projects/no-projects.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {LoginComponent} from "./pages/login/login.component";
import {CreditCardFormComponent} from "./blocks/credit-card-form/credit-card-form.component";

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/add-funds/:userId', component: CreditCardFormComponent},
  {path: 'projects/category/:categoryId', component: ProjectsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'project/:id', component: ProjectComponent},
  {path: 'start-company', component: ProjectCreateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'no-projects', component: NoProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
