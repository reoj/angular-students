import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student, StudentGUI } from 'src/Models/Student';
import { Course, CourseGUI } from 'src/Models/Course';
import { Project, ProjectGUI } from 'src/Models/Project';
import {
  StudentsByCourses,
  StudentByCoursesGUI,
} from 'src/Models/StudentsByCourse';
import {
  StudentsByProject,
  StudentsByProjectGUI,
} from 'src/Models/StudentsByProject';

@Component({
  selector: 'shared-entity-viewer',
  templateUrl: './entity-viewer.component.html',
  styleUrls: ['./entity-viewer.component.css'],
})
export class EntityViewerComponent implements OnInit {
  @Input() listObjects: Array<
    Student | Course | Project | StudentsByCourses | StudentsByProject
  > = [];
  modelAttributes: string[] = [];
  objects: any[] = [];
  @Output() editable = new EventEmitter<any>();

  ngOnInit(): void {
    if (this.listObjects.length > 0) {
      const firstObjectInList = this.listObjects[0];
      this.modelAttributes = this.decideGUI(firstObjectInList);
      this.objects = this.listObjects;
    }
  }

  ngOnChanges(): void {
    if (this.listObjects.length > 0) {
      this.objects = this.listObjects;
    }
  }
  public resetList() {
    this.listObjects = [];
  }
  loadToEdit(
    object: Student | Course | Project | StudentsByCourses | StudentsByProject
  ) {
    this.editable.emit(object);
  }
  private decideGUI(
    arg0: Student | Course | Project | StudentsByCourses | StudentsByProject
  ) {
    let model = {};
    switch (arg0.constructor.name) {
      case 'Student':
        model = {} as StudentGUI;
        break;
      case 'Course':
        model = {} as CourseGUI;
        break;
      case 'Project':
        model = {} as ProjectGUI;
        break;
      case 'StudentsByCourses':
        model = {} as StudentByCoursesGUI;
        break;
      case 'StudentsByProject':
        model = {} as StudentsByProjectGUI;
        break;
    }
    return Object.keys(model);
  }
}
