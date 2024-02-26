import { Student } from './../../Models/Student';
import { Component } from '@angular/core';
import listStudents from 'src/Models/Student';
import { EntityViewerComponent } from '../shared/shared/entity-viewer/entity-viewer.component';
import { AddObjectFormComponent } from '../shared/shared/add-object-form/add-object-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  public studentsCollection = listStudents as Array<Student>;
  modelAttributes = Object.keys(this.studentsCollection[0]);
  newStudent = {} as Student;
  showAddStudentForm = false;

  oppenAddStudentForm() {
    this.showAddStudentForm = true;
  }
  closeForm() {
    this.showAddStudentForm = false;
  }
  addObject(student: Student) {
    this.studentsCollection.push(student);
    this.showAddStudentForm = false;
  }
}
