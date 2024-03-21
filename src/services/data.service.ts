import { Observable, of } from 'rxjs';
import listCourses, { Course } from 'src/Models/Course';
import listProjects, { Project } from 'src/Models/Project';
import listStudents, { Student } from 'src/Models/Student';

export class DataService {
  private studentsData: Student[] = listStudents;
  private coursesData: Course[] = listCourses;
  private projectsData: Project[] = listProjects;

  // Simulate fetching data from a TS file
  fetchDataStudents(): Observable<Student[]> {
    return new Observable<Student[]>((observer) => {
      setTimeout(() => {
        observer.next(this.studentsData);
        observer.complete();
      }, 500);
    });
  }

  addDataStudents(newData: Student): Observable<Student[]> {
    let indexOfFoundStudent = this.findObbjectIndexById(
      this.studentsData,
      newData.Id
    );
    let isRegistered = indexOfFoundStudent > -1;
    if (isRegistered) {
      this.studentsData[indexOfFoundStudent] = newData;
      return of(this.studentsData);
    }
    return new Observable<Student[]>((observer) => {
      setTimeout(() => {
        this.studentsData.push(newData);
        observer.next(this.studentsData);
        observer.complete();
      }, 500);
    });
  }

  fetchDataCourses(): Observable<Course[]> {
    return new Observable<Course[]>((observer) => {
      setTimeout(() => {
        observer.next(this.coursesData);
        observer.complete();
      }, 500);
    });
  }
  addDataCourses(newData: Course): Observable<Course[]> {
    let indexOfFoundStudent = this.findObbjectIndexById(
      this.coursesData,
      newData.Id
    );
    let isRegistered = indexOfFoundStudent > -1;
    if (isRegistered) {
      this.coursesData[indexOfFoundStudent] = newData;
      return of(this.coursesData);
    }
    return new Observable<Course[]>((observer) => {
      setTimeout(() => {
        this.coursesData.push(newData);
        observer.next(this.coursesData);
        observer.complete();
      }, 500);
    });
  }
  fetchDataProjects(): Observable<Project[]> {
    return new Observable<Project[]>((observer) => {
      setTimeout(() => {
        observer.next(this.projectsData);
        observer.complete();
      }, 500);
    });
  }
  addDataProjects(newData: Project): Observable<Project[]> {
    let indexOfFoundStudent = this.findObbjectIndexById(
      this.projectsData,
      newData.Id
    );
    let isRegistered = indexOfFoundStudent > -1;
    if (isRegistered) {
      this.projectsData[indexOfFoundStudent] = newData;
      return of(this.projectsData);
    }
    return new Observable<Project[]>((observer) => {
      setTimeout(() => {
        this.projectsData.push(newData);
        observer.next(this.projectsData);
        observer.complete();
      }, 500);
    });
  }
  private findObbjectIndexById(
    data: Student[] | Course[] | Project[],
    id: number
  ): number {
    return data.findIndex((objInstance) => objInstance.Id === id);
  }
}
