
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
  { Id: 0, StudentId: 1, ProjectID: 1112 },
];

export default listStudentsByProjects;

export class StudentsByProjectGUI {
  constructor(public StudentName: string, public ProjectName: string) {
    this.StudentName = StudentName;
    this.ProjectName = ProjectName;
  }
}

export const studentByProjectFields = {
  StudentName: [''],
  ProjectName: ['']
};
