import { Student, studentFields } from './../../Models/Student';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  public studentsCollection = [] as Student[];
  modelAttributes = [] as string[];
  addObjectForm!: FormGroup;

  constructor(private builder: FormBuilder, private dataService: DataService) {}
  ngOnInit(): void {
    this.fetchstudents();
    this.modelAttributes = Object.keys(studentFields);
    this.addObjectForm = new FormGroup({
      Id: new FormControl(''),
      Name: new FormControl(''),
    });
  }
  fetchstudents() {
    this.dataService.fetchDataStudents().subscribe((students) => {
      this.studentsCollection = students;
      console.log(this.studentsCollection);
    });
  }
  addObject() {
    let student = new Student(
      Number.parseInt(this.addObjectForm.value.Id) ?? this.studentsCollection.length + 1,
      this.addObjectForm.value.Name ?? ''
    );
    console.log(student);
    this.dataService.addDataStudents(student).subscribe((students) => {
      this.studentsCollection = [...students];
      console.log(this.studentsCollection);
    });
  }
  loadToForm(student: Student) {
    this.addObjectForm.setValue(student);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
