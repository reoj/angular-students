import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from '../Components/students/students.component';
import { SharedModule } from 'src/Components/shared/shared/shared.module';
import { CoursesComponent } from 'src/Components/courses/courses.component';

@NgModule({
  declarations: [AppComponent, StudentsComponent, CoursesComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
