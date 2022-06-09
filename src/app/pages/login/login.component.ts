import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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
    password: null,
    balance: 0
  }

  loginUser: any = {
    email: null,
    password: null
  }

  constructor(
    private authS: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authS.login(this.loginUser).subscribe(data => {

      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.router.navigate(['/'])
    }, error => {
      if(error.error.message.includes('Bad credentials')) {
        this.toastr.error('Неверные логин или пароль');
      }
    })
  }

  register() {
    this.authS.register(this.registerUser).subscribe(data => {
        this.loginUser.email = this.registerUser.email;
        this.loginUser.password = this.registerUser.password;

        this.login();
      }, error => {
      console.log(error)
        let errorMessage: string = error.error.message || '';
        if (errorMessage.includes('Email is already taken')) {
          this.toastr.error('Этот Email уже занят');
        }
      }
    )
  }

}
