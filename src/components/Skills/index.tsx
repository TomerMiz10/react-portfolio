import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { logos } from './logosImportConfig.ts';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const skillsArray = ['S', 'k', 'i', 'l', 'l', 's'];

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                {name: "Python", icon: logos.languages.python},
                {name: "JavaScript", icon: logos.languages.javascript},
                {name: "TypeScript", icon: logos.languages.typescript},
                {name: "Java", icon: logos.languages.java},
                {name: "C++", icon: logos.languages.cpp},
                {name: "C#", icon: logos.languages.csharp},
            ]
        },
        {
            title: "DevOps & Cloud",
            skills: [
                { name: "AWS", icon: logos.devops.aws },
                { name: "Docker", icon: logos.devops.docker },
                { name: "Ansible", icon: logos.devops.ansible },
                { name: "Terraform", icon: logos.devops.terraform },
                { name: "GitHub Actions", icon: logos.devops.gitActions },
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                {name: "HTML5", icon: logos.frontend.html},
                {name: "CSS", icon: logos.frontend.css},
                { name: "React", icon: logos.frontend.react },
                { name: "Next.js", icon: logos.frontend.nextjs },
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: logos.backend.nodejs },
                { name: "Express", icon: logos.backend.express },
                { name: "NestJS", icon: logos.backend.nestjs },
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: logos.databases.mysql },
                { name: "MongoDB", icon: logos.databases.mongodb },
                { name: "PostgreSQL", icon: logos.databases.postgresql },
            ]
        },
    ];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, import.meta.env.VITE_ANIMATION_DELAY_MS);
        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={skillsArray} 
                            idx={6} 
                        />
                    </h1>
                    <div className='skills-container'>
                        {skillCategories.map((category) => (
                            <div className='category-section' key={category.title}>
                                <h2 className='category-title'>{category.title}</h2>
                                <div className='skills-list'>
                                    {category.skills.map((skill) => (
                                        <div className='skill-item' key={skill.name}>
                                            <img src={skill.icon} alt={`${skill.name} logo`} className='skill-icon' />
                                            <h3>{skill.name}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>  
            <Loader type="pacman" active={true} />
        </>
    );
};

export default Skills;