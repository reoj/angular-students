export class Project {
    constructor(public Id: number, public Name: string) {
        this.Id = Id;
        this.Name = Name;
    }
}
const listProjects: Project[] = [
    { Id: 1112, Name: "Project Marshal" },
    { Id: 1122, Name: "Project Alekein" },
    { Id: 2213, Name: "Project King's Indian" }
];

export interface ProjectGUI {
    Id: number;
    Name: string;
}

export const projectsFields = {
    Id: [''],
    Name: ['']
};

export default listProjects;
