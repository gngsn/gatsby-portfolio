import React, { useRef } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

const RdfSlider = ({images, isDots = false, toShow = 4}) => {
    const storyboardRef = useRef();

    const navSettings = {
        slidesToShow: toShow,
        slidesToScroll: toShow,
        dots: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: toShow - 1,
                dots: isDots
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: toShow - 2,
                dots: isDots
            }
        }]
    }

    const handleSlide = e => {
        if (e.target.src)
            storyboardRef.current.src = e.target.src;
    }

    return (
        <div>
            <MainImage ref={storyboardRef} src={images[0]} alt='storyboard' />
            <div className="g-cnt">
                <div id="pdf-nav" className="slider pdf-nav"> </div>
                <Slider {...navSettings} className="slider pdf-nav">
                    {
                        images.map(pdfImg => (
                            <ImageContainer key={pdfImg}>
                                <img src={pdfImg} onClick={handleSlide} alt='storyboard' />
                            </ImageContainer>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
};

const MainImage = styled.img`
    box-shadow: 0px 0px 12px 10px rgba(192, 192, 192, 0.192);
    margin-bottom: 40px;
`;
const ImageContainer = styled.div`
    padding: 20px 5px;
    img {
        box-shadow: 0px 0px 12px 10px rgba(192, 192, 192, 0.192);
        cursor: pointer;
    }
`;

export default RdfSlider;
