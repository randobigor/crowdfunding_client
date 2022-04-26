import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const EXPIRES_IN_MS = 86400000;

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  public isAuthenticated = new BehaviorSubject(!!localStorage.getItem(TOKEN_KEY));
  public currentUser = new BehaviorSubject(this.getUser());

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
    this.isAuthenticated.next(false);
  }

  public saveToken(token: string): void {
    let now = new Date();
    let data = {
      expires: now.getTime() + EXPIRES_IN_MS,
      token: token
    };

    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
    this.isAuthenticated.next(false);
  }

  public getToken(): string {
    let data: object = JSON.parse(localStorage.getItem(TOKEN_KEY));
    // @ts-ignore
    return data ? data.token : null;
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.isAuthenticated.next(true);
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }
}
