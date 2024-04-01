import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import listCourses, { Course } from 'src/Models/Course';
import { Project } from 'src/Models/Project';
import { Student } from 'src/Models/Student';
import { StudentsByCourses } from 'src/Models/StudentsByCourse';
import { StudentsByProject } from 'src/Models/StudentsByProject';

@Component({
  selector: 'shared-entity-viewer',
  templateUrl: './entity-viewer.component.html',
  styleUrls: ['./entity-viewer.component.css'],
})
export class EntityViewerComponent implements OnInit {
  @Input() listObjects: Array<Student | Course | Project | StudentsByCourses | StudentsByProject> =
    [];
  modelAttributes: string[] = [];
  objects: any[] = [];
  @Output() editable = new EventEmitter<any>();

  ngOnInit(): void {
    if (this.listObjects.length > 0) {
      this.modelAttributes = Object.keys(this.listObjects[0]);
      this.objects = this.listObjects;
    }
  }
  ngOnChanges(): void {
    if (this.listObjects.length > 0) {
      this.modelAttributes = Object.keys(this.listObjects[0]);
      this.objects = this.listObjects;
    }
  }
  public resetList() {
    this.listObjects = [];
  }
  loadToEdit(object: Student | Course | Project | StudentsByCourses | StudentsByProject) {
    this.editable.emit(object);
  }
}
