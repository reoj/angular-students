import { Course } from 'src/Models/Course';
import { Student, studentFields } from './../../../../Models/Student';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/Models/Project';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-add-object-form',
  templateUrl: './add-object-form.component.html',
  styleUrls: ['./add-object-form.component.css'],
})
export class AddObjectFormComponent implements OnInit {
  @Input() title: string = '';
  @Input() objectType = 'student';
  fields = studentFields;
  addObjectForm: FormGroup = new FormGroup({});
  modelAttributes = Object.keys(studentFields);
  @Output() addObject = new EventEmitter<Student | Course | Project>();
  @Output() clearForm = new EventEmitter<void>();
  @Output() formSubmit = new EventEmitter<void>();
  @Output() formReset = new EventEmitter<void>();

  constructor(private builder: FormBuilder) {
    this.addObjectForm = builder.group(studentFields);
  }

  ngOnInit(): void {}

  onSubmit(value: FormGroup) {
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
