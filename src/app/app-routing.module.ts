import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ProjectComponent} from "./pages/project/project.component";
import {ProjectCreateComponent} from "./pages/project-create/project-create.component";
import {NoProjectsComponent} from "./pages/no-projects/no-projects.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'projects/category/:categoryId', component: ProjectsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'project/:id', component: ProjectComponent},
  {path: 'start-company', component: ProjectCreateComponent},
  {path: 'no-projects', component: NoProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
