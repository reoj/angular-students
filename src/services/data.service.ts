import { Observable, of } from 'rxjs';
import listCourses, { Course } from 'src/Models/Course';
import listProjects, { Project } from 'src/Models/Project';
import listStudents, { Student } from 'src/Models/Student';
import listStudentsByCourses, {
  StudentByCoursesGUI,
  StudentsByCourses,
} from 'src/Models/StudentsByCourse';
import listStudentsByProjects, {
  StudentsByProject,
  StudentsByProjectGUI,
} from 'src/Models/StudentsByProject';

export class DataService {
  private studentsData: Student[] = listStudents;
  private coursesData: Course[] = listCourses;
  private projectsData: Project[] = listProjects;
  private studentsByCoursesData: StudentsByCourses[] = listStudentsByCourses;
  private studentsByProjectData: StudentsByProject[] = listStudentsByProjects;

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
  getCourseById(id: number) {
    return this.coursesData.find((course) => course.Id === id);
  }

  addDataStudents(newData: Student): Observable<Student[]> {
    console.log(newData);
    let indexOfFoundStudent = this.findStudentIndexById(newData.Id);
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
  findStudentIndexById(Id: number) {
    return this.studentsData.findIndex((student) => student.Id === Id);
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
    let indexOfFoundStudent = this.findCourseIndexById(newData.Id);
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
  findCourseIndexById(Id: number) {
    return this.coursesData.findIndex((course) => course.Id === Id);
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
    let indexOfFoundStudent = this.findProjectIndexById(newData.Id);
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
  findProjectIndexById(Id: number) {
    return this.projectsData.findIndex((project) => project.Id === Id);
  }
  fetchDataStudentsByCourses() {
    return new Observable<StudentsByCourses[]>((observer) => {
      setTimeout(() => {
        observer.next(listStudentsByCourses);
        observer.complete();
      }, 500);
    });
  }

  addDataStudentsByCourses(newData: StudentByCoursesGUI) {
    let student = this.studentsData.find(
      (student) => student.Name === newData.StudentName
    );
    let course = this.coursesData.find(
      (course) => course.Name === newData.CourseName
    );
    if (student && course) {
      let newStudentByCourse = new StudentsByCourses(
        this.studentsByCoursesData.length + 1,
        student.Id,
        course.Id
      );
      let indexOfFoundRegistration =
        this.checkIfStudentIsRegisteredInCourse(newStudentByCourse);
      let isRegistered = indexOfFoundRegistration > -1;
      if (isRegistered) {
        this.studentsByCoursesData[indexOfFoundRegistration] =
          newStudentByCourse;
        return of(this.studentsByCoursesData);
      }
      this.studentsByCoursesData.push(newStudentByCourse);
    }
    return new Observable<StudentsByCourses[]>((observer) => {
      setTimeout(() => {
        observer.next(this.studentsByCoursesData);
        observer.complete();
      }, 500);
    });
  }

  addDataStudentsByProjects(
    newData: StudentsByProjectGUI
  ): Observable<StudentsByProject[]> {
    let student = this.studentsData.find(
      (student) => student.Name === newData.StudentName
    );
    let project = this.projectsData.find(
      (proy) => proy.Name === newData.ProjectName
    );
    if (student && project) {
      let newStudentByProyect = new StudentsByProject(
        this.studentsByCoursesData.length + 1,
        student.Id,
        project.Id
      );
      let indexOfFoundRegistration =
        this.checkIfStudentIsRegisteredInProject(newStudentByProyect);
      let isRegistered = indexOfFoundRegistration > -1;

      if (isRegistered) {
        this.studentsByProjectData[indexOfFoundRegistration] =
          newStudentByProyect;
        return of(this.studentsByProjectData);
      }
      this.studentsByProjectData.push(newStudentByProyect);
    }
    return new Observable<StudentsByProject[]>((observer) => {
      setTimeout(() => {
        observer.next(this.studentsByProjectData);
        observer.complete();
      }, 500);
    });
  }

  public getProjectByID(ProjectID: number) {
    return this.projectsData.find((project) => project.Id === ProjectID);
  }

  fetchDataStudentsByProjects(): Observable<StudentsByProject[]> {
    return new Observable<StudentsByProject[]>((observer) => {
      setTimeout(() => {
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
        objInstance.CourseId === newData.CourseId
    );
  }
}
