import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Course} from 'src/Models/Course';
import {Student} from 'src/Models/Student';
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
export class StudentsByCoursesComponent implements OnInit {
  public studentsByCoursesCollection = [] as StudentsByCourses[];
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});
  currentStudents = [] as Student[];
  currentCourses = [] as Course[];

  constructor(private builder: FormBuilder, private dataService: DataService) {
    
  }
  ngOnInit(): void {
    this.fetchCurrentStudents();
    this.fetchCurrentCourses();
    this.fetchstudentsByCourses();
    // this.modelAttributes = Object.keys(studentByCoursesFields);
    // this.addObjectForm = this.builder.group(studentByCoursesFields);
  }
  fetchCurrentStudents() {
    this.dataService.fetchDataStudents().subscribe((students) => {
      this.currentStudents = students;
    });
  }

  fetchCurrentCourses() {
    this.dataService.fetchDataCourses().subscribe((courses) => {
      this.currentCourses = courses;
    });
  }
  

  fetchstudentsByCourses() {
    this.dataService.fetchDataStudentsByCourses().subscribe((stbyco) => {
      this.studentsByCoursesCollection = stbyco;
    });
  }
  addObject() {
    let studentByCourse = new StudentsByCourses(
      this.addObjectForm.value.Id ?? this.studentsByCoursesCollection.length + 1,
      this.addObjectForm.value.CourseID ?? 0,
      this.addObjectForm.value.StudentId ?? 0
    );
    this.dataService.addDataStudentsByCourses(studentByCourse).subscribe((stbyco) => {
      this.studentsByCoursesCollection = [...stbyco];
    });
  }
  loadToForm(selectedData: StudentsByCourses) {
    this.addObjectForm.setValue(selectedData);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
