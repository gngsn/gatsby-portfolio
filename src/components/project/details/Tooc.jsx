import React from 'react';

import setImage from './setImage';
import { FacebookPlayer } from "reactjs-media";

const Detail = () => {
    const screenSettings = {
        // centerPadding: '70px',
        // dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: true,
        // autoplay: true,
        // speed: 2000,
        // dotsClass: 'dots',
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    }

    let screenImage = []
    setImage(screenImage, '/img/tooc/screen-0', 4, 'jpg');

    return (
        <div className="tooc">
            <div className="section1">
                <h5 className="quot-title"> 관광객과 쇼핑객을 위한 짐 보관 서비스 플랫폼 </h5>
                {/* <h5 className="quot-title"> 사용자 Workflow </h5> */}
                <div className="flex-box">
                    <a className="img-cont" target="_blank" href="https://user-images.githubusercontent.com/38368820/51367467-1c5fd980-1b2e-11e9-81a0-e1814704a0ff.jpg">
                        <img className="left"  src="/img/tooc/workflow.jpg"/>
                    </a>
                    <div>
                        <p> IT 동아리 내에서 3주간의 해커톤을 진행하며, ‘여행객을 위한 짐 보관 서비스 플랫폼’을 서비스하는 모바일 어플리케이션을 제작했습니다. 정말 큰 도전이 필요한 프로젝트였습니다. 서버를 제작하는 것이 처음일 뿐만 아니라, 실제 서비스를 제작하는 협업 프로젝트가 처음이었기 때문에 도전정신과 열정으로 해결해 나아가려고 노력했습니다. <br/><br/>
                        </p>
                        <a target="_blank" href="https://github.com/team-travely/travely-server"> 
                            <img src="https://img.icons8.com/fluent/96/000000/github.png"/> 서버 레퍼지토리
                        </a>
                        <div className="skill">
                            <img src="https://img.icons8.com/color/96/000000/intellij-idea.png"/>
                            <img src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png"/>
                            {/* <img src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" style={{filter:'invert(100%)'}}/> */}
                            <img src="https://img.icons8.com/color/96/000000/spring-logo.png"/>
                            <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png"/>
                            <img src="https://img.icons8.com/color/96/000000/git.png"/>
                            <img src="https://img.icons8.com/fluent/96/000000/github.png"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section4">
                <h5 className="quot-title"> 처음 만나는 서버 </h5>
                <p> MVC 패턴에 대한 이해를 먼저 시작했습니다. 요청을 받고 데이터베이스에 접근하기까지의 흐름을 먼저 파악하고 난 후에 프로필을 조회하는 기능을 구현했습니다. 그 과정에서 DTO와 DAO에 대한 이해부터 사용까지 할 수 있었습니다. 또, JWT를 전송하는 이유에 대한 궁금증이 커져 혼자 찾아보았습니다. JWT를 다룬 사이트가 있어서 알아내는 것에 대한 어려움을 덜 수 있었으며, 궁금증을 해결하기에 충분했습니다. 관련된 알아야할 것이 많다고 느꼈지만, 알아가면 갈 수록 보이는 로직에 대한 흥미가 점점 커져갔습니다.
                <br /><br />
                또, Workbench에 대한 사용법을 제대로 익히고자 노력했습니다. 미처 배우지 못한 AI, PK, FK 단어가 궁금해서 찾아보고 이해하는 과정을 가졌습니다. 뿐만 아니라, 프로필 수정을 할 때 이미지를 수정하는 부분이 있었기 때문에 S3에 직접 이미지를 넣고 주소를 받아오기도 했습니다.
                3주라는 짧은 시간동안 서버 협업 프로젝트의 A부터 Z까지 처음 듣고 배운 덕분에 큰 성장을 이루고, 견문을 넓힐 수 있는 큰 기회를 가졌습니다. 끊임없이 배우려는 자세로 임하게 되어서 후회없는 3주를 보낼 수 있었습니다. 뿐만 아니라, 서버에 대한 흥미와 관심이 매우 커질 수 있었습니다. 또, 이러한 노력의 결과로 구글스토어와 앱스토어에 등록을 하여 서비스를 배포할 수 있었습니다. <br /><br />
                </p>
            </div>

            <div className="section3">
                <h5 className="quot-title"> 개발 인생의 전환점 </h5>
                <div className="flex-box">
                    <div className="left">
                        <p> 처음 서버와 프런트라는 개념을 배우고, 우물 안 개구리였던 스스로를 깨닫게 되었습니다.
                        끝 없는 서버의 세계에 끝없는 호기심을 느낄 수 있다는 매력을 느끼고 서버에 대한 공부를 제대로 시작하게된 계기입니다.
                        <br/><br/>
                        'Tooc'을 제작하면서 많은 것들을 동아리에서 배우거나 스스로 학습해 나아갔습니다. <br/>
                        AWS에서 제공해주는 EC2, RDS, S3를 사용하면서 사용하는 목적을 알아보고 사용법까지 익혔습니다. 이론상으로는 이해가 힘들었던 것에 비해, 이론을 기반으로 실제로 접속하고 사용해보면서 완전히 익힐 수 있었습니다. 실제로, 팀원 분의 계정으로 대여했던 EC2의 pem키를 받아서 ssh명령어를 통해 처음으로 클라우드 서버에 접속해보았습니다. 클라우드 서버에 대해 추상적이었던 개념들이 정확하게 정립될 수 있었습니다. 또, RDS와 S3는 직접 대여해 다른 팀원들에게 공유하기도 했습니다. MySQL Workbench를 이용해서 RDS에 접속했습니다. 
                        <br/><br/>
                            <a target="_blank" href="https://github.com/team-travely/travely-server/wiki"> 
                                <img src="https://img.icons8.com/fluent/96/000000/github.png"/> 서버 API 소개
                            </a>
                        </p>
                    </div>
                    <img alt="screen-image" src={screenImage[0]} />
                    {/* <Slider className="slick-auto" {...screenSettings}>
                        {
                            screenImage.map( (img, index) =>(
                                <div className="test" key={index} >
                                <img alt="screen-image" src={img} />
                                </div>
                            ))
                        }
                    </Slider> */}
                </div>
            </div>

        </div>
    )
}

export default Detail;
