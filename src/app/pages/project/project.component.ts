import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/Project";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private projectId: number;
  project: Project = new Project();

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.projectId = activatedRoute.snapshot.params['id'];//check if this is this param (id)
  }

  ngOnInit(): void {
    this.dataService.getData(`projects/${this.projectId}`).subscribe((data: Project) => this.project = data);
  }

  calculateCollectedRatio(): number {
    if (this.project.target && this.project.collected) {
      return this.project.collected * 100 / this.project.target;
    }
    return 0;
  }

  getIs(n:number) {
    return new Array(n);
  }
}
