import { Observable, of } from 'rxjs';
import listCourses, { Course, CourseGUI } from 'src/Models/Course';
import listProjects, { Project, ProjectGUI } from 'src/Models/Project';
import listStudents, { Student, StudentGUI } from 'src/Models/Student';
import listStudentsByCourses, {
  StudentByCoursesGUI,
  StudentsByCourses,
} from 'src/Models/StudentsByCourse';
import listStudentsByProjects, {
  StudentsByProject,
  StudentsByProjectGUI,
} from 'src/Models/StudentsByProject';

export class DataService {
  private studentsData: StudentGUI[] = listStudents;
  private coursesData: CourseGUI[] = listCourses;
  private projectsData: ProjectGUI[] = listProjects;
  private studentsByCoursesData: StudentByCoursesGUI[] =
    this.transformSBCDataToGUI();
  private studentsByProjectData: StudentsByProjectGUI[] =
    this.transformSBPDataToGUI();

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
    return new Observable<StudentByCoursesGUI[]>((observer) => {
      setTimeout(() => {
        observer.next(this.studentsByCoursesData);
        observer.complete();
      }, 500);
    });
  }

  addDataStudentsByCourses(newData: StudentByCoursesGUI) {
    let registrationToSearch = new StudentsByCourses(
      newData.Id,
      new Student(newData.StudentId, newData.StudentName),
      new Course(newData.CourseId, newData.CourseName)
    );

    let indexOfFoundRegistration =
      this.checkIfStudentIsRegisteredInCourse(registrationToSearch);

    let isRegistered = indexOfFoundRegistration > -1;
    if (isRegistered) {
      this.studentsByCoursesData[indexOfFoundRegistration] = newData;
      return of(this.studentsByCoursesData);
    }
    return new Observable<StudentByCoursesGUI[]>((observer) => {
      setTimeout(() => {
        this.studentsByCoursesData.push(newData);
        observer.next(this.studentsByCoursesData);
        observer.complete();
      }, 500);
    });
  }
  fetchDataStudentsByProjects() {
    return new Observable<StudentsByProjectGUI[]>((observer) => {
      setTimeout(() => {
        observer.next(this.studentsByProjectData);
        observer.complete();
      }, 500);
    });
  }
  addDataStudentsByProjects(newData: StudentsByProjectGUI) {
    let registrationToSearch = new StudentsByProject(
      newData.Id,
      new Student(newData.StudentId, newData.StudentName),
      new Project(newData.ProjectId, newData.ProjectName)
    );

    let indexOfFoundRegistration =
      this.checkIfStudentIsRegisteredInProject(registrationToSearch);

    let isRegistered = indexOfFoundRegistration > -1;
    if (isRegistered) {
      this.studentsByProjectData[indexOfFoundRegistration] = newData;
      return of(this.studentsByProjectData);
    }
    return new Observable<StudentsByProjectGUI[]>((observer) => {
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
        objInstance.StudentId === newData.registeredStudent.Id &&
        objInstance.ProjectId === newData.registeredProject.Id
    );
  }
  private checkIfStudentIsRegisteredInCourse(newData: StudentsByCourses) {
    return this.studentsByCoursesData.findIndex(
      (objInstance) =>
        objInstance.StudentId === newData.registeredStudent.Id &&
        objInstance.CourseId === newData.registeredCourse.Id
    );
  }
  private findObbjectIndexById(
    data:
      | Student[]
      | Course[]
      | Project[]
      | StudentsByProject[]
      | StudentsByCourses[],
    id: number
  ): number {
    return data.findIndex((objInstance) => objInstance.Id === id);
  }
  private transformSBCDataToGUI(): StudentByCoursesGUI[] {
    return listStudentsByCourses.map((registration) => {
      return {
        Id: registration.Id,
        StudentId: registration.registeredStudent.Id,
        StudentName: registration.registeredStudent.Name,
        CourseId: registration.registeredCourse.Id,
        CourseName: registration.registeredCourse.Name,
      };
    });
  }
  transformSBPDataToGUI(): StudentsByProjectGUI[] {
    return listStudentsByProjects.map((registration) => {
      return {
        Id: registration.Id,
        StudentId: registration.registeredStudent.Id,
        StudentName: registration.registeredStudent.Name,
        ProjectId: registration.registeredProject.Id,
        ProjectName: registration.registeredProject.Name,
      };
    });
  }
}
