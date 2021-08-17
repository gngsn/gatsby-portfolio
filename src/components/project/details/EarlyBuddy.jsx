import React from 'react';

const Detail = () => {
    return (
        <div className="early-buddy">
            
            <div className="section1 video">
                <h5 className="quot-title">
                    약속시간을 위한 나만의 대중교통 배차 알리미 서비스</h5>
                <iframe width="840" height="510" src="https://youtube.com/embed/AxuGlkMUapA?autoplay=1"> </iframe>
            </div>

            <div className="section2 info">
                <h5 className="quot-title"># 2주간의 열정 </h5>
                <img src="/img/eb-panel.png" />
            </div>

            <div className="section3 tech">
                <h5 className="quot-title">APPJAM 해커톤 우수상. Node.js 서버 개발. 협업 능력</h5>
                <div className="skill">
                    <img src="https://img.icons8.com/fluent/96/000000/visual-studio-code-2019.png" />
                    <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
                    <h4>Express</h4>
                    <img className="ch" src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" />
                    <img src="https://img.icons8.com/color/96/000000/git.png" />
                    <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                    <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png" />
                    <img src="https://img.icons8.com/color/96/000000/nginx.png" />
                </div>
                <div className="flex-box">
                    <img src="/img/eb-capture.png" />
                    <p> 2주간의 해커톤 기간 동안, 약속시간을 지키지 못하는 사람들을 위한 대중교통 배차 알림 서비스를 모바일 어플리케이션으로 제작하였습니다.
                주 업무는 node.js를 이용해 서버를 개발하는 것입니다. <br /><br />
                기능은 약속 시간에 맞추어 일정을 관리하는 것부터, 약속 장소로 가는 경로까지 제공합니다.
                ODsay에서 제공해주는 경로 검색 API를 사용하여, 대중교통을 이용한 이동 경로에 대해 데이터들을 받아왔습니다.
                서버를 구축해본 경험이 있었기 때문에 해당 프로젝트에서는 주도적인 개발을 하고 싶었고, 또 실제로 주도적인 개발을 이끌어나갔습니다.
                <a target="_blank" href="https://github.com/EARLY-BUDDY/EARLY-BUDDY-SERVER"> <img src="https://img.icons8.com/fluent/96/000000/github.png" /> 메인 서버</a>
                    </p>
                </div>
            </div>

            <div className="section4">
                <h5 className="quot-title"> # FCM – 알림 기능 구현</h5>
                <div className="flex-box">
                    <p>
                        일정을 지정하면, 배차 시간을 검색하여 약속시간에 늦지 않게 출발하는 시간을 계산합니다. schedule 모듈을 사용하였으며, 계산된 시간에 맞추어 schedule 객체에 새 일정을 추가하도록 구현하였습니다.  <br /><br />
                        개발 과정에서 가장 힘들었던 점은 테스트 도중 서버가 다운되어 버리면 저장되어 있던 schedule 객체들이 사라지는 문제가 있었습니다. 어플리케이션을 발표하는 날, 테스트를 안정적으로 해야했기 때문에 큰 이슈로 떠올랐습니다. 결국 새로운 프로젝트 하나를 생성하여, 알림 기능만을 위한 프로젝트를 생성하고 다른 포트로 요청하게끔 만들어 문제를 해결할 수 있었습니다. 발표하는 날, 다행히도 온전한 테스트가 가능하여 평가를 하시는 멘토님께 좋은 평을 들을 수 있었습니다.
                        <a target="_blank" href="https://github.com/EARLY-BUDDY/EARLY-BUDDY-PUSH-SERVER"> <img src="https://img.icons8.com/fluent/96/000000/github.png" /> 알림 서버 (FCM)</a>
                    </p>
                    <img src="/img/early-buddy-arch.png" />
                </div>
                <h5 className="quot-title"> # 일정 조회, 수정 그리고 삭제</h5>
                <div className="erd"><img src="/img/early-buddy-erd.png" /></div>
                <p>
                    일정 데이터에는 약속 날짜와, 위치 그리고 경로검색 데이터 등이 포함됩니다. ODsay에서 제공해주는 경로검색 데이터가 방대했으며, 대중교통의 종류에 따라 구조가 달라 분석하는 작업에서 큰 어려움을 겪었습니다. 일정을 추가하는 작업은 데이터를 분석 한 후 해결할 수 있었지만, 가장 큰 문제는 일정 수정이었습니다.
            <br /><br />
            일정을 수정하는 작업에서 데이터베이스 처리에 대한 문제가 생겼습니다. 경로 데이터를 모두 삭제하고 새로운 데이터를 넣는 해결책을 생각해내었고, 데이터를 찾는 것과 삭제하는 기능을 구현을 한 후에 두 기능을 가져와 수정 기능으로 만드니 해결할 수 있었습니다. </p>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Detail;
