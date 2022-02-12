import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const handleLinkHoverEvents = () => {
        document.querySelectorAll(".link").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };
    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered,
        }
    );

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return <Block>
    <div className={cursorClasses}
        style={
            {
                left: `${position.x}px`,
                top: `${position.y}px`
            }
        } />
    </Block> 
}

const Block = styled.div`
pointer-events: none;

@keyframes circle {
  to {
    transform:translate(-50%, -50%) scale(1.4);
  }
}

    .cursor {
        width: 35px;
        height: 35px;
        border: 1px solid ${palette.primary};
        border-radius: 100%;
        position: fixed;
        transform: translate(-50%, -50%);
        z-index: 11;
        cursor: none;
        transition: all 150ms ease;
        transition-property: opacity, background-color, transform, mix-blend-mode;
    }

    .cursor--link-hovered {
        animation: circle .6s infinite alternate;
    }

    .cursor--clicked {
        transform: translate(-50%, -50%) scale(0.8);
        background-color: ${palette.primary};
    }

    .cursor--hidden {
        opacity: 0;
    }

`;

export default Cursor;