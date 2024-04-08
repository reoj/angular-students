import listStudents, { Project } from 'src/Models/Project';
import listProjects, { Student } from 'src/Models/Student';

export class StudentsByProject {
  constructor(
    public Id: number,
    public registeredStudent: Student,
    public registeredProject: Project
  ) {
    this.Id = Id;
    this.registeredStudent = registeredStudent;
    this.registeredProject = registeredProject;
  }
}
const listStudentsByProjects: StudentsByProject[] = [
  {
    Id: 0,
    registeredStudent: listStudents[0],
    registeredProject: listProjects[0],
  },
];

export default listStudentsByProjects;

export interface StudentsByProjectGUI {
  Id: number;
  StudentId: number;
  StudentName: string;
  ProjectId: number;
  ProjectName: string;
}

export const studentByProjectFields = {
  StudentName: [''],
  CourseName: [''],
};
