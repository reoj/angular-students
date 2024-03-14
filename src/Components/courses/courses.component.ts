import { coursesFields } from './../../Models/Course';

import { Component } from '@angular/core';
import { EntityViewerComponent } from '../shared/shared/entity-viewer/entity-viewer.component';
import listCourses, { Course } from 'src/Models/Course';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public coursesCollection = listCourses as Array<Course>;
  modelAttributes = Object.keys(this.coursesCollection[0]);
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder) {    
    this.addObjectForm = this.builder.group(coursesFields);
  }
  addObject(value: Course) {
    let indexOfFoundStudent = this.coursesCollection.findIndex((s) => s.Id === value.Id);
    let isRegistered = indexOfFoundStudent > -1;
    if (isRegistered) {
      this.coursesCollection[indexOfFoundStudent] = value;
      return;
    }
    this.coursesCollection.push(value);
  }
  loadToForm(course: Course) {
    this.addObjectForm.setValue(course);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
  
}
