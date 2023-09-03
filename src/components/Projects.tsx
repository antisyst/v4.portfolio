import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useState, useRef, useEffect } from "react";
import { memo } from "react";
import projectsData from '../database/projects.json';



const ProjectsLayout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: max-content;
    padding: 10vh 10%;
    margin-top: 1vh;
    margin-bottom: 4vh;

    @media only screen and (max-width: 768px) {
        padding: 0px 4%;
    margin-top: 9vh;
    }
`
const FirstContent = styled.h1 `
font-weight: bold;
font-size: calc(10px + 5vmin);
font-family: 'General Sans', sans-serif;
text-align: left;
color: var(--var-color-component-white);
margin: 3vh 0;
padding-left: 30px;


@media only screen and (max-width: 768px) {
    font-size: calc(10px + 6.5vmin);
}
`
const EmptyContent = styled.br `
    user-select: none;
`
const ProjectsContainer = styled.div `
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const ProjectItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: clipPathAnimation 1s forwards;
    animation-delay: 0.5s;
    margin: 7px;
    justify-content: center;
    width: 410px;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    text-align: center;
    transition: all 0.4s ease-out;
    border: 1.5px solid var(--var-color-component-white);
    height: 450px;
    padding: 35px 30px;
    background: var(--var-color-component-rgba);


    @keyframes clipPathAnimation {
        to {
          clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
          opacity: 1;
        }
      }

    &:hover {
        transition: all 0.4s ease-out;
        filter: drop-shadow(0 0 0.4rem var(--var-color-component-primary));
        transform: scale(1.01);
    }

    @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 8px 0;
    height: 470px;

    }
`
const ProjectItemH1 = styled.h1 `
    font-family: 'General Sans', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: var(--var-color-component-white);
`
const ProjectContent = styled.p `
    color: var(--var-color-component-white);
    margin-top: 20px;
    font-family: 'General Sans', sans-serif;
    font-size: 19px;
`
const ProjectDomain = styled.a `
    color: var(--var-color-component-primary);
    font-weight: bold;
    margin-top: 10px;
`
const TechStack = styled.div `
    border-top: 2px solid var(--var-color-component-primary);
    border-bottom: 2px solid var(--var-color-component-primary);
    padding: 10px 0;
    margin-top: 20px;
    width: 100%;
`
const TechStackItems = styled.p `
    margin: 7px 0;
    color: var(--var-color-component-primary);
    font-family: 'General Sans', sans-serif;
    font-weight: bold;
    font-size: 19px;
`
const ProjectButton = styled.a `
    text-decoration: none;
    padding: 19px 23px;
    background: var(--var-color-component-primary);
    color: var(--var-color-component-white);
    font-weight: bold;
    margin-top: 30px;
    width: 100%;
    border-radius: 2px;
    transition: all 0.4s ease-out;
    font-size: 20px;
    filter: drop-shadow(0 0 0.1rem var(--var-color-component-primary));

    &:hover {
    transition: all 0.4s ease-out;
    filter: drop-shadow(0 0 0.23rem var(--var-color-component-primary));
    }

    @media only screen and (max-width: 768px) {
        cursor: none;
    }
`


const Projects = memo(() => {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      if (domRef.current) {
        observer.observe(domRef.current);
      }
      return () => {
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      };
    }, []);

    return(
        <ProjectsLayout id="projects">
        <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
          <FirstContent>Some Things I’ve Built</FirstContent>
        </Fade>
        <ProjectsContainer>
          {projectsData.projects.map((project, index) => (
            <Fade key={index} delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
              <ProjectItem>
                <ProjectItemH1>{project.title}</ProjectItemH1>
                <ProjectDomain href={project.domain} target="_blank">{project.domain}</ProjectDomain>
                <ProjectContent>{project.description}</ProjectContent>
                <TechStack>
                  <TechStackItems>{project.techStack.join(', ')}</TechStackItems>
                </TechStack>
                <ProjectButton href={project.projectLink} target="_blank">Visit Project</ProjectButton>
              </ProjectItem>
            </Fade>
          ))}
        </ProjectsContainer>
      </ProjectsLayout>
    )
});

export default Projects;