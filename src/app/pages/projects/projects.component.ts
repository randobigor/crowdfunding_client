import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<any> = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData('projects').subscribe((data: Array<any>) => this.projects = data);
  }

  getIs(i: number) {
    return new Array(i);
  }

}
