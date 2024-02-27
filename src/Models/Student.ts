export class Student {
  constructor(public Id: number, public Name: string) {
    this.Id = Id;
    this.Name = Name;
  }
  
}
const listStudents: Student[] = [
  { Id: 1, Name: 'Ben Finegold' },
  { Id: 2, Name: 'Andrea Botez' },
  { Id: 3, Name: 'Magnus Carlsen' },
  { Id: 4, Name: 'Hikaru Nakamura' },
  { Id: 5, Name: 'Fabiano Caruana' },
  { Id: 6, Name: 'Levon Aronian' },
  { Id: 7, Name: 'Wesley So' },
  { Id: 8, Name: 'Vladimir Kramnik' },
  { Id: 9, Name: 'Vishy Anand' },
  { Id: 10, Name: 'Garry Kasparov' },
];

export default listStudents;

export interface StudentGUI {
  Id: number;
  Name: string;
}

export const studentFields = {
  Id: [''],
  Name: ['']
};