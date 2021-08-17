import React from 'react';
import setImage from './setImage';

const ServerHead = () => {
    let seminarImage = []
    setImage(seminarImage, '/img/serverHead/seminar-', 20);
    return (
        <div className="server-head">

            <div className="section1">
                <h5 className="quot-title"> 7주간의 세미나, 그리고 해커톤 앱잼 </h5>
                <p> 👇🏻  COVID로 인해 리모트 세미나를 하는 모습</p>
                <div className="flex-box">
                    <img src="/img/serverHead/seminar-norm.png" />
                    <img src="/img/serverHead/seminar-multi.png" />
                </div>
            </div>

            <div className="section2">
                <h5 className="quot-title"> 7주 CURRICULUM </h5>
                <div className="flex-box">
                    <img className="left" src="/img/serverHead/curriculum.png" />
                    <div>
                    <p> 7주간의 세미나로, 약 40명의 파트원들에게 서버에 대한 전반적인 지식을 전달하였습니다.
                    Javascript부터 시작하여, Node.js란 무엇인지와 Express를 사용하여 서버를 구축하는 법을 전달했습니다.
                    AWS EC2를 사용하여 서버를 올리는 방법과, MySQL사용법을 전달하는 동시에 AWS RDS 사용법을 전달했습니다.
                    마지막에는 Token을 이용한 인증방법인 JWT에 대한 필요성과 이론, 그리고 사용법에 대해 강의했습니다.<br /><br />
                    </p>
                        <a target="_blank" href="https://github.com/gngsn/26th_SERVER">
                            <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                        세미나 실습 자료
                        </a>
                    </div>
                </div>
            </div>


            <div className="section3">
                <h5 className="quot-title"> # 열정 </h5>
                <p>약 7개월 동안, 어떤 대가를 바람없이 대학생 IT 창업 동아리 SOPT에서 서버파트장으로 활동했습니다.
                <span className="line-break960over"> 7주차의 세미나를 통해 40명의 서버파트원에게 서버 지식을 전달했습니다. </span>
                완성도 높은 애플리케이션을 제작하는 것을 목표로 하게끔 필요한 모든 내용을 전달했습니다.
                <span className="line-break960over"> 세미나 이외에도 서버와 관련된 각종 질문들을 받으며, 파트원들과 의사소통을 해나아갔습니다. </span>
                서버 파트 뿐만아니라, SOPT 홈페이지 관리를 하며 지원서 페이지 작업과 홈페이지 개편에 힘썼습니다.
            </p>
                <div className="skill">
                    <img src="https://img.icons8.com/fluent/96/000000/visual-studio-code-2019.png" />
                    <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
                    <h4>Express</h4>
                    <img className="ch" src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" />
                    <img src="https://img.icons8.com/color/96/000000/mongodb.png" />
                    <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png" />
                    <img src="https://img.icons8.com/color/96/000000/git.png" />
                    <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                </div>
            </div>

            <div className="section4">
                <h5 className="quot-title"> # 2주간의 해커톤 APPJAM </h5>
                <a target="_blank" href="https://drive.google.com/drive/u/0/folders/1fWfjt7cKP1Z4AdqR5TdiawrsvqIUD99S"> 👉🏻 세미나 자료 전체 확인</a>
                <div className="gallery">
                    {
                        seminarImage.map(semImg => (
                            <img src={semImg} alt='seminar-image' />
                        ))
                    }
                </div>
            </div>


            <div className="section5">
                <h5 className="quot-title"> # 2주간의 해커톤 APPJAM </h5>
                <div className="flex-box">
                    <p className="left">
                        2주만에 완성도 높은 애플리케이션을 제작하기 위한 행사, APPJAM을 기획하였습니다.
                        해커톤 기간동안 서버파트원이 속해있는 11팀에게 질문을 받으면서, 완전한 서버를 개발할 수 있게끔 서포트했습니다.
                        세미나 때 자세히 다루지 못했던 내용인 SOCKET에 대한 내용을 더 자세히 알려주고 직접 사용할 수 있게 도와주었으며,
                        무중단 배포로 서버를 서버답게 사용하도록 도왔습니다.

                         <a target="_blank" href="https://www.youtube.com/watch?v=DL94bw8N6f8">
                            <img src="https://img.icons8.com/color/96/000000/youtube-play.png" />
                            <p>A:LIVE 데모데이</p>
                        </a>

                        해커톤이 끝나고 11팀이 제작한 애플리케이션을 소개하는 행사인 '데모데이'날의 라이브 영상입니다.
                        약 6시간 동안 회원들과 임원진들의 열정 넘치는 발표 현장입니다.
                    </p>
                    <img data-zoom="true" src="/img/serverHead/alive.jpg" />
                </div>
            </div>
        </div>
    )
}

export default ServerHead;
