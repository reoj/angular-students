import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityViewerComponent } from './entity-viewer/entity-viewer.component';
import { AddObjectFormComponent } from './add-object-form/add-object-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EntityViewerComponent, AddObjectFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [EntityViewerComponent, AddObjectFormComponent],
})
export class SharedModule {}
