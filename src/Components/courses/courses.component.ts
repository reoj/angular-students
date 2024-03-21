import { coursesFields } from './../../Models/Course';

import { Component } from '@angular/core';
import { EntityViewerComponent } from '../shared/shared/entity-viewer/entity-viewer.component';
import listCourses, { Course } from 'src/Models/Course';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public coursesCollection = [] as Array<Course>;
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private dataService: DataService) {   
    this.fetchCourses();
    this.modelAttributes = Object.keys(coursesFields);
    this.addObjectForm = this.builder.group(coursesFields);
  }
  fetchCourses() {
    this.dataService.fetchDataCourses().subscribe((coursesFromService) => {
      this.coursesCollection = coursesFromService;
    });
  }
  addObject(newValue: Course) {
    this.dataService.addDataCourses(newValue).subscribe((coursesFromService) => {
      this.coursesCollection = coursesFromService;
    });
  }
  loadToForm(course: Course) {
    this.addObjectForm.setValue(course);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
  
}
