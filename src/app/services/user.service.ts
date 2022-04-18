import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<User>(new User());
  currentUser = this.user.asObservable();

  private authenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.authenticated.asObservable();

  constructor() {
  }

  setUser(user: User) {
    this.user.next(user);
    this.authenticated.next(user != null);
  }
}
