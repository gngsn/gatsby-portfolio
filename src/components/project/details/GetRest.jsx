import React from 'react';
import setImage from './setImage';
import PdfSlider from '../../elements/PdfSlider';

const Detail = () => {
    let pdfImage = [];
    setImage(pdfImage, '/img/getRest/storyboard-', 25);

    return (
        <div className="get-rest">

            <div className="section1">
                <h5 className="quot-title"> 쉬운 자기소개서, 쉬자 </h5>
                <a className="img-cont" target="_blank" href="/img/getRest/panel.png">
                    <img className="left" width="" src="/img/getRest/panel.png" />
                </a>
            </div>

            <div className="section2">
                <h5 className="quot-title"> APPJAM 해커톤 멘토 우수상 </h5>
                <div className="flex-box">
                    <iframe width="300" height="630" src="https://youtube.com/embed/zcTqWlBY5BM?autoplay=1"> </iframe>
                    <div>
                        <p>
                            프로젝트는 모바일 어플리케이션으로 쉽게 포트폴리오를 관리하고 자기소개서 작성하는 서비스를 제작하였습니다. 자신의 활동 로그를 접근하기 가장 편한 핸드폰에 작성해두어 필요할 때마다 추가, 수정할 수 있습니다. 프로젝트에서 두 명이 iOS개발 부분을 맡았습니다.
                        </p>
                        <div className="skill">
                            <img src="https://img.icons8.com/color/96/000000/xcode.png" />
                            <img className="ch" src="https://img.icons8.com/ios-filled/100/000000/ios-logo.png" />
                            <img src="https://img.icons8.com/fluent/96/000000/swift.png" />
                            <img src="https://img.icons8.com/color/96/000000/git.png" />
                            <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                        </div>
                        <a target="_blank" href="https://github.com/soptrest/sopt_get_rest_IOS">
                            <img style={{maxWidth: '40px', maxHeight: '40px'}} src="https://img.icons8.com/fluent/96/000000/github.png" />  Gtihub 링크 </a>
                    </div>
                </div>
            </div>
            <div className="section3">
                <PdfSlider images={pdfImage} />
            </div>


            <div className="section4">
                <h5 className="quot-title">막대 그래프 - 사용자의 활동 로그 표시</h5>
                <div className="flex-box">
                    <a className="img-cont" target="_blank" href="/img/getRest/graph.png">
                        <img src="/img/getRest/graph.png" />
                    </a>
                    <p>
                        메인 화면의 그래프는 가장 먼저 보이기도 하고, 핵심 기능 중 하나이었기 때문에 기획과 디자이너들이 가장 기대하는 기능이었습니다.
                        하지만, 개발을 맡은 팀원들이 짧은 시간에 비해 어려운 기능이라는 판단으로 그래프를 빼자는 의견이 나왔습니다.
                        기획과 디자이너 분들의 기대가 보이는 뷰였기 때문에, 아직 해본적이 없어서 어렵게 느껴지는 것일 수도 있다고 설득을 하였습니다.
                        <br /><br />
                        설득 후, 실제로 그래프를 이틀동안 잠도 줄이며 애니메이션까지 추가하여 기대 이상의 그래프를 만들었습니다. <br />
                        처음에는, 그래프를 직접 만들지 혹은 라이브러리를 가져다 디자인에 맞게 수정할 지에 대한 고민이 있었습니다.
                        2주간의 짧은 시간으로 직접 만드는 것보다는 라이브러리로 사용하고 다른 기능들을 더 추가하는 결정을 내렸습니다. 그래서 라이브러리를 fork하여 코드를 전부 분석한 후 디자이너들의 요구사항에 맞춰 수정하였습니다.
                        심사를 하시는 멘토님께서 활용력이 좋다는 평과 2주안에 뷰를 전부 제작한 것에 대한 큰 칭찬을 해주셨습니다. 덕분에 열 개가 넘는 팀 중 멘토 우수상을 유일하게 받을 수 있었습니다.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Detail;
