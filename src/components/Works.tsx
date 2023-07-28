import styled from "styled-components";
import { Fade } from "react-awesome-reveal";


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
const EmptyContent = styled.br `
    user-select: none;
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

const Works = () => {
    return(
        <WorksLayout id="works">
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
             <FirstContent>Noteworthy Works</FirstContent>
             </Fade>
            <WorksContainer>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <WorksItem>
                    <WorksH1>ETH searcher</WorksH1>
                    <WorksButton href="https://ethsearcher.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                   <WorksItem>
                    <WorksH1>Taycan E-commerce</WorksH1>
                    <WorksButton href="http://taycan.netlify.app/" target="_blank">Visit Project</WorksButton>
                 </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                 <WorksItem>
                    <WorksH1>World Cup Searcher</WorksH1>
                    <WorksButton href="https://cupsearch.netlify.app" target="_blank">Visit Project</WorksButton>
                 </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>URL Shortener</WorksH1>
                    <WorksButton href="https://rmznurl.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Translator</WorksH1>
                    <WorksButton href="https://rmznlang.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
            <WorksItem>
                    <WorksH1>Smart Contract</WorksH1>
                    <WorksButton href="https://stoken.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Digital Consultancy</WorksH1>
                    <WorksButton href="http://digitalcons.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Sign Form</WorksH1>
                    <WorksButton href="https://rmznform.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Infinite Gallery</WorksH1>
                    <WorksButton href="https://infinitygallery.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Advanced Navbar</WorksH1>
                    <WorksButton href="https://perfectnav.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Truth or Dare</WorksH1>
                    <WorksButton href="https://dogru.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Password Generator</WorksH1>
                    <WorksButton href="https://rmznpass.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Crypto Price Track</WorksH1>
                    <WorksButton href="https://coinpricetrack.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Quote Generator</WorksH1>
                    <WorksButton href="https://quotepe.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Quiz App</WorksH1>
                    <WorksButton href="https://rmznquiz.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Calculator App</WorksH1>
                    <WorksButton href="https://rmzncalc.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Music Player</WorksH1>
                    <WorksButton href="https://mscplyr.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>To Do App</WorksH1>
                    <WorksButton href="https://rmzntodo.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Country Info</WorksH1>
                    <WorksButton href="http://reginfo.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Pricing Cards</WorksH1>
                    <WorksButton href="https://plans-card.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Meme Tool</WorksH1>
                    <WorksButton href="https://memegenapp.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Cars Marketplace</WorksH1>
                    <WorksButton href="https://zastcars.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>CDN Network</WorksH1>
                    <WorksButton href="https://cdnverse.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Junior Portfolio Template</WorksH1>
                    <WorksButton href="https://cdnverse.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>E-commerce Template</WorksH1>
                    <WorksButton href="https://exowear.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Beautiful Carousel</WorksH1>
                    <WorksButton href="https://landsense.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Collapse</WorksH1>
                    <WorksButton href="https://rmzncollapse.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Backend Template</WorksH1>
                    <WorksButton href="https://jamesrobert.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Awesome Landing Page</WorksH1>
                    <WorksButton href="https://devolve.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
             <Fade delay={150} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <WorksItem>
                    <WorksH1>Virtual  Keyboard</WorksH1>
                    <WorksButton href="https://vrkey.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
             </Fade>
            </WorksContainer>
        </WorksLayout>
    )
}
export default Works;