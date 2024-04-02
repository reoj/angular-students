import { Observable, of } from 'rxjs';
import listCourses, { Course } from 'src/Models/Course';
import listProjects, { Project } from 'src/Models/Project';
import listStudents, { Student } from 'src/Models/Student';
import listStudentsByCourses, {
  StudentsByCourses,
} from 'src/Models/StudentsByCourse';
import listStudentsByProjects, { StudentsByProject } from 'src/Models/StudentsByProject';

export class DataService {
  
  private studentsData: Student[] = listStudents;
  private coursesData: Course[] = listCourses;
  private projectsData: Project[] = listProjects;
  private studentsByCoursesData: StudentsByCourses[] = listStudentsByCourses;
  private studentsByProjectData: StudentsByProject[] = listStudentsByProjects;

  // Simulate fetching data from a TS file
  fetchDataStudents(): Observable<Student[]> {
    return new Observable<Student[]>((observer) => {
      setTimeout(() => {
        observer.next(this.studentsData);
        observer.complete();
      }, 500);
    });
  }

  getStudentById(id: number) {
    return this.studentsData.find((student) => student.Id === id);
  }
  getCourseById(id: any) {
    return this.coursesData.find((course) => course.Id === id);
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
  fetchDataStudentsByCourses() {
    return new Observable<StudentsByCourses[]>((observer) => {
      setTimeout(() => {
        observer.next(listStudentsByCourses);
        observer.complete();
      }, 500);
    });
  }
  
  addDataStudentsByCourses(newData: StudentsByCourses) {
    let indexOfFoundRegistration =
      this.checkIfStudentIsRegisteredInCourse(newData);
    let isRegistered = indexOfFoundRegistration > -1;
    if (isRegistered) {
      this.studentsByCoursesData[indexOfFoundRegistration] = newData;
      return of(this.studentsByCoursesData);
    }
    return new Observable<StudentsByCourses[]>((observer) => {
      setTimeout(() => {
        this.studentsByCoursesData.push(newData);
        observer.next(this.studentsByCoursesData);
        observer.complete();
      }, 500);
    });
  }
  fetchDataStudentsByProjects() {
    return new Observable<StudentsByProject[]>((observer) => {
      setTimeout(() => {
        observer.next(this.studentsByProjectData);
        observer.complete();
      }, 500);
    });
  }
  addDataStudentsByProjects(newData: StudentsByProject) {
    let indexOfFoundRegistration =
      this.checkIfStudentIsRegisteredInProject(newData);
    let isRegistered = indexOfFoundRegistration > -1;
    if (isRegistered) {
      this.studentsByProjectData[indexOfFoundRegistration] = newData;
      return of(this.studentsByProjectData);
    }
    return new Observable<StudentsByProject[]>((observer) => {
      setTimeout(() => {
        this.studentsByProjectData.push(newData);
        observer.next(this.studentsByProjectData);
        observer.complete();
      }, 500);
    });
  }
  private checkIfStudentIsRegisteredInProject(newData: StudentsByProject) {
    return this.studentsByProjectData.findIndex(
      (objInstance) =>
        objInstance.StudentId === newData.StudentId &&
        objInstance.ProjectID === newData.ProjectID
    );
  }
  private checkIfStudentIsRegisteredInCourse(newData: StudentsByCourses) {
    return this.studentsByCoursesData.findIndex(
      (objInstance) =>
        objInstance.StudentId === newData.StudentId &&
        objInstance.CourseID === newData.CourseID
    );
  }
  private findObbjectIndexById(
    data: Student[] | Course[] | Project[] | StudentsByCourses[],
    id: number
  ): number {
    return data.findIndex((objInstance) => objInstance.Id === id);
  }
}
