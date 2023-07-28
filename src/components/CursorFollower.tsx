import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

interface CursorFollowerProps {
  size: number;
  color: string;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ size, color }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: 0.7,
        ease: 'power3.out',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);


  const CursorFollower = styled.div `
    opacity: 1;

    @media only screen and (max-width: 800px) {
      display: none;
    }
  `

  return (
    <CursorFollower
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        backdropFilter: 'invert(1) blur(3px)',
        border: '2px solid var(--var-color-component-white)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    ></CursorFollower>
  );
};

export default CursorFollower;
