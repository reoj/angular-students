import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { studentByProjectFields, StudentsByProject } from 'src/Models/StudentsByProject';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-students-by-project',
  templateUrl: './students-by-project.component.html',
  styleUrl: './students-by-project.component.css',
})
export class StudentsByProjectComponent {
  public studentsByProjectCollection = [] as StudentsByProject[];
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private dataService: DataService) {
    this.fetchstudentsByCourses();
    this.modelAttributes = Object.keys(studentByProjectFields);
    this.addObjectForm = this.builder.group(studentByProjectFields);
  }

  fetchstudentsByCourses() {
    this.dataService.fetchDataStudentsByProjects().subscribe((stbypro) => {
      this.studentsByProjectCollection = stbypro;
    });
  }
  addObject(newValue: StudentsByProject) {
    this.dataService.addDataStudentsByProjects(newValue).subscribe((stbypro) => {
      this.studentsByProjectCollection = stbypro;
    });
  }
  loadToForm(selectedData: StudentsByProject) {
    this.addObjectForm.setValue(selectedData);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
