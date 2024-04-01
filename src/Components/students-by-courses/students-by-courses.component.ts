import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  studentByCoursesFields,
  StudentsByCourses,
} from 'src/Models/StudentsByCourse';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-students-by-courses',
  templateUrl: './students-by-courses.component.html',
  styleUrl: './students-by-courses.component.css',
})
export class StudentsByCoursesComponent {
  public studentsByCoursesCollection = [] as StudentsByCourses[];
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private dataService: DataService) {
    this.fetchstudentsByCourses();
    this.modelAttributes = Object.keys(studentByCoursesFields);
    this.addObjectForm = this.builder.group(studentByCoursesFields);
  }

  fetchstudentsByCourses() {
    this.dataService.fetchDataStudentsByCourses().subscribe((stbyco) => {
      this.studentsByCoursesCollection = stbyco;
    });
  }
  addObject(newValue: StudentsByCourses) {
    this.dataService.addDataStudentsByCourses(newValue).subscribe((stbyco) => {
      this.studentsByCoursesCollection = stbyco;
    });
  }
  loadToForm(selectedData: StudentsByCourses) {
    this.addObjectForm.setValue(selectedData);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
