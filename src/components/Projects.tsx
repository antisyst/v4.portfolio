import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useState, useRef, useEffect } from "react";


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
    border-radius: 8px;
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
interface FadeInSectionProps {
    children: React.ReactNode;
  }

export default function Projects() {

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
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>datan - real-time chat app</ProjectItemH1>
                        <ProjectDomain href="https://datan.netlify.app" target="_blank">datan.netlify.app</ProjectDomain>
                        <ProjectContent>
                        datan is user-friendly platform that allows you to connect with friends in real-time.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, Firebase, SASS</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://datan.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
            </Fade>
            <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>voicex - voice to text generator</ProjectItemH1>
                        <ProjectDomain href="http://voicexapp.netlify.app/" target="_blank">voicexapp.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Modern and user-friendly and that allows users to easily convert their speech into text.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, Redux, SASS,  Toolkit</TechStackItems>
                        </TechStack>
                        <ProjectButton href="http://voicexapp.netlify.app/" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
            </Fade>
            <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>raxios - movie search app</ProjectItemH1>
                        <ProjectDomain href="https://raxios.netlify.app/" target="_blank">raxios.netlify.app</ProjectDomain>
                        <ProjectContent>
                        The app displays a list of matching movies with their posters and description.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, Axios, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://raxios.netlify.app/" target="_blank">Visit Project</ProjectButton>    
                    </ProjectItem>
            </Fade>
            <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>.notemind - create notes</ProjectItemH1>
                        <ProjectDomain href="https://notemind.netlify.app" target="_blank">notemind.netlify.app</ProjectDomain>
                        <ProjectContent>
                        You can quickly create unlimited new notes and collections.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, SASS, MUI </TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://notemind.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
            </Fade>
            <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>weatvibe - today weather</ProjectItemH1>
                        <ProjectDomain href="https://weatvibe.netlify.app/" target="_blank">weatvibe.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Get weather forecast information for all locations around the world with one touch.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ViteJS, TypeScript, SASS, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://weatvibe.netlify.app/" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
            </Fade>
            <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>vath. - fast shipping service</ProjectItemH1>
                        <ProjectDomain href="https://vathapp.netlify.app" target="_blank">vathapp.netlify.app</ProjectDomain>
                        <ProjectContent>
                        We are here to rescue you. By using our shipping service, your goods will arrive in less than a day.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ViteJS, TypeScript, SASS, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://vathapp.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
            </Fade>
            <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>snax - The Better Sneakers Place</ProjectItemH1>
                        <ProjectDomain href="https://snaxstore.netlify.app" target="_blank">snaxstore.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Get The Better Sneakers & Shoes with worldwide shipping in Snax Online Store.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>React, Redux, Axios, Bootstrap</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://snaxstore.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>   
            </Fade>
            <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>realcovid - COVID-19 Tracker</ProjectItemH1>
                        <ProjectDomain href="https://realcovid.netlify.app" target="_blank">realcovid.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Provides up-to-date information on the latest COVID-19 cases, deaths and etc.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, SASS, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://realcovid.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
            </Fade>
            <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <ProjectItem>
                        <ProjectItemH1>namest. - random name generator</ProjectItemH1>
                        <ProjectDomain href="https://namest.netlify.app" target="_blank">namest.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Get Random Person Information fast ( name, surname, country, age, email ).
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, SASS, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://namest.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
            </Fade>
                </ProjectsContainer>
        </ProjectsLayout>
    )
}