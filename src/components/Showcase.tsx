import styled from "styled-components";
import { TbBrandReact } from 'react-icons/tb';
import { Fade } from "react-awesome-reveal";


const ShowcaseLayout = styled.div `
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    padding: 0px 10%;
    margin-bottom: 4vh;

    @media only screen and (max-width: 768px) {
        padding: 0px 6%;
    }

`;
const ShowcaseH1 = styled.h1 `
    font-weight: bold;
    font-family: 'Clash Grotesk', sans-serif;
    font-size: calc(10px + 10vmin);
    color: var(--var-color-component-white);

    @media only screen and (max-width: 768px) {
    font-size: calc(10px + 11vmin);
    }
`
const ShowcaseH2 = styled.h2 `
    font-weight: bold;
    font-family: 'General Sans', sans-serif;
    font-size: calc(10px + 7.5vmin);
    color: var(--var-color-component-white);

    b {
    color: var(--var-color-component-primary);
    font-size: 26px;
    padding-top: 10px;

    svg {
      margin-top: 6px;
    animation: rotation 7s infinite linear;

    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
    }
    }
    @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 8.2vmin);
        }
`
const ShowcaseH3 = styled.h3 `
    font-weight: bold;
    font-family: 'General Sans', sans-serif;
    font-size: calc(10px + 4vmin);
    color: var(--var-color-component-white);
    padding-right: 4%;
    margin-top: 15px;

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 5vmin);
        }
`
const ShowcaseSpan = styled.span  `
    font-weight: bold;
    font-family: 'Clash Grotesk', sans-serif;
    font-size: calc(10px + 3vmin);
    color: var(--var-color-component-primary);

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 4vmin);
        }

        span {
            font-weight: bold;
            font-family: 'Clash Grotesk', sans-serif;
            font-size: calc(10px + 3vmin);
            color: var(--var-color-component-primary);
        
            @media only screen and (max-width: 768px) {
                font-size: calc(10px + 4vmin);
                }
        }
`
const ShowcaseH2Span = styled.span `
    font-weight: bold;
    filter: drop-shadow(0 0 0.9rem var(--var-color-component-primary));
    font-family: 'Clash Grotesk', sans-serif;
    font-size: calc(10px + 8.5vmin);
    animation: UIFrame 6s ease 0s infinite normal forwards;
    font-weight: bold;
    color: var(--var-color-component-primary);

    @keyframes UIFrame {
      0%,
      50%,
      100% {
        filter: drop-shadow(0 0 0.9rem var(--var-color-component-primary));
      }
    
      25%,
      75% {
        filter: drop-shadow(0 0 0.2rem var(--var-color-component-primary));
      }
    }
`
const SymbolReact = styled.b `
    vertical-align: bottom;

    svg {
    vertical-align: bottom;
    font-size: 10px;
    }
`

const EmptyContent = styled.br `
user-select: none;
`
export default function Showcase() {

   

    return(
       <ShowcaseLayout>
        <EmptyContent/>
        <EmptyContent/>
        <Fade delay={4100} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
        <ShowcaseSpan className="animate__animated animate__fadeIn textFrame"><span>Hi</span>, <span>my</span> <span>name</span> <span>is</span></ShowcaseSpan>
        </Fade>
        <Fade delay={4400} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
        <ShowcaseH1 className="animate__animated animate__fadeIn">Ramazan Azimli</ShowcaseH1>
        </Fade>
        <Fade delay={4800} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
        <ShowcaseH2 className="animate__animated animate__fadeIn">I'm Frontend <ShowcaseH2Span>UI</ShowcaseH2Span> Developer<b><TbBrandReact/></b></ShowcaseH2>
        </Fade>
        <Fade delay={5100} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
        <ShowcaseH3 className="animate__animated animate__fadeIn">Crafting Engaging User Experiences with Creative Design & Advanced Technology.</ShowcaseH3>
        </Fade>
       </ShowcaseLayout>
    )
}