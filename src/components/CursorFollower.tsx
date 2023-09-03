import React, { useRef, useEffect, memo } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

interface CursorFollowerProps {
  size: number;
  color: string;
}

const CursorFollower: React.FC<CursorFollowerProps> = memo(({ size, color }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: 1,
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
        filter: 'filter: drop-shadow(0 0 0.75rem var(--var-color-component-white));',
        backgroundColor: color,
        border: '2px solid var(--var-color-component-white)',
        pointerEvents: 'none',
        zIndex: 9999,
        animation: 'CursorAnim 5s ease 0s infinite normal forwards'
      }}
    ></CursorFollower>
  );
})

export default CursorFollower;
CursorFollower.displayName = 'CursorFollower';