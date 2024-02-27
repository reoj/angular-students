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
  @Output() addObject = new EventEmitter<Student | Course | Project>();
  @Output() clearForm = new EventEmitter<void>();
  @Output() formSubmit = new EventEmitter<void>();
  @Output() formReset = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.formSubmit.emit();
  }

  onReset() {
    this.formReset.emit();
  }

  onAddObject() {
    this.addObject.emit();
  }

  onClearForm() {
    this.clearForm.emit();
  }
}

