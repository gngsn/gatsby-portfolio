import React from 'react';

const Detail = () => {
    return (
        <div className="sopt-page">

            <div className="section1">
                <h5 className="quot-title"> 천명이 지원한 페이지 제작 </h5>
                <div className="main-img">
                    <img src="/img/sopt-page/26th_yb_apply_yb.png" />
                </div>
            </div>

            <div className="section2">
                <h5 className="quot-title"> UX </h5>
                <div className="flex-box">
                    <img className="left" src="/img/sopt-page/alert.png" />
                    <p> HCI(Human Computer Interaction)를 응용하여 사용자 경험을 중심으로 페이지를 만들었습니다.
                    동아리 26기 컨셉이 입체감이었으며, 당시 유행하던 뉴모피즘(Neumorphism)을 참고하여 제작했습니다.
        </p>
                </div>
                <div className="flex-box">
                    <p> javascript를 사용해서 각 필드값의 유효성을 판단하여 알람을 주기도 합니다.
                    javascript를 사용해서 textarea에 내용이 변경될 때마다 글자수를 카운팅하도록 했습니다.
                    또, 맨 아래의 '지원하기'를 누르면 데이터 베이스와 연동된 php 파일에 데이터를 전송합니다.
                    php는 학교 수업시간에 잠깐 다뤄본 것이 다였지만, 지원서 페이지를 제작하게 되면서 공식 문서를 참고하면서 개발했습니다.
                    데이터를 다른 페이지에서 전달받아 데이터베이스와 연결하는 것까지 안정적으로 데이터를 처리합니다.
        </p>
                    <img className="right" src="/img/sopt-page/server.png" />
                </div>
            </div>

            <div className="section3">
                <h5 className="quot-title"> 지원서 확인 페이지 </h5>
                <p> 지원서 페이지에 이어, 지원서 확인 페이지도 php와 jquery, javascript를 사용해서 제작했습니다.
                지원서 페이지를 기반으로 php를 충분히 익혀 pagination이나 분야별로 확인할 수 있게끔 제작하였습니다.
    </p>
                <div className="img-cont">
                    <img className="right" src="/img/sopt-page/check-server.png" />
                </div>
            </div>
        </div>
    )
}

export default Detail;
