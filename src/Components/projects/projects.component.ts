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
  addObject(project: Project) {
    this.projectsCollection.push(project);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
