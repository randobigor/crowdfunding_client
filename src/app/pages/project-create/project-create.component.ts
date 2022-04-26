import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/Project";
import {Category} from "../../models/Category";
import {DataService} from "../../services/data.service";
import {PictureToBase64ConverterService} from "../../services/picture-to-base64-converter.service";
import {Picture} from "../../models/Picture";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  project: Project = new Project();
  categories: Array<Category> = new Array<Category>();
  descriptionPictures: Array<Picture> = new Array<Picture>();

  constructor(
    private dataService: DataService,
    private converter: PictureToBase64ConverterService,
    private token: TokenStorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.dataService.getData("categories").subscribe((data: Array<Category>) => this.categories = data);
    this.project.user = this.token.getUser().id;
    this.project.picture = 'assets/img/yellow-clouds.webp';
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

  createProject() {
    this.project.descriptionPictures = this.descriptionPictures;
    this.dataService.saveData("projects", this.project).subscribe((answer: any) => {
      this.toastr.success("Проект успешно создан");
    })
  }
}
