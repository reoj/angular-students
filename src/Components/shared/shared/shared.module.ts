import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityViewerComponent } from './entity-viewer/entity-viewer.component';
import { AddObjectFormComponent } from './add-object-form/add-object-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EntityViewerComponent, AddObjectFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [EntityViewerComponent, AddObjectFormComponent],
})
export class SharedModule {}
