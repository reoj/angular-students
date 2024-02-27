import { Student, studentFields } from './../../Models/Student';
import { Component, Input } from '@angular/core';
import listStudents from 'src/Models/Student';
import { EntityViewerComponent } from '../shared/shared/entity-viewer/entity-viewer.component';
import { AddObjectFormComponent } from '../shared/shared/add-object-form/add-object-form.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  public studentsCollection = listStudents as Array<Student>;
  modelAttributes = Object.keys(this.studentsCollection[0]);
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder) {    
    this.addObjectForm = this.builder.group(studentFields);
  }

  addObject(student: Student) {
    this.studentsCollection.push(student);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
