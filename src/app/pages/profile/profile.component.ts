import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {User} from "../../models/User";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalComponent} from "../../blocks/modal/modal.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  isEditingEnabled: boolean = false;
  user: User = new User();

  constructor(private dataService: DataService, private modalService: MdbModalService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    //TODO: Write some code code to get current user id (For now, there will be 1)
    this.dataService.getDataByProperty("users", 1).subscribe((user: User) => {
      this.user = user;
      this.checkUserPhotoPresence();
    });
  }

  changeEditingStatus() {
    this.isEditingEnabled = !this.isEditingEnabled;
  }

  checkUserPhotoPresence() {
    if (this.user.picture == null) {
      this.user.picture = "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3";
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

        this.dataService.updateData("users", updatedUser).subscribe((answer: any) => {
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

}
