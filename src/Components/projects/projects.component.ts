import { Project, projectsFields } from './../../Models/Project';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  public projectsCollection = [] as Project[];
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private dataService: DataService) { 
    
  }
  ngOnInit(): void {
    this.fetchProjects();   
    this.addObjectForm = this.builder.group(projectsFields);
    this.modelAttributes = Object.keys(projectsFields);
  }


  fetchProjects() {
    this.dataService.fetchDataProjects().subscribe((projectsFromService) => {
      this.projectsCollection = projectsFromService;
    });
  }
  addObject() {
    let proyect = new Project(
      Number.parseInt(this.addObjectForm.value.Id) ?? this.projectsCollection.length + 1,
      this.addObjectForm.value.Name ?? ''
    );
    this.dataService.addDataProjects(proyect).subscribe((proyects) => {
      this.projectsCollection = [...proyects];
    });
  }
  loadToForm(project: Project) {
    this.addObjectForm.setValue(project);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
