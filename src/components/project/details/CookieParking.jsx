import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 30px 0px;
    p, a {
        text-align: center;
    }
    .section3 {
        margin-bottom: 100px;
    }
`;

const Detail = () => {
    return (
        <Container>
            <section>
                <h5 className="quot-title">
                    크롬 익스텐션으로 구성된 북마크 서비스
                </h5>
                <p>
                    " 여러분들을 보관하고 싶은 컨텐츠들을 어떻게 관리하세요? " <br />
                    이 전에 보관하고 싶은 컨텐츠들을 카카오톡 나와의 채팅방에 저장을 해둔다던지, <br />
                    크롬 북마크에 저장해두거나, 메모장에 저장을 해두기도 했는데요. <br />
                    혹은 페이스북에서 본 좋은 글들은나에게 공유로 해서 쌓아둔 컨텐츠가 장난이 ... 아니었죠. .. <br />
                    너무 많아 관리도 안되고 어떤 글이 읽은 건지 읽지 않은 건지 구별하기도 어려웠어요.
                    <br /> <br />
                    이 문제점은 많은 사람들이, 특히 인사이트를 찾아다니는 많은 분들이 공감하실 것 같아요. <br />
                    이런 문제점들을 해결하고 기존의 서비스들을 보완한 서비스가 바로 쿠키파킹입니다.
                    <br /> <br />
                    더 자세한 내용은 공식 페이지에서 확인할 수 있습니다 <br /> <br />
                    <a href="https://linktr.ee/dooribun"> &gt;&gt; Cookie Parking </a>
                </p>
                <div>
                    <img src="/img/cookieParking/landing_1.png" />
                    <img src="/img/cookieParking/landing_2.png" />
                    <img src="/img/cookieParking/landing_3.png" />
                </div>
            </section>

            <section>
                <h5 className="quot-title"># Service Architecture </h5>
                <img src="/img/cookieParking/service_architecture.png" />
                <p>
                    쿠키파킹 서비스는 두 명의 서버 개발자가 만든 소규모의 서버로 되어있고, <br />
                    작은 서비스이기 때문에 섬세한 설정이나 확장을 할 필요가 없다고 판단했습니다. <br />
                    그래서 Elastic Beanstalk을 사용하게 되었습니다.
                    <br /> <br />
                    Elastic Beanstalk의 장점은 ELB를 지원해줘서 트래픽에 따라 Auto Scaling을 사용할 수 있고, <br />
                    트래픽, CPU, 메모리 사용량 등 실시간 모니터링을 지원해준다는 점이 있습니다. <br />
                    또, 초기 세팅이 굉장히 간편해서 단기간에 서비스 배포를 목적으로 한다면 아주 적합하죠.
                </p>
            </section>

            <section>
                <h5 className="quot-title"># Code Architecture </h5>
                <img src="/img/cookieParking/code_architecture.png" />
                <p>
                    클린코드를 참고하여 적용한 코드 아키텍처의 모습입니다. <br />
                    클린코드를 기반으로 관리하기 위해 TypeDI를 적용하기도 했습니다. <br />
                    또, sequelize를 사용하다 Typescript를 전폭적으로 지원해주는 Prisma로 변경하기도 했습니다. <br /> <br />
                <a href="https://gngsn.tistory.com/76"> &gt;&gt; Cookie Parking 서버이야기 </a>
                </p>
            </section>
        </Container>
    )
}

export default Detail;
