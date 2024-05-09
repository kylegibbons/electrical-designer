import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../project/project.type';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private project: Project = {} as Project;

  project$ = new BehaviorSubject<Project>(this.project);

  constructor() { }

  newProject(project: Project) {

  }

  openProject(id: string) {

  }
}
