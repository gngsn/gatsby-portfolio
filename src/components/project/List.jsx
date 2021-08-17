import React, { useState } from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';
import { section1, section2, section3 } from '../../projectList';
import styled from 'styled-components';

const ImageStyle = styled.div`
        background-image: ${props => 'url(' + props.image + ')'};
        background-position: center center;
        background-size: cover;
        display: inline-block;
        overflow: hidden;
        border-radius: 10px;
`;

const List = React.memo(({ cate, toggleFullScreen }) => {
    const [isSwiping, setSwiping] = useState(false);
    const settings = {
        // centerPadding: '70px',
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        dotsClass: 'dots',
        infinite: false,
        // responsive: [{
        //     breakpoint: 1200,
        //     settings: {
        //         arrows: true,
        //         // centerPadding: '40px',
        //         slidesToShow: 3,
        //     }
        // }, {
        //     breakpoint: 900,
        //     settings: {
        //         arrows: false,
        //         // centerPadding: '60px',
        //         slidesToShow: 1,
        //     }
        // },
        // {
        //     breakpoint: 768,
        //     settings: {
        //         arrows: false,
        //         // centerPadding: '70px',
        //         slidesToShow: 1,
        //     }
        // },
        // {
        //     breakpoint: 425,
        //     settings: {
        //         arrows: false,
        //         // centerPadding: '0px',
        //         slidesToShow: 1,
        //     }
        // }
        // ]
    };


    let project = []
    if (cate === 'backend') {
        project = section1
        settings.centerMode = false
    } else if (cate === 'developer') {
        project = section2
        settings.centerMode = false
    } else {
        project = section3
        settings.centerMode = false
    }
    const subClass = cate + ' center'

    const hover = e => {
        e.target.parentElement.style.boxShadow = '2px 8px 19px 4px rgb(134,134,134)'
    }
    const overHover = e => {
        e.target.parentElement.style.boxShadow = 'none';
    }

    const click = (data) => {
        // if (!isSwiping)
        toggleFullScreen(data);
    }

    return (
        <div className={subClass}>
            <Slider {...settings}>
                {
                    project.map(data => (
                        <ImageStyle key={data.key} image={data.thumbnail} onClick={() => click(data)} onMouseMove={() => setSwiping(true)} onMouseDown={() => setSwiping(false)} onMouseOver={hover} onMouseLeave={overHover} className="link proj" data-link={data.link}>
                            {/* <Link to={`/project/${data.link}`}> */}
                            <div className="proj-title">
                                    <h2>{data.duration}</h2>
                                    <h1>{data.title}</h1>
                                    {/* {data.subTitle.map((tit, index) => (
                                        <h3 key={index}>{tit} <br /></h3>
                                    ))} */}
                                </div>
                            {/* </Link> */}
                        </ImageStyle>
                    ))
                }
            </Slider>
        </div>
    );
}, (prev, next) => {
    return (
        prev.cate === next.cate
    );
});

export default List;
