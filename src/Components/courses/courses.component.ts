
import { Component } from '@angular/core';
import { EntityViewerComponent } from '../shared/shared/entity-viewer/entity-viewer.component';
import listCourses, { Course } from 'src/Models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public coursesCollection = listCourses as Array<Course>;

}
