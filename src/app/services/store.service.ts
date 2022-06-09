import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Project} from "../models/Project";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public projects = new BehaviorSubject(new Array(0));

  constructor() { }

  setProjects(projects: Array<Project>) {
    this.projects.next(projects);
  }
}
