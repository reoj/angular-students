import { Course } from 'src/Models/Course';
import { Student } from './../../../../Models/Student';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from 'src/Models/Project';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'shared-add-object-form',
  templateUrl: './add-object-form.component.html',
  styleUrls: ['./add-object-form.component.css'],
})
export class AddObjectFormComponent implements OnInit {
  objectToAdd = {} as Student | Course | Project;
  modelAttributes = [] as string[];
  @Output() addObjectEvent = new EventEmitter<Student | Course | Project>();

  ngOnInit(): void {
    this.modelAttributes = Object.keys(this.objectToAdd);
  }
  addObject() {
    this.addObjectEvent.emit(this.objectToAdd);
  }
}

