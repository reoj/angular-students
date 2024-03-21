import { Project, projectsFields } from './../../Models/Project';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import listProjects from 'src/Models/Project';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public projectsCollection = [] as Array<Project>;
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private dataService: DataService) { 
    this.fetchProjects();   
    this.addObjectForm = this.builder.group(projectsFields);
  }
  fetchProjects() {
    this.dataService.fetchDataProjects().subscribe((projectsFromService) => {
      this.projectsCollection = projectsFromService;
    });
  }
  addObject(value: Project) {
    this.dataService.addDataProjects(value).subscribe((projectsFromService) => {
      this.projectsCollection = projectsFromService;
    });
  }
  loadToForm(project: Project) {
    this.addObjectForm.setValue(project);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
