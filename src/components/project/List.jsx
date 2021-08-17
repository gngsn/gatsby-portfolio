import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


const List = ({ cate, toggleFullScreen, project }) => {


    // const edges = data?.allMdx?.edges;
    // console.log('edges : ', edges)
    // const projectList = edges.filter(node => project.includes(node.slug));
    const projectList = [];
    // console.log('projectList : ', projectList)

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        dotsClass: 'dots',
        infinite: false,
        centerMode: false
    };

    // let project = []
    // if (cate === 'backend') {
    //     project = section1
    // } else if (cate === 'developer') {
    //     project = section2
    // } else {
    //     project = section3
    // }
    const subClass = 'center'

    const hover = e => {
        e.target.parentElement.style.boxShadow = '2px 8px 19px 4px rgb(134,134,134)'
    }
    const overHover = e => {
        e.target.parentElement.style.boxShadow = 'none';
    }

    const click = (data) => {
        toggleFullScreen(data);
    }

    return (
        <div className={subClass}>
            <Slider {...settings}>
                {
                    projectList.map(data => (
                        <ImageStyle key={data.key} image={data.thumbnail} onClick={() => click(data)} onMouseOver={hover} onMouseLeave={overHover} className="link proj" data-link={data.link}>
                            <div className="proj-title">
                                <h2>{data.duration}</h2>
                                <h1>{data.title}</h1>
                            </div>
                        </ImageStyle>
                    ))
                }
            </Slider>
        </div>
    );
};




const ImageStyle = styled.div`
        background-image: ${props => 'url(' + props.image + ')'};
        background-position: center center;
        background-size: cover;
        display: inline-block;
        overflow: hidden;
        border-radius: 10px;
`;

export default List;
