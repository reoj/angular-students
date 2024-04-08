import listStudents, { Student } from 'src/Models/Student';
import listCourses, { Course } from './Course';

export class StudentsByCourses {
  constructor(
    public Id: number,
    public registeredStudent: Student,
    public registeredCourse: Course
  ) {
    this.Id = Id;
    this.registeredStudent = registeredStudent;
    this.registeredCourse = registeredCourse;
  }
}
const listStudentsByCourses: StudentsByCourses[] = [
  {
    Id: 0,
    registeredStudent: listStudents[0],
    registeredCourse: listCourses[0],
  },
];

export default listStudentsByCourses;

export interface StudentByCoursesGUI {
  Id: number;
  StudentId: number;
  StudentName: string;
  CourseId: number;
  CourseName: string;
}

export const studentByCoursesFields = {
  StudentName: [''],
  CourseName: [''],
};
