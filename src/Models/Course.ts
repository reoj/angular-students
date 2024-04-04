export class Course {
  constructor(public Id: number, public Name: string) {
    this.Id = Id;
    this.Name = Name;
  }
}
const listCourses: Course[] = [
  { Id: 101, Name: 'Basic Programming' },
  { Id: 102, Name: 'Math' },
  { Id: 203, Name: 'Magic' },
];

export interface CourseGUI {
  Id: number;
  Name: string;
}

export const coursesFields = {
  Id: [''],
  Name: ['']
};
export default listCourses;
