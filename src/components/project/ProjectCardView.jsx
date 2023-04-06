import React from 'react';
import styled from 'styled-components';

import { device } from '../../lib/styles/sizes';

const ProjectCardView = React.memo(({ handleClick, project }) => {

    return (
        <Block>
            {
                project.map(data => {
                    return (
                        <ImageStyle key={data.id} image={data.thumbnail} className='link' onClick={() => handleClick(data)} data-link={data.link}>
                        <div>
                            <h1>{data.title}</h1>
                            <p>{data.duration}</p>
                            <p>{data.subTitle}</p>
                        </div>
                    </ImageStyle>);
                })
            }
        </Block>
    );
});

const Block = styled.div`
    display: flex; flex-wrap: wrap;
    align-items: center; justify-content: space-around;
    max-width: 1000px; 
    width: 100%; margin: 0 auto;
    padding: 0 20px;
`;
const ImageStyle = styled.div`
    ${({ image }) => image ? 'background-image: url(' + image + ')' : 'background-color: black'};
    background-position: center center; background-size: cover;
    flex-basis: ${({ flexBasis = '30%' }) => flexBasis};
    width: 100%;
    height: 200px;
    margin: 10px auto 10px 0;
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

    ${device.tablet} {
        flex-basis: 45%;
    }
    ${device.mobile} {
        flex-basis: 100%;
    }
`;

export default ProjectCardView;
