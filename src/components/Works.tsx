import styled from "styled-components";
import React, { memo } from 'react';
import { Fade } from "react-awesome-reveal";
import worksData from '../database/works.json';


const WorksLayout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: max-content;
    padding: 10vh 10%;
    margin-top: 1vh;
    margin-bottom: 4vh;

    @media only screen and (max-width: 768px) {
        padding: 0px 2%;
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
    font-size: calc(10px + 6.4vmin);
}
`
const WorksContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const WorksItem = styled.div `
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0, 0.5);
    padding: 20px;
    width: 320px;
    height: 230px;
    margin: 6px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media only screen and (max-width: 768px)  {
        width: 350px;
    height: 240px;
    }
`
const WorksButton = styled.a `
    text-decoration: none;
    padding: 17px 23px;
    background: var(--var-color-component-white);
    color: var(--var-color-component-black);
    font-weight: bold;
    margin-top: 30px;
    width: 100%;
    border-radius: 8px;
    transition: all 0.4s ease-out;
    font-size: 20px;
    filter: drop-shadow(0 0 0.1rem var(--var-color-component-white));

    &:hover {
    transition: all 0.4s ease-out;
    filter: drop-shadow(0 0 0.60rem var(--var-color-component-white));
    }

    @media only screen and (max-width: 768px) {
        cursor: none;
    }
`
const WorksH1 = styled.h1 `
    color: var(--var-color-component-white);
    font-weight: bold;
    height: 87px;
    font-family: 'Clash Grotesk', sans-serif;
    `

 interface WorkItem {
  WorksH1: string;
  WorksButton: {
    href: string;
    target: string;
  };
}

const Works = memo(() => {
    const works: WorkItem[] = worksData;
  
    return (
      <WorksLayout id="works">
        <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
          <FirstContent>Noteworthy Works</FirstContent>
        </Fade>
        <WorksContainer>
          {works.map((work, index) => (
            <Fade key={index} delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
              <WorksItem>
                <WorksH1>{work.WorksH1}</WorksH1>
                <WorksButton href={work.WorksButton.href} target={work.WorksButton.target}>Visit Project</WorksButton>
              </WorksItem>
            </Fade>
          ))}
        </WorksContainer>
      </WorksLayout>
    );
  })

  export default Works;
