import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/Project";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private readonly projectId: number;
  project: Project = new Project();
  valueToDonate: string = null;
  isAuthenticated: boolean = false;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService
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


  //TODO: Update user data on success
  donate() {
    let user = this.tokenStorage.getUser();
    let o = {userId: user.id, projectId: this.projectId, value: this.valueToDonate};
    this.dataService.saveData("projects/donate", o).subscribe((resp: any) => {
      user.balance = parseFloat(user.balance) - parseFloat(this.valueToDonate);
      this.tokenStorage.saveUser(user);
      this.toastr.success('Пожертвование сделано успешно!')
    }, (error: any) => {
      console.log(error.error.message)
    })
  }
}
