import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useRef } from 'react';;
import TextComponent from "./TextIntro";
import { FiLinkedin, FiInstagram, FiGithub, FiPlay, FiPause } from 'react-icons/fi';
import { memo } from "react";

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

    &:hover {
        color: var(--var-color-component-primary);
    }
`
const StyledButton = styled.button `
display: inline-block;
text-decoration: none;
border: 1.5px solid var(--var-color-component-primary);
font-size: 33px;
background: none;
transition: all 0.3s ease-out;
border: none;
transition: all 0.2s ease-out;
text-decoration-skip-ink: auto;
color: #fff;
position: relative;

&:hover {
    color: var(--var-color-component-primary);
}
`
const FixedLiElement = styled.li  `
    margin: 7px 0;
`

interface MusicPlayerProps {
    musicUrl: string;
  }

const FixedElements = memo(() => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showText, setShowText] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlay = () => {
        if (audioRef.current && !isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
            setShowText(true);

            setTimeout(() => {
                setShowText(false);
            }, 6000);
        }
    };

    const handlePause = () => {
        if (audioRef.current && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            setShowText(false);
        }
    };


  const musicUrl = 'https://audio.jukehost.co.uk/WYgt9T553yqGssKzALcsXfKgxdbXZwx8';

    
    return(
        <StyledContainer>
             {showText && <TextComponent text="your story isn't over yet, stay strong ♞"/>}
            <StyledItems>
            <Fade delay={4200} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledButton onClick={isPlaying ? handlePause : handlePlay} className='animate__animated animate__fadeInUp'>
                   <audio ref={audioRef} src={musicUrl} />
                   {isPlaying ? <FiPause /> : <FiPlay />}
                   </StyledButton>
                </FixedLiElement>
            </Fade>
            <Fade delay={4400} triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledItem href='https://www.instagram.com/rmznzz/' className='animate__animated animate__fadeInUp' target='_blank'>
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
});

export default FixedElements;