import React from 'react';
import setImage from './setImage';
import PdfSlider from '../../elements/PdfSlider';

const Detail = () => {
    let pdfImage = [];
    setImage(pdfImage, '/img/babyCloset/ppt-', 15);

    return (
        <div className="baby-closet">
            <div className="section1">
                <h5 className="quot-title"> 서울시 앱공모전 </h5>
                <img src="/img/babyCloset/cover.png" />
            </div>

            <div className="section2">
                <h5 className="quot-title">중고 아기 옷 나눔 서비스</h5>
                <p>‘2019년 스마트 서울 모바일 앱 공모전’에 10명의 팀원과 함께 응시하였습니다. 성장이 빠른 아기들의 옷을 나눔하는 서비스로, 기획과 iOS를 맡았습니다. iOS개발을 하면서 한 명의 팀원과 역할을 나누게 되었는데, 서로 해보지 못한 것들을 도전하기로 했습니다. ‘쉬자’라는 프로젝트를 같이 했던 분이라 그런지, 서로 잘 맞은 덕분에 서로 욕심과 타협 사이로 역할을 가져갈 수 있었습니다. 그 결과, 사용자를 관리하는 부분과 게시글을 다루는 서비스에 대한 역할을 맡아 했습니다.

                </p>
                <PdfSlider images={pdfImage} />
            </div>

            <div className="section3">
                <h5 className="quot-title"> 메세지 기능 </h5>
                <p>
                    메세지 창을 개발하는 것은 굉장히 까다로웠습니다. 유동적으로 변하는 레이아웃들이 필수적이었기 때문입니다. 사용자가 보내는 메세지와 상대방이 보내는 메세지의 위치나 이미지가 다르다는 점과 메세지 셀 사이즈에 맞춰 Container View의 사이즈도 늘어나게끔 만드는 부분에서 큰 어려움을 겪었습니다. 뷰를 생성하는 방식은 굉장히 다양하기 때문에 여러가지 방법을 시도해보았습니다.
                    먼저, Table View, Collection View, Scroll View를 Container View로 사용해보는 다양한 시도를 했습니다. 가장 상위 계층인 Container View에 대한 다양한 도전이었기 때문에 많은 시간이 들었지만, 그 만큼 세 가지 중 Table View가 가장 적합하다는 판단을 내릴 수 있었습니다. 또한, 말풍선을 만들 때에도 UIBezierPath로 말풍선을 그리는 방법과, 이미지에 inset을 가장자리 모양에 맞게 주어서 가장자리를 제외하고 이미지가 늘어나도록 만들어 말풍선의 다양한 사이즈를 구현하려는 노력을 했습니다.
    </p>
                <a target="_blank" href="https://github.com/BabyClosetGroup/BabyClosetIOS">
                    <img src="https://img.icons8.com/fluent/96/000000/github.png" />Github 링크</a>
                <div className="skill">
                    <img src="https://img.icons8.com/color/96/000000/xcode.png" />
                    <img className="ch" src="https://img.icons8.com/ios-filled/100/000000/ios-logo.png" />
                    <img src="https://img.icons8.com/fluent/96/000000/swift.png" />
                    <img src="https://img.icons8.com/color/96/000000/git.png" />
                    <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                </div>
            </div>
        </div>
    )
}

export default Detail;
