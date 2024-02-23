import { Component } from '@angular/core';
import { Entity } from 'src/Components/shared/Entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-students';
  selectedEntity: Entity = Entity.Students;

  public selectEntity(inputChoice: string) {
    let choice = inputChoice as Entity;
    if (this.selectedEntity !== choice) {
      this.selectedEntity = choice;
    }
  }
}
