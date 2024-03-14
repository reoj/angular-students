import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import listCourses, { Course } from 'src/Models/Course';
import { Project } from 'src/Models/Project';
import { Student } from 'src/Models/Student';

@Component({
  selector: 'shared-entity-viewer',
  templateUrl: './entity-viewer.component.html',
  styleUrls: ['./entity-viewer.component.css']
})
export class EntityViewerComponent implements OnInit {
  @Input() listObjects: Array<Student | Course | Project> = [];
  modelAttributes: string[] = [];
  objects: any[] = [];
  @Output() editable = new EventEmitter<Student | Course | Project>();

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
  loadToEdit(object: Student | Course | Project) {
    this.editable.emit(object);
  }
}
