import React from 'react';
import setImage from './setImage';
import Slider from 'react-slick';

const Detail = () => {
    let soptImages = [];
    let soptSeminarImages = [];
    let mtImages = [];
    let pixelImages = [];
    let introImages = [];
    let contImages = [];
    setImage(soptImages, '/img/cardnews/sopt-team-', 9);
    setImage(soptSeminarImages, '/img/cardnews/SOPT_CN_', 15);
    setImage(mtImages, '/img/cardnews/MT_', 9, 'jpg');
    setImage(pixelImages, '/img/cardnews/pixel_', 8, 'jpg');
    setImage(introImages, '/img/cardnews/maddy_intro_', 9, 'jpg');
    setImage(contImages, '/img/cardnews/maddy_cont_', 7, 'jpg');

    const screenSettings = {
        // centerPadding: '70px',
        // dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        // infinite: true,
        // autoplay: true,
        // speed: 2000,
        // dotsClass: 'dots',
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    }

    return (
        <div className="cardnews">
            <div className="section1">
                <h5 className="quot-title"> #SOPT CARDNEWS </h5>
                <p> IT 창업 동아리 SOPT에서 운영팀에 지원하기 위해 자기소개를 담은 카드뉴스를 제작했습니다.</p>
                <Slider className="slick-auto" {...screenSettings}>
                    {
                        soptImages.map((img, index) => (
                            <div className="news" key={index} >
                                <img alt="screen-image" src={img} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="section2">
                <h5 className="quot-title"> #SOPT SEMINAR CARDNEWS </h5>
                <p> IT 창업 동아리 SOPT에서 운영팀으로 활동하며, 매주 진행되는 세미나에 대한 기사로 카드뉴스를 제작했습니다.</p>
                <Slider className="slick-auto" {...screenSettings}>
                    {
                        soptSeminarImages.map((img, index) => (
                            <div className="news" key={index} >
                                <img alt="screen-image" src={img} />
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className="section3">
                <h5 className="quot-title"> #MADDY MT CARDNEWS </h5>
                <p> 문화교류 연합동아리 MADDY에서 부회장 및 DNA(Design 부서)팀에서 활동하며 카드뉴스를 제작했습니다.</p>
                <Slider className="slick-auto" {...screenSettings}>
                    {
                        mtImages.map((img, index) => (
                            <div className="news" key={index} >
                                <img alt="screen-image" src={img} />
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className="section4">
                <h5 className="quot-title"> #MADDY CARDNEWS </h5>
                <p> 문화교류 연합동아리 MADDY에서 활동들을 컨텐츠로 담아 카드뉴스를 제작했습니다.</p>
                <Slider className="slick-auto" {...screenSettings}>
                    {
                        pixelImages.map((img, index) => (
                            <div className="news" key={index} >
                                <img alt="screen-image" src={img} />
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className="section4">
                <h5 className="quot-title"> #MADDY CARDNEWS </h5>
                <p> 문화교류 연합동아리 MADDY에서 새로운 회원들을 모집하기 위한 카드뉴스를 제작했습니다.</p>
                <Slider className="slick-auto" {...screenSettings}>
                    {
                        introImages.map((img, index) => (
                            <div className="news" key={index} >
                                <img alt="screen-image" src={img} />
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className="section5">
                <h5 className="quot-title"> #MADDY CARDNEWS </h5>
                <p> 문화교류 연합동아리 MADDY에서 새로운 회원들을 모집하기 위한 카드뉴스를 제작했습니다.</p>
                <Slider className="slick-auto" {...screenSettings}>
                    {
                        contImages.map((img, index) => (
                            <div className="news" key={index} >
                                <img alt="screen-image" src={img} />
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </div>
    )
}

export default Detail;
