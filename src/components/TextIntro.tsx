import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { memo } from 'react';

const TextIntroPackage = styled.div `
    position: fixed;
    top: 40vh;
    display: flex;
    z-index: 100000;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 35%;
    animation: VisiblityFrame 6s ease 0s 1 normal forwards;
    transition: all 0.3s ease-out;
    width: 450px;
    filter: drop-shadow(0 0 0.3rem var(--var-color-component-primary));
    border-radius: 8px;
    animation: FilterCaptionFrame 4s ease 0s infinite normal forwards;
    height: 106px;
    backdrop-filter: blur(5px);
    background: rgba(0,0,0, 0.9);
    color: var(--var-color-component-white);

    @media only screen and (max-width: 800px) {
      left: 3%;
      width: 94%;
    }


    @keyframes VisiblityFrame {
     0, 90% {
      visiblity: inherit;
     }
     100% {
      visiblity: hidden;
     }
    }

    @keyframes FilterCaptionFrame {
      0%,
      50%,
      100% {
        filter: drop-shadow(0 0 0.3rem var(--var-color-component-primary));
      }
    
      25%,
      75% {
        filter: drop-shadow(0 0 0.6rem var(--var-color-component-primary));
      }
    }

    ::before {
      position: absolute;
      content: "";
      width: 80px;
      height: 80px;
      z-index: -2;
      top: 5%;
      border-radius: 50%;
      filter: blur(40px);
      left: 5%;
      background: var(--var-color-component-primary);
    }

    p {
      font-size: 19px;
      vertical-align: middle;
      animation: fadeIn; 
      z-index: 100000;
      animation-duration: 5s;

      @media only screen and (max-width: 800px) {
        font-size: 17px;
      }

      span {
        margin-top: 11px;
        font-size: 30px;
        vertical-align: sub;
        filter: drop-shadow(0 0 0.9rem var(--var-color-component-primary));
        margin-left: 6px;

        @media only screen and (max-width: 800px) {
        font-size: 39px;
        }
      }
    }
   
`




interface TextComponentProps {
  text: string;
}

const TextComponent: React.FC<TextComponentProps> = memo(({ text }) => {
  return (
    <TextIntroPackage>
      <p className="animate__animated animate__fadeInDown animate__fadeOutDown">
        {text}
      </p>
    </TextIntroPackage>
  );
})

export async function getServerSideProps() {
  const text = "your story isn't over yet, stay strong ♞";

  return {
    props: {
      text,
    },
  };
}

export default TextComponent;

