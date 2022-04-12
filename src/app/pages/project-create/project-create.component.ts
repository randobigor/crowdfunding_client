import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/Project";
import {Category} from "../../models/Category";
import {DataService} from "../../services/data.service";
import {PictureToBase64ConverterService} from "../../services/picture-to-base64-converter.service";
import {Picture} from "../../models/Picture";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  project: Project = new Project();
  categories: Array<Category> = new Array<Category>();
  descriptionPictures: Array<Picture> = new Array<Picture>();

  constructor(private dataService: DataService, private converter: PictureToBase64ConverterService) {
  }

  ngOnInit(): void {
    this.dataService.getData("categories").subscribe((data: Array<Category>) => this.categories = data)
    //@ts-ignore
    this.project.user = 1;
  }

  async loadHeaderPicture(el: any) {
    this.project.picture = await this.converter.convertPictureToString(el);
  }

  async addDescriptionPicture(el: any) {
    let picture = await this.converter.convertPictureToString(el);
    this.descriptionPictures.push(new Picture(null, picture));
  }

  clearDescriptionPictures() {
    this.descriptionPictures = [];
  }

  logProject() {
    this.project.descriptionPictures = this.descriptionPictures;
    // console.log(this.project)
    this.dataService.saveData("projects", this.project).subscribe((answer: any) => console.log(answer))
  }
}
