import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Project} from "../../models/Project";
import {ActivatedRoute} from "@angular/router";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project> = new Array<Project>();

  constructor(private dataService: DataService, private store: StoreService) {
  }

  ngOnInit(): void {
    this.store.projects.subscribe(storeProjects => this.projects = storeProjects);
  }

  calculateCollectedRatio(project: Project): number {
    if (project.collected && project.target && project.collected > project.target) {
      return 100;
    }
    if (project.target && project.collected) {
      return project.collected * 100 / project.target;
    }
    return 0;
  }

}
