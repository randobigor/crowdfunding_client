import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {
  valueToAdd: string = "";
  currentCardBackground: number = Math.floor(Math.random() * 25 + 1);
  cardName: string = null;
  cardNumber: string = null;
  cardMonth: any = null;
  cardYear: string = null;
  cardCvv: string = null;
  isCardFlipped: boolean = false
  focusElementStyle: any = null
  isInputFocused: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
  }

  getCardType () {
    let number = this.cardNumber;
    if (number) {
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";

      re = new RegExp('^9792')
      if (number.match(re) != null) return 'troy'
    }

    return "visa"; // default type
  }

  flipCard (status: boolean) {
    this.isCardFlipped = status;
  }

  focusInput (e: any) {
    this.isInputFocused = true;
  }

  blurInput() {
    let vm = this;
    setTimeout(() => {
      if (!vm.isInputFocused) {
        vm.focusElementStyle = null;
      }
    }, 300);
    vm.isInputFocused = false;
  }

  formatCardNumber() {
    this.cardNumber = this.cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
  }

  generateYears(): Array<number> {
    let yearsArr: Array<number> = [];
    let now = new Date();
    for (let i = 0; i < 5; i++) {
      yearsArr.push(now.getFullYear() + i);
    }

    return yearsArr;
  }

  getMonths(): Array<number> {
    let monthsArr: Array<number> = [];
    for (let i = 0; i < 12; i++) {
      monthsArr.push(i+1);
    }

    return monthsArr;
  }

  addFunds() {
    let currentUser = this.tokenStorage.getUser();
    let body = {userId: currentUser.id, value: this.valueToAdd}

    this.dataService.updateData("users/add-funds", body).subscribe((el: any) => {
      currentUser.balance = parseFloat(currentUser.balance) + parseFloat(this.valueToAdd);
      this.tokenStorage.saveUser(currentUser)
      this.router.navigate([`/profile`])
      this.toastr.success(`Успех. Начислено ${this.valueToAdd} лей`)
    })
  }
}
