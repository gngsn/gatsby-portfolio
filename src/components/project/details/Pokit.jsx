import React from 'react';
import setImage from './setImage';
import PdfSlider from '../../elements/PdfSlider';
import styled from 'styled-components';

const Pokit = styled.div`
    & {
        .section1 p {
            text-align: center;
        }
        .section2 p.caption {
            font-size: .8rem;
            color: #989898;
        }
        .section3 {
            margin-top: 30px;
        }
        .section4 {
            margin: 50px auto;
        }
        .section4 .flex-box {
            margin: 30px auto;
            justify-content: flex-start;
            img {
                width: 100%;
                max-width: 140px;
                margin-right: 20px;
                margin-bottom: 15px;
            }
        }
    }
`;

const Detail = () => {
    let pdfImage = [];
    setImage(pdfImage, '/img/pokit/pokit_slide_', 26);

    return (
        <Pokit className="pokit">
            <div className="section1">
                <h5 className="quot-title"> # FINTECH HACKATHON </h5>
                <p> 소상공인과 소비자의 상생을 위한 온라인 판매, <br />다양하고 신선한 농산물 재료로 제작한 밀키트를 관리하는 플랫폼. </p>
                <PdfSlider isDots={true} images={pdfImage} toShow={6} />
            </div>
            <div className="section2">
                <h5 className="quot-title"> # 기획부터 디자인, 백앤드까지 </h5>
                <p> "미닝아웃" 이라는 소비 트랜드에 집중하여 우리 농산물로 만든 밀키트를 생산하여 제공하는 플랫폼을 기획했습니다.
                    브랜딩부터 디자인을 모두 맡아 로고부터 앱 디자인, 발표 자료 디자인 제작을 맡기도 했으며, 
                    서버 프로젝트의 핵심 기술인 Fintech 기술 중 결제 기능을 담당하였습니다. 
                </p>
                <img src="/img/pokit/forest.png" />
                <p className="caption"> 
                    직접 기획하고 디자인한 나만의 포레스트. <br />
                    사용자의 사용률에 따라 리워드 지급하여 사용자의 이탈을 막고 더 많은 활동을 유도합니다.
                </p>
            </div>
            <div className="section3">
                <p> 
                    핀테크 개발을 맡으면서 농협의 핀테크 기술에 대한 이해를 할 수 있는 좋은 기회였습니다.
                </p>
                <img src="/img/pokit/pokit_slide_22.png" />
            </div>
            <div className="section4">
                <div className="flex-box">
                    <img src="/img/pokit/mock_1.png" />
                    <img src="/img/pokit/mock_2.png" />
                    <img src="/img/pokit/mock_3.png" />
                </div>
                <div className="flex-box">
                    <img src="/img/pokit/mock_4.png" />
                    <img src="/img/pokit/mock_5.png" />
                    <img src="/img/pokit/mock_6.png" />
                    <img src="/img/pokit/mock_7.png" />
                </div>
                <div className="flex-box">
                    <img src="/img/pokit/mock_8.png" />
                    <img src="/img/pokit/mock_9.png" />
                    <img src="/img/pokit/mock_10.png" />
                    <img src="/img/pokit/mock_11.png" />
                </div>
            </div>
        </Pokit>
    )
}

export default Detail;
