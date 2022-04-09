import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/Project";
import {Category} from "../../models/Category";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  project: Project = new Project();
  categories: Array<Category> = new Array<Category>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData("categories").subscribe((data:Array<Category>) => this.categories = data)
    this.project.user = {id: 1};
  }

  doFileInput(el: any) {
    let file: File = el.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.project.picture = reader.result != null ? reader.result.toString() : null;
    }
  }

  log(msg: String) {
    console.log(msg)
  }

  logProject() {
    this.dataService.saveData("projects", this.project).subscribe((answer: any) => console.log(answer))
  }

}
