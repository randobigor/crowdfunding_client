import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ProjectComponent} from "./pages/project/project.component";
import {ProjectCreateComponent} from "./pages/project-create/project-create.component";
import {NoProjectsComponent} from "./pages/no-projects/no-projects.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {LoginComponent} from "./pages/login/login.component";
import {CreditCardFormComponent} from "./blocks/credit-card-form/credit-card-form.component";
import {MainGuard} from "./guards/main.guard";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [MainGuard]},
  {path: 'profile/add-funds', component: CreditCardFormComponent, canActivate: [MainGuard]},
  {path: 'projects/category/:categoryId', component: ProjectsComponent, canActivate: [MainGuard]},
  {path: 'projects', component: ProjectsComponent},
  {path: 'project/:id', component: ProjectComponent, canActivate: [MainGuard]},
  {path: 'start-company', component: ProjectCreateComponent, canActivate: [MainGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'no-projects', component: NoProjectsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
