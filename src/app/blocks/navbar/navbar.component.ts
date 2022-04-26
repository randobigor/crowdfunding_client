import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Category} from "../../models/Category";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isAuthenticated: boolean = false;
  public user: User = new User();
  categories: Array<Category> = new Array<Category>();

  constructor(private dataService:DataService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.token.isAuthenticated.subscribe(v => this.isAuthenticated = v);
    this.dataService.getData('categories').subscribe((categories:Array<Category>) => {this.categories = categories});
    this.token.currentUser.subscribe(user => this.user = user);
  }

}
