import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router) {}

  navigateToStudentsComponent() {
    this.router.navigate(['/students']);
  }

  navigateToProjectsComponent() {
    this.router.navigate(['/projects']);
  }
  navigateToCoursesComponent() {
    this.router.navigate(['/courses']);
  }
}
