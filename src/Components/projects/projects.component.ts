import { Project, projectsFields } from './../../Models/Project';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import listProjects from 'src/Models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public projectsCollection = listProjects as Array<Project>;
  modelAttributes = Object.keys(this.projectsCollection[0]);
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder) {    
    this.addObjectForm = this.builder.group(projectsFields);
  }
  addObject(value: Project) {
    let indexOfFoundStudent = this.projectsCollection.findIndex((s) => s.Id === value.Id);
    let isRegistered = indexOfFoundStudent > -1;
    if (isRegistered) {
      this.projectsCollection[indexOfFoundStudent] = value;
      return;
    }
    this.projectsCollection.push(value);
  }
  loadToForm(project: Project) {
    this.addObjectForm.setValue(project);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
