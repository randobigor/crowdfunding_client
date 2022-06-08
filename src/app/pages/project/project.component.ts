import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/Project";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage.service";
import {ToastrService} from "ngx-toastr";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalComponent} from "../../blocks/modal/modal.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private readonly projectId: number;
  project: Project = new Project();
  isAuthenticated: boolean = false;
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService,
    private modalService: MdbModalService
  ) {
    this.projectId = activatedRoute.snapshot.params['id'];//check if this is this param (id)
  }

  ngOnInit(): void {
    this.dataService.getData(`projects/${this.projectId}`).subscribe((data: Project) => this.project = data);
    this.tokenStorage.isAuthenticated.subscribe(v => this.isAuthenticated = v);
  }

  calculateCollectedRatio(): number {
    if (this.project.target && this.project.collected) {
      return this.project.collected * 100 / this.project.target;
    }
    return 0;
  }


  donate() {
    this.modalRef = this.modalService.open(ModalComponent);
    this.modalRef.onClose.subscribe((donationValue: any) => {
      let user = this.tokenStorage.getUser();
      let o = {userId: user.id, projectId: this.projectId, value: donationValue};
      this.dataService.saveData("projects/donate", o).subscribe((resp: any) => {
        user.balance = parseFloat(user.balance) - parseFloat(donationValue);
        this.project.collected = this.project.collected + parseFloat(donationValue);
        this.tokenStorage.saveUser(user);
        this.toastr.success('Пожертвование сделано успешно!')
      }, (error: any) => {
        if(error.error.message.includes('enough')) {
          this.toastr.warning("Недостаточно денег на счету");
        }
      })
    });
  }
}
