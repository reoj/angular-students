import { coursesFields } from './../../Models/Course';

import { Component } from '@angular/core';

import { Course } from 'src/Models/Course';
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
  addObject() {
    let course = new Course(
      this.addObjectForm.value.Id ?? this.coursesCollection.length + 1,
      this.addObjectForm.value.Name ?? ''
    );
    console.log(course);
    this.dataService.addDataCourses(course).subscribe((courses) => {
      this.coursesCollection = [...courses];
    });
  }
  loadToForm(course: Course) {
    this.addObjectForm.setValue(course);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
  
}
