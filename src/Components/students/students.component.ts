import { Student, studentFields } from './../../Models/Student';
import { Component, Input } from '@angular/core';
import listStudents from 'src/Models/Student';
import { EntityViewerComponent } from '../shared/shared/entity-viewer/entity-viewer.component';
import { AddObjectFormComponent } from '../shared/shared/add-object-form/add-object-form.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  public studentsCollection = [] as Student[];
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private dataService: DataService) {
    this.fetchstudents();
    this.modelAttributes = Object.keys(studentFields);
    this.addObjectForm = this.builder.group(studentFields);
  }

  fetchstudents() {
    this.dataService.fetchDataStudents().subscribe((students) => {
      this.studentsCollection = students;
    });
  }
  addObject(student: Student) {
    this.dataService.addDataStudents(student).subscribe((students) => {
      this.studentsCollection = students;
    });
  }
  loadToForm(student: Student) {
    this.addObjectForm.setValue(student);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
