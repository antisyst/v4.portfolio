import styled from "styled-components";
import React, { memo } from 'react';
import { SiReact, SiNextdotjs, SiRedux, SiVitest, SiJquery, SiTailwindcss, SiAxios, SiJavascript, SiGit, SiBootstrap, SiJest, SiWebpack, SiBabel, SiHtml5, SiCss3, SiMui, SiStyledcomponents } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { DiSass, DiNpm } from 'react-icons/di';
import { TbBrandFramerMotion } from 'react-icons/tb';
import TypeScriptLogo from "@/utils/typescript";
import { Fade } from "react-awesome-reveal";



const AboutLayout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: max-content;
    padding: 10vh 10%;
    margin-top: 1vh;

    @media only screen and (max-width: 768px) {
        padding: 0px 2%;
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
        font-size: calc(10px + 8vmin);
    }
`
const EmptyContent = styled.br `
user-select: none;
`

const AboutContent = styled.p `
   font-family: 'General Sans', sans-serif;
   font-weight: bold;
    padding: 6px 4%;
    line-height: 3.5rem;
    color: var(--var-color-component-white);
    font-size: calc(10px + 2.3vmin);
    margin-bottom: 3vh;
    @media only screen and (max-width: 768px) {
        line-height: 2rem;
    font-size: calc(10px + 2.6vmin);
    
    }
`
const BestSkillsContainer = styled.div `
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
`
const SelectedSkillsItem = styled.div `
    display: flex;
    flex-direction: row;
    background:  rgb(0, 0, 0, 0.2);
    align-items: center;
    width: 280px;
    height: 90px;
    border: 1.5px solid var(--var-color-component-primary);
    justify-content: flex-start;
    padding-left: 30px;
    transition: all 0.4s ease-out;
    margin: 7px;
    border-radius: 16px;

    svg {
        font-size: 50px;
        width: 50px;
        vertical-align: middle;
        color: var(--var-color-component-primary);
        transition: all 0.3s ease-out;
    }

    &:hover {
     transition: all 0.4s ease-out;
    }
`
const BestSkillsItem = styled.div `
    display: flex;
    flex-direction: row;
    background:  rgb(0, 0, 0, 0.3);
    align-items: center;
    width: 280px;
    height: 90px;
    border: 1.5px solid rgb(0, 0, 0, 0);
    justify-content: flex-start;
    padding-left: 30px;
    transition: all 0.4s ease-out;
    margin: 7px;
    border-radius: 16px;

    svg {
        animation: UIFrame 6s ease 0s infinite normal forwards;
        font-size: 50px;
        width: 50px;
        vertical-align: middle;
        color: var(--var-color-component-primary);


        @keyframes UIFrame {
            0%,
            50%,
            100% {
              filter: drop-shadow(0 0 0.4rem var(--var-color-component-primary)) brightness(0.9);
            }
          
            25%,
            75% {
              filter: drop-shadow(0 0 0.2rem var(--var-color-component-primary)) brightness(1.1233);
            }
          }
    }

    &:hover {
        border: 1.5px solid var(--var-color-component-primary);
    transition: all 0.4s ease-out;
    }
`
const BestSkillsContent = styled.h1 `
    color: var(--var-color-component-white);
    font-weight: bold;
    font-size: 26px;
    margin-left: 15px;
`

    

const About = memo(() => {
    return(
        <AboutLayout id="about">
               <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                  <FirstContent>About Me</FirstContent>
               </Fade>
               <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <AboutContent> I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. I'am a passionate Frontend Developer in building visually appealing and user-friendly websites. I have a strong understanding of modern Front End development technologies and frameworks. I have a keen eye for design and a solid understanding of user experience principles. I have worked on various projects, from small-scale websites to large-scale enterprise projects. I'am a skilled communicator who excels at collaborating with designers, developers, and project managers to ensure that projects are delivered on time and within budget. I'am always looking for new challenges and opportunities to improve My skills and knowledge in the field of web development.
            </AboutContent>
            </Fade>
                <BestSkillsContainer>
                     <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiHtml5/>
                        <BestSkillsContent>HTML</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiCss3/>
                        <BestSkillsContent>CSS</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <FaVuejs/>
                        <BestSkillsContent>Vue</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiJavascript/>
                        <BestSkillsContent>JavaScript</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <SelectedSkillsItem>
                        <SiReact/>
                        <BestSkillsContent>ReactJS</BestSkillsContent>
                    </SelectedSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <SelectedSkillsItem>
                        <SiNextdotjs/>
                        <BestSkillsContent>NextJS</BestSkillsContent>
                    </SelectedSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <SelectedSkillsItem>
                        <TypeScriptLogo/>
                        <BestSkillsContent>TypeScript</BestSkillsContent>
                    </SelectedSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <SelectedSkillsItem>
                        <SiRedux/>
                        <BestSkillsContent>Redux</BestSkillsContent>
                    </SelectedSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <SelectedSkillsItem>
                        <DiSass/>
                        <BestSkillsContent>SASS</BestSkillsContent>
                    </SelectedSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiVitest/>
                        <BestSkillsContent>ViteJS</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiStyledcomponents/>
                        <BestSkillsContent>Styled C.</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <DiNpm/>
                        <BestSkillsContent>NPM</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <SelectedSkillsItem>
                        <SiWebpack/>
                        <BestSkillsContent>Webpack</BestSkillsContent>
                    </SelectedSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiJquery/>
                        <BestSkillsContent>jQuery</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiTailwindcss/>
                        <BestSkillsContent>Tailwind</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiMui/>
                        <BestSkillsContent>MaterialUI</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiBootstrap/>
                        <BestSkillsContent>Bootstrap</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <SelectedSkillsItem>
                        <SiAxios/>
                        <BestSkillsContent>Axios</BestSkillsContent>
                    </SelectedSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiGit/>
                        <BestSkillsContent>Git</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <SiBabel/>
                        <BestSkillsContent>BabelJS</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <SelectedSkillsItem>
                        <SiJest/>
                        <BestSkillsContent>Jest</BestSkillsContent>
                    </SelectedSkillsItem>
                    </Fade>
                    <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                    <BestSkillsItem>
                        <TbBrandFramerMotion/>
                        <BestSkillsContent>Motion</BestSkillsContent>
                    </BestSkillsItem>
                    </Fade>
                </BestSkillsContainer>

        </AboutLayout>
    )
})
export default About;
About.displayName = 'About';