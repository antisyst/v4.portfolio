import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useRef } from 'react';
import { FiLinkedin, FiInstagram, FiGithub, FiPlay } from 'react-icons/fi'

const StyledContainer = styled.div `
width: 40px;
position: fixed;
bottom: 0px;
left: auto;
right: 40px;
z-index: 10;
@media (max-width: 800px) {
 display: none;
  }
`
const StyledItems = styled.ul `
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    
    &::after {
        content: "";
        display: block;
        width: 1.3px;
        height: 130px;
        margin: 0px auto;
        background: #fff;
    }
`
const StyledItem = styled.a `
    display: inline-block;
    text-decoration: none;
    font-size: 32px;
    transition: all 0.2s ease-out;
    text-decoration-skip-ink: auto;
    color: #fff;
    position: relative;
`
const StyledButton = styled.button `
display: inline-block;
text-decoration: none;
font-size: 32px;
background: none;
border: none;
transition: all 0.2s ease-out;
text-decoration-skip-ink: auto;
color: #fff;
position: relative;
`
const FixedLiElement = styled.li  `
    margin: 7px 0;
`

interface MusicPlayerProps {
    musicUrl: string;
  }

export default function FixedElements() {

    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayMusic = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };
    const musicUrl = 'https://audio.jukehost.co.uk/VXEku0rDajT7KltCaY5XgVqYGg6EGRxS';
    
    return(
        <StyledContainer>
            <StyledItems>
            <Fade delay={4200} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledButton onClick={handlePlayMusic} className='animate__animated animate__fadeInUp'>
                   <audio ref={audioRef} src={musicUrl} />
                        <FiPlay/>
                   </StyledButton>
                </FixedLiElement>
            </Fade>
            <Fade delay={4400} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledItem href='https://www.instagram.com/rmzn.dev/' className='animate__animated animate__fadeInUp' target='_blank'>
                        <FiInstagram/>
                   </StyledItem>
                </FixedLiElement>
            </Fade>
            <Fade delay={4600} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledItem href='https://www.linkedin.com/in/ramazan-azimli-135475245/' className='animate__animated animate__fadeInUp' target='_blank'>
                        <FiLinkedin/>
                   </StyledItem>
                </FixedLiElement>
            </Fade>
            <Fade delay={4800} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledItem href='https://github.com/antisyst' className='animate__animated animate__fadeInUp' target='_blank'>
                        <FiGithub/>
                   </StyledItem>
                </FixedLiElement>
            </Fade>
            </StyledItems>
        </StyledContainer>
    )
}
