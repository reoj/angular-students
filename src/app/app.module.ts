import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from '../Components/students/students.component';
import { SharedModule } from 'src/Components/shared/shared/shared.module';
import { CoursesComponent } from 'src/Components/courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from 'src/Components/projects/projects.component';
import { RouterModule } from '@angular/router';
import { DataService } from 'src/services/data.service';
import { StudentsByCoursesComponent } from 'src/Components/students-by-courses/students-by-courses.component';
import { StudentsByProjectComponent } from 'src/Components/students-by-project/students-by-project.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    ProjectsComponent,
  ],

  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: 'students', component: StudentsComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'studentsByCourses', component: StudentsByCoursesComponent },
      { path: 'studentsByProject', component: StudentsByProjectComponent },
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
