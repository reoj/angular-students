import { Student } from './Student';

export class StudentsByCourses {
  constructor(
    public Id: number,
    public StudentId: number,
    public CourseID: number
  ) {
    this.Id = Id;
    this.StudentId = StudentId;
    this.CourseID = CourseID;
  }
}
const listStudentsByCourses: StudentsByCourses[] = [
  { Id: 0, StudentId: 1, CourseID: 1 },
];

export default listStudentsByCourses;

export interface StudentByCoursesGUI {
  StudentName: string;
  CourseName: string;
}

export const studentByCoursesFields = {
  StudentName: [''],
  CourseName: ['']
};
