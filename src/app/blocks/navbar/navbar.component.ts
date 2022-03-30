import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: Array<Category> = new Array<Category>();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getData('categories').subscribe((categories:Array<Category>) => {this.categories = categories});
  }

}
