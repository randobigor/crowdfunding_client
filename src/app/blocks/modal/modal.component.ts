import {Component, EventEmitter, Output} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  payment: any = {
    donationValue: null,
    isAnonymous: false
  }

  constructor(public modalRef: MdbModalRef<ModalComponent>) {
  }

  sendMessage() {
    this.modalRef.close(this.payment);
  }
}
