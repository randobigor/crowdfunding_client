import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {DataService} from "./services/data.service";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Crowdfunding';

  constructor(private userService: UserService, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getDataByProperty("users", 1).subscribe((user: User) => {
      this.userService.setUser(user);
    });
  }
}
