import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Category} from "../../models/Category";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";
import {Project} from "../../models/Project";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isAuthenticated: boolean = false;
  public user: User;
  categories: Array<Category> = new Array<Category>();

  constructor(private dataService:DataService, private token: TokenStorageService, private router: Router, private store: StoreService) { }

  ngOnInit(): void {
    this.token.isAuthenticated.subscribe(v => this.isAuthenticated = v);
    this.dataService.getData('categories').subscribe((categories:Array<Category>) => {this.categories = categories});
    this.token.currentUser.subscribe(user => this.user = user);
  }

  navigateToProjects(route: string, categoryId?: number) {
    if (route === 'all') {
      this.dataService.getData('projects').subscribe((data: Array<Project>) => {
        this.store.setProjects(data);
        this.router.navigate(['/projects'])
      });
    } else {
      this.dataService.getData(`projects/category/${categoryId}`).subscribe((data: Array<Project>) => {
        this.store.setProjects(data);
        this.router.navigate(['/projects'])
      });
    }
  }

}
