import { Student } from './Student';
export class StudentByCoursesGUI {
  constructor(public StudentName: string, public CourseName: string) {
    this.StudentName = StudentName;
    this.CourseName = CourseName;
  }
}
export class StudentsByCourses {
  constructor(
    public Id: number,
    public StudentId: number,
    public CourseId: number
  ) {
    this.Id = Id;
    this.StudentId = StudentId;
    this.CourseId = CourseId;
  }
}
const listStudentsByCourses: StudentsByCourses[] = [
  { Id: 0, StudentId: 1, CourseId: 101 },
];

export default listStudentsByCourses;



export const studentByCoursesFields = {
  StudentName: [''],
  CourseName: ['']
};
