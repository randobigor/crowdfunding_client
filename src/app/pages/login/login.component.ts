import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  rightPanelActive: boolean = false;
  registerUser: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null
  }

  loginUser: any = {
    email: null,
    password: null
  }

  constructor(
    private authS: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authS.login(this.loginUser).subscribe(data => {

      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.router.navigate(['/profile'])
    }, error => {
      console.log(error)
    })
  }

  register() {
    this.authS.register(this.registerUser).subscribe(data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);


      }, error => {
      console.log(error.error.message)
      }
    )
  }

}
