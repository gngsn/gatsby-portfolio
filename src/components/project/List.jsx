import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const List = React.memo(({ setShortcut, project, show=5, scroll=5, autoplay = false, autoplaySpeed=2000}) => {
    const settings = {
        slidesToShow: show,
        slidesToScroll: scroll,
        dots: true,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        dotsClass: 'dots',
        infinite: autoplay,
        centerMode: false
    };

    const hover = e => {
        e.target.parentElement.style.boxShadow = '2px 8px 19px 4px rgb(134,134,134)'
    }
    const overHover = e => {
        e.target.parentElement.style.boxShadow = 'none';
    }

    return (
        <div className='center'>
            <Slider {...settings}>
                {
                    project.map(data => {
                        return (
                            <ImageStyle key={data.id} image={data.thumbnail} onClick={() => setShortcut(data)} onMouseOver={hover} onMouseLeave={overHover} className="link proj" data-link={data.link}>
                            <div className="proj-title">
                                <h2>{data.duration}</h2>
                                <h1>{data.title}</h1>
                                <p>{data.subTitle}</p>
                            </div>
                        </ImageStyle>);
                    })
                }
            </Slider>
        </div>
    );
}, (prev, next) => true);

const ImageStyle = styled.div`
        background-image: ${props => 'url(' + props.image + ')'};
        background-position: center center;
        background-size: cover;
        display: inline-block;
        overflow: hidden;
        border-radius: 10px;
`;

export default List;
