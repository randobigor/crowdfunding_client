import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/Project";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  project: Project = new Project();

  constructor() { }

  ngOnInit(): void {
  }

}
