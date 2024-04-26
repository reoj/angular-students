import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from 'src/Models/Project';
import { Student } from 'src/Models/Student';
import {
  studentByProjectFields,
  StudentsByProject,
  StudentsByProjectGUI,
} from 'src/Models/StudentsByProject';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-students-by-project',
  templateUrl: './students-by-project.component.html',
  styleUrl: './students-by-project.component.css',
})
export class StudentsByProjectComponent implements OnInit {
  private studentsByProjectCollection = [] as StudentsByProject[];
  public studentsByProjectsDisplay = [] as StudentsByProjectGUI[];
  modelAttributes = [] as string[];
  addObjectForm: FormGroup = new FormGroup({});
  currentStudents = [] as Student[];
  currentProjects = [] as Project[];

  constructor(private builder: FormBuilder, private dataService: DataService) {
    this.modelAttributes = Object.keys(studentByProjectFields);
  }
  ngOnInit(): void {
    this.fetchData();
    this.addObjectForm = new FormGroup({
      StudentName: this.builder.control(''),
      ProjectName: this.builder.control(''),
    });
  }
  fetchData() {
    this.dataService.fetchDataStudentsByProjects().subscribe((stbypro) => {
      this.studentsByProjectCollection = stbypro;
      this.fetchCurrentStudents();
      this.fetchCurrentProjects();
      this.fetchStudentsByProjects();
      this.fixDataForDisplay();
    });
  }
  private fixDataForDisplay() {
    this.studentsByProjectsDisplay = this.studentsByProjectCollection.map(
      (stbyco) => {
        let student = this.dataService.getStudentById(stbyco.StudentId);
        let project = this.dataService.getProjectByID(stbyco.ProjectID);
        return {
          StudentName: student?.Name ?? '',
          ProjectName: project?.Name ?? '',
        };
      }
    );
  }
  fetchCurrentStudents() {
    this.dataService.fetchDataStudents().subscribe((students) => {
      this.currentStudents = students;
    });
  }

  fetchCurrentProjects() {
    this.dataService.fetchDataProjects().subscribe((projects) => {
      this.currentProjects = projects;
    });
  }

  fetchStudentsByProjects() {
    this.dataService.fetchDataStudentsByProjects().subscribe((stbypro) => {
      this.studentsByProjectCollection = stbypro;
    });
  }
  addObject() {
    let newRelationship = new StudentsByProjectGUI(
      this.addObjectForm.value.StudentName,
      this.addObjectForm.value.ProjectName
    );
    this.dataService
      .addDataStudentsByProjects(newRelationship)
      .subscribe((stbypro) => {
        this.studentsByProjectCollection = stbypro;
        console.log(newRelationship);
        this.fixDataForDisplay();
      });
  }
  loadToForm(selectedData: StudentsByProject) {
    this.addObjectForm.setValue(selectedData);
  }
  clearForm() {
    this.addObjectForm.reset();
  }
}
