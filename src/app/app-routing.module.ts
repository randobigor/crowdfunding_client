import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ProjectComponent} from "./pages/project/project.component";

const routes: Routes = [
  {path: 'projects/category/:categoryId', component: ProjectsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'project/:id', component: ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
