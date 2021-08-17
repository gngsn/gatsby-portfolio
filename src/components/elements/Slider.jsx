import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

const _Slider = ({ images, toShow = 5 }) => {
    const screenSettings = {
        infinite: false,
        slidesToShow: toShow,
        slidesToScroll: toShow
    }

    return (
        <Slider {...screenSettings} className="slick-auto">
            {
                images.map(image => (
                    <ImageContainer key={image}>
                        <img src={image} alt='storyboard' />
                    </ImageContainer>
                ))
            }
        </Slider>
    )
};

const ImageContainer = styled.div`
    padding: 20px 5px;
    img {
        box-shadow: 0px 0px 12px 10px rgba(192, 192, 192, 0.192);
        cursor: pointer;
    }
`;


export default _Slider;
