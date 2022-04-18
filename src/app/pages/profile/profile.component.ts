import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {User} from "../../models/User";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalComponent} from "../../blocks/modal/modal.component";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  isEditingEnabled: boolean = false;
  user: User = new User();

  constructor(
    private dataService: DataService,
    private modalService: MdbModalService,
    private authS: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.checkUserPhotoPresence();
  }

  changeEditingStatus() {
    this.isEditingEnabled = !this.isEditingEnabled;
  }

  checkUserPhotoPresence() {
    if (this.user.picture == null) {
      this.user.picture = "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png";
    }
  }

  doFileInput(el: any) {
    let file: File = el.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        let updatedUser: User = Object.assign({}, this.user);
        updatedUser.picture = reader.result.toString();

        this.dataService.updateData("users/update-photo", updatedUser).subscribe((answer: any) => {
          /**
           * Updates current picture only in case of successful update request
           */
          this.user.picture = updatedUser.picture;
        })
      }
      // this.project.picture = reader.result != null ? reader.result.toString() : null;
    }
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        title: 'Custom title',
        message: 'Custom message'
      }
    });
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login'])
  }
}
