import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-students';
  selectedEntity: string = 'students';

  selectEntity(entity: string) {
    this.selectedEntity = entity;
  }
}
