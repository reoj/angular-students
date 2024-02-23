import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityViewerComponent } from './entity-viewer/entity-viewer.component';

@NgModule({
  declarations: [EntityViewerComponent],
  imports: [CommonModule],
  exports: [EntityViewerComponent],
})
export class SharedModule {}
