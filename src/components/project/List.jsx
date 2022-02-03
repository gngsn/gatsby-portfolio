import React from 'react';
import styled from 'styled-components';

const List = React.memo(({ setShortcut, project, show=5, scroll=5, autoplay = false, autoplaySpeed=2000}) => {

    return (
        <Block>
            {
                project.map(data => {
                    return (
                    <ImageStyle key={data.id} image={data.thumbnail} onClick={() => setShortcut(data)} data-link={data.link}>
                        <div>
                            <h1>{data.title}</h1>
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
    align-items: center; justify-content: space-between;
    max-width: 900px; width: 100%; margin: 0 auto;
    padding: 0 20px;
`;
const ImageStyle = styled.div`
    background-image: ${props => 'url(' + props.image + ')'};
    background-position: center center; background-size: cover;
    width: 250px;
    height: 150px;
    margin: 10px; padding: 20px;
    display: flex;
    align-items: center; justify-content: center;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    div {box-shadow: none; z-index: 0;}
    h1 {font-size: 1.5rem;}
    p {font-size: .8rem;}
    box-shadow: none;
    &:hover {
        box-shadow: 2px 8px 19px 4px rgb(134,134,134);
    }
`;

export default List;
