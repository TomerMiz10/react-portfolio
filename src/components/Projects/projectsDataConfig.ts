import { Project } from "./projectInterfaces";
import supportaiLogoColorPng from '/react-portfolio/projects/supportai-logo-color.png';
import podifyLogo from '/react-portfolio/projects/podify-logo-hero.png';
import stoicreadsLogo from '/react-portfolio/projects/stoicreads-logo.png';
import silverwingLogo from '/react-portfolio/projects/silverwing-logo-bw.jpeg';
export const projectsData: Project[] = [
    {
        id: 1,
        projectName: 'SupportAI',
        projectImage: supportaiLogoColorPng,
        projectDescription: `An AI-powered app transforming support call transcripts into troubleshooting guides,
                             enabling support agents to resolve issues faster and more efficiently.`,
        projectTechnologies: ['Node.js', 'TypeScript', 'NestJS', 'TypeORM', 'PostgreSQL', 'Next.Js', 'OpenAI API'],
        projectLinks: {
            github: 'https://github.com/SupportAI-Project/SupportAI',
            demoVideo: ''
        },
    },
    {
        id: 2,
        projectName: 'Podify',
        projectImage: podifyLogo,
        projectDescription: `A sample podcaster site where users can manage and enjoy podcasts. The project uses AWS services like EC2, RDS, VPC and ALB.`,
        projectTechnologies: ['Python Flask', 'Next.Js', 'AWS', 'Terraform', 'Spotify API'],
        projectLinks: {
            github: 'https://github.com/NTTM-Cloud-Solutions/AWS',
            demoVideo: ''
        },
    },
    {
        id: 3,
        projectName: 'StoicReads',
        projectImage: stoicreadsLogo,
        projectDescription: `A Full-Stack web application platform for book rating and sharing to enhance user engagement and discovery.
                            The project uses`,
        projectTechnologies: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'React', 'Google Books API'],
        projectLinks: {
            github: 'https://github.com/JosephOri/StoicReads',
            demoVideo: ''
        },
    },
    {
        id: 4,
        projectName: 'Silverwing',
        projectImage: silverwingLogo,
        projectDescription: 'A stock market analysis tool that provides real-time stock data and analysis to help users make informed investment decisions.',
        projectTechnologies: ['Node.Js', 'TypeScript', 'NestJS', 'Next.js', 'MongoDB', 'YahooFinance API'],
        projectLinks: {
            github: 'https://github.com/Silver-Wing-Project',
            demoVideo: ''
        },
    }
];