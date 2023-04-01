import React, { useState } from 'react';
import styled from 'styled-components';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handler = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });
        e.preventDefault();
    };

    return {
        x: position.x,
        y: position.y,
        handler,
    };
};

function CursorSpotlight({ className = '', spotlightStyle }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { width, height, radius, backgroundColor } = spotlightStyle;
    // const { x, y, handler } = useMousePosition();

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <Cursor>
        <div className='cursor' 
            onMouseMove={onMouseMove}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}>
            {/* {children} */}
            <div className='noise' />
            <div className='view' >
                <div className='circle' />
            </div>
        </div>
        </Cursor>
    );
}

const Cursor = styled.div`

    .cursor {
        animation: glow 1s linear forwards;
        width: 30vw;
        height: 30vw;
        transform: translateX(-50%) translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 12;
        user-select: none;
        opacity: 0;
    }

    .noise {
        position: absolute;
        position: unset;
        top: unset;
        left: unset;
        transform: unset;
        width: 120%;
        height: 120%;
        background: radial-gradient(circle at 50% 50%, black, rgba(0, 0, 0, 0)), url(noise.svg);
        filter: contrast(125%) brightness(500%) invert(100%) grayscale(100%);
        mix-blend-mode: exclusion;
    }

  .view {
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: white;

    box-shadow: 0 0 1rem 2rem white;
  }

  .circle {
    width: 40%;
    height: 40%;
  }
  `;

export default CursorSpotlight;