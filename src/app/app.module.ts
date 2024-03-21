import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from '../Components/students/students.component';
import { SharedModule } from 'src/Components/shared/shared/shared.module';
import { CoursesComponent } from 'src/Components/courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from 'src/Components/projects/projects.component';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';

@NgModule({
  declarations: [AppComponent, StudentsComponent, CoursesComponent, ProjectsComponent],
  imports: [BrowserModule, SharedModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(
    [
      {path: 'students', component: StudentsComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'projects', component: ProjectsComponent},
    ]
  
  )],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
