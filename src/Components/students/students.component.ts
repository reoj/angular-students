import { Student } from './../../Models/Student';
import { Component } from '@angular/core';
import listStudents from 'src/Models/Student';
import { EntityViewerComponent } from '../shared/shared/entity-viewer/entity-viewer.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  public studentsCollection = listStudents as Array<Student>;

}
