import React from 'react';
import setImage from './setImage';
import PdfSlider from '../../elements/PdfSlider';

const Detail = () => {
    let pdfImage = [];
    setImage(pdfImage, '/img//hci/hci_', 34);

    return (
        <div className="hci">
            <div className="section1">
                <h5 className="quot-title"> # HUMAN-COMPUTER INTERACTION </h5>
                <p> 인간과 컴퓨터의 상호작용을 탐구하여 기존에 출시되었던 '따릉이' 어플을 UX을 고려하여 재탄생시켰습니다. </p>
                <PdfSlider images={pdfImage} toShow={6}/>
            </div>
            <div className="section2">
            <h5 className="quot-title"> # PROTOTYPE - Wizard of OZ </h5>
            <div className="flex-box">
                <iframe width="320" height="450" src="https://youtube.com/embed/a-N13-zTeIM?autoplay=1"> </iframe>
                <p> 마치 사용자가 사용하는 것처럼 뷰를 찾아보고 <br/>버튼을 눌러보는 등의 이벤트를 직접 취하면서 프로토타입을 설명해줍니다. </p>
            </div>
            </div>
            <div className="section3">
                <h5 className="quot-title"> # PROTOTYPE - XD </h5>
                <div className="xd flex-box">
                <img src="/img/hci/hci-main-1.png" />
                <img src="/img/hci/hci-main-2.png" />
                <img src="/img/hci/hci-main-3.png" />
                <img src="/img/hci/hci-main-4.png" />
                <img src="/img/hci/hci-main-5.png" />
            </div>
            <div className="xd flex-box">
                <img src="/img/hci/hci-pay-1.png" />
                <img src="/img/hci/hci-pay-2.png" />
                <img src="/img/hci/hci-pay-3.png" />
                <img src="/img/hci/hci-pay-4.png" />
                <img src="/img/hci/hci-pay-5.png" />

            </div>
            <div className="xd flex-box">
                <img src="/img/hci/hci-lent-1.png" />
                <img src="/img/hci/hci-lent-2.png" />
                <img src="/img/hci/hci-lent-3.png" />
                <img src="/img/hci/hci-lent-4.png" />
            </div>
            <div className="xd flex-box">
                <img src="/img/hci/hci-mypage-1.png" />
                <img src="/img/hci/hci-mypage-2.png" />
                <img src="/img/hci/hci-mypage-3.png" />
            </div>
            <div className="xd flex-box">
                <img src="/img/hci/hci-card-1.png" />
                <img src="/img/hci/hci-card-2.png" />
                <img src="/img/hci/hci-card-3.png" />
                <img src="/img/hci/hci-card-4.png" />
                <img src="/img/hci/hci-card-5.png" />
            </div>
            <div className="xd flex-box">
                <img src="/img/hci/hci-hand-1.png" />
                <img src="/img/hci/hci-hand-2.png" />
            </div>
            <div className="xd flex-box">
                <img src="/img/hci/hci-menu-1.png" />
                <img src="/img/hci/hci-menu-2.png" />
                <img src="/img/hci/hci-menu-3.png" />
            </div>
            </div>
        </div>
    )
}

export default Detail;
