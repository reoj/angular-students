
export class StudentsByProject {
  constructor(
    public Id: number,
    public StudentId: number,
    public ProjectID: number
  ) {
    this.Id = Id;
    this.StudentId = StudentId;
    this.ProjectID = ProjectID;
  }
}
const listStudentsByProjects: StudentsByProject[] = [
  { Id: 0, StudentId: 1, ProjectID: 1 },
];

export default listStudentsByProjects;

export interface StudentsByProjectGUI {
  StudentName: string;
  CourseName: string;
}

export const studentByProjectFields = {
  StudentName: [''],
  CourseName: ['']
};
