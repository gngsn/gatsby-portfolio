import React from 'react';
import styled from 'styled-components';

import { device } from '../../lib/styles/sizes';

const ProjectCardView = React.memo(({ handleClick, projects }) => {

    return (
        <Block>
            {
                projects.map(p => {
                    return (
                        <ImageStyle key={p.link} image={p.thumbnail} className='link' onClick={() => handleClick(p)} data-link={p.link}>
                        <div>
                            <h1>{p.title}</h1>
                            <p>{p.duration}</p>
                            <p>{p.subTitle.join(' ')}</p>
                        </div>
                    </ImageStyle>);
                })
            }
        </Block>
    );
});

const Block = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center; justify-content: space-around;
    max-width: 1000px; 
    width: 100%; margin: 0 auto;
    padding: 0 20px;

    ${device.tablet} {
        grid-template-columns: 1fr 1fr;
    }
    ${device.mobile} {
        grid-template-columns: 1fr;
    }
`;

const ImageStyle = styled.div`
    ${({ image }) => image ? 'background-image: url(' + image + ')' : 'background-color: black'};
    background-position: center center; 
    background-size: cover;
    flex-basis: ${({ flexBasis = '30%' }) => flexBasis};
    width: 100%;
    height: 200px;
    padding: 20px;
    display: flex;
    align-items: center; justify-content: center;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    box-shadow: none;
    
    div {box-shadow: none; z-index: 0;}
    h1 {font-size: 1.5rem;}
    p {font-size: .8rem;}
    &:hover {
        box-shadow: 2px 8px 19px 4px rgb(134,134,134);
    }
`;

export default ProjectCardView;
