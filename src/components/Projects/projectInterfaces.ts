interface ProjectLinks {
    github: string;
    demoVideo?: string;
}

interface Project {
    id: number;
    projectName: string;
    projectImage: string;
    projectDescription: string;
    projectTechnologies: string[];
    projectLinks: ProjectLinks;
}

export type { Project, ProjectLinks };