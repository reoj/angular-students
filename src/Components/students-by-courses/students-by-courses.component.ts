import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/Models/Course';
import { Student } from 'src/Models/Student';
import {
  studentByCoursesFields,
  StudentByCoursesGUI,
  StudentsByCourses,
} from 'src/Models/StudentsByCourse';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-students-by-courses',
  templateUrl: './students-by-courses.component.html',
  styleUrl: './students-by-courses.component.css',
})
export class StudentsByCoursesComponent implements OnInit {
  private studentsByCoursesCollection = [] as StudentsByCourses[];
  public studentsByCoursesDisplay = [] as StudentByCoursesGUI[];
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});
  currentStudents = [] as Student[];
  currentCourses = [] as Course[];

  constructor(private builder: FormBuilder, private dataService: DataService) {}
  ngOnInit(): void {
    this.fetchData();
    this.addObjectForm = new FormGroup({
      StudentName: this.builder.control(''),
      CourseName: this.builder.control(''),
    });
    this.modelAttributes = Object.keys(studentByCoursesFields);
  }

  fetchData() {
    this.dataService.fetchDataStudentsByCourses().subscribe((stbyco) => {
      this.studentsByCoursesCollection = stbyco;
      this.fetchCurrentStudents();
      this.fetchCurrentCourses();
      this.fixDataFordisplay();
    });
  }
  fixDataFordisplay() {
    this.studentsByCoursesDisplay = this.studentsByCoursesCollection.map(
      (stbyco) => {
        let student = this.dataService.getStudentById(stbyco.StudentId);
        let course = this.dataService.getCourseById(stbyco.CourseId);
        return {
          StudentName: student?.Name ?? '',
          CourseName: course?.Name ?? '',
        };
      }
    );
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
      console.log(this.studentsByCoursesCollection);
    });
  }
  addObject() {
    let newRelationship = new StudentByCoursesGUI(
      this.addObjectForm.value.StudentName,
      this.addObjectForm.value.CourseName
    );
    this.dataService.addDataStudentsByCourses(newRelationship).subscribe((stbyco) => {
      this.studentsByCoursesCollection = stbyco;
      this.fixDataFordisplay();
    });
  }
  loadToForm(selectedData: StudentsByCourses) {
    this.addObjectForm.setValue(selectedData);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
