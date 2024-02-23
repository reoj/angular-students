import { Component, Input } from '@angular/core';
import listStudents, { Student } from 'src/Models/Student';
import listProjects, { Project } from 'src/Models/Project';
import listCourses, { Course } from 'src/Models/Course';

@Component({
  selector: 'app-entity-viewer',
  templateUrl: './entity-viewer.component.html',
  styleUrls: ['./entity-viewer.component.css'],
})
export class EntityViewerComponent {
  @Input() entity: string = '';
  
  alumnos: Array<Student> = listStudents;
  proyectos: Array<Project> = listProjects;
  courses: Array<Course> = listCourses;

  entityData = listStudents;
  // Method to get the data based on the entity parameter
  getData(): Student[] | Project[] | Course[]{
    switch (this.entity) {
      case 'students':
        return this.alumnos;
      case 'projects':
        return this.proyectos;
      case 'courses':
        return this.courses;
      default:
        return [];
    }
  }
}
