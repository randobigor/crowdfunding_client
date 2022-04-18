import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {HttpParams} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {
  cardNumber: string = null;
  cardFirstName: string = null;
  cardLastName: string = null;
  cardMonth: number = null;
  cardYear: number = null;
  cardCvc: number = null;
  valueToAdd: string = null;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  someFun() {
    this.cardNumber = this.cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
  }

  addFunds() {
    let currentUser = this.tokenStorage.getUser();
    let body = {userId: currentUser.id, value: this.valueToAdd}

    this.dataService.updateData("users/add-funds", body).subscribe((el: any) => {
      currentUser.balance = parseFloat(currentUser.balance) + parseFloat(this.valueToAdd);

      this.tokenStorage.saveUser(currentUser)
      this.router.navigate([`/profile`])
    })
  }
}
