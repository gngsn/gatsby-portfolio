import React from 'react';

const section1 = [{
    key: 5,
    title: '쿠키파킹',
    duration: '2020.12 ~ 2021.03',
    subTitle: ['# Node.js # Typescript'],
    thumbnail: '/img/cookieParking/dark.png',
    backImage: '/img/cookieParking/dark.png',
    link: 'cookie-parking',
    summary: `쿠키파킹은 크롬 익스텐션으로 구성된 북마크 서비스입니다. 인사이트가 되는 게시글 이나 페이지를 종류 별로 저장하여 관리할 수 있는 서비스입니다.
            IT동아리 SOPT에서 3 주간의 해커톤으로 진행한 프로젝트입니다.
            실제 서비스 중이며, Typescript를 이용해 Node 서버를 제작했습니다. CICD를 적용하여 프로젝트 기간동안 개발에 몰입할 수 있게 하였습니다. 백앤드 개발자 2명이 협업하였습니다.`,
    skillStack: ['nextjs', 'aws', 'mariadb', 'git'],
    content: ''
}, {
    key: 4,
    title: 'Popupcinema',
    duration: '2020.09 ~ 2020.12',
    subTitle: ['# Next.js # Javascript'],
    thumbnail: '/img/popupcinema/popupcinema-dark.jpeg',
    backImage: '/img/popupcinema/popupcinema-dark.jpeg',
    link: 'popupcinema',
    summary: `외주 프로젝트로 Next.js 프레임워크를 이용하여 서버를 보완하였습니다. 공동체영화 상영을 제공하는 웹 서비스입니다. 
        기존의 서버를 받아 리뉴얼하는 작업을 진행했습니다. 프론트 개발자 1명과 백앤드 개발자 1명이 애자일 스크럼 방식으로, 2주기간을 둔 스프린트로 진행하였습니다. 
        서비스를 리뉴얼하는 작업이라, 기존의 API 및 DB 데이터와 호환성을 고려하여 확장하는 작업을 하였고 추가되는 기능을 새로 제작하였습니다.`,
    skillStack: ['aws', 'node', 'nginx', 'mysql', 'git', 'linux'],
    content: ''
}, {
    key: 3,
    title: 'SOPT 페이지',
    duration: '2020.02 ~ 2020.07',
    subTitle: ['# php'],
    thumbnail: '/img/sopt-page.png',
    backImage: '/img/sopt-page.png',
    link: 'sopt-page',
    summary: `HCI(Human Computer Interaction)를 응용하여 사용자 경험을 중심으로 페이지를 디자인하여 개발했습니다.
                동아리 26기 컨셉이 입체감이었으며, 당시 유행하던 뉴모피즘(Neumorphism)을 참고하여 제작했습니다.
                javascript를 사용해서 각 필드값의 유효성을 판단하여 알람을 주며, 글자수를 카운팅하도록 했습니다.
                각 필드의 데이터는 데이터 베이스와 연동된 php 파일에 데이터를 전송합니다.
                php는 학교 수업시간에 잠깐 다뤄본 것이 다였지만, 지원서 페이지를 제작하게 되면서 공식 문서를 참고하면서 개발했습니다.
                데이터를 다른 페이지에서 전달받아 데이터베이스와 연결하는 것까지 안정적으로 데이터를 처리합니다.
                `,
    skillStack: ['php', 'aws', 'mysql', 'git'],
    content: ''
}, {
    key: 2,
    title: 'SOPT\n 서버파트장',
    // duration: '2020.01.18 ~ 2020.08.01',
    duration: '2020.01 ~ 2020.08',
    subTitle: ['# IT 창업 동아리 운영 및 서버파트장'],
    thumbnail: '/img/sopt-main.png',
    backImage: '/img/sopt-main.png',
    link: 'server-head',
    summary: `7주간의 세미나로, 약 40명의 파트원들에게 서버에 대한 전반적인 지식을 전달하였습니다.
        Javascript부터 시작하여, Node.js란 무엇인지와 Express를 사용하여 서버를 구축하는 법을 전달했습니다.
        AWS EC2를 사용하여 서버를 올리는 방법과, MySQL사용법을 전달하는 동시에 AWS RDS 사용법을 전달했습니다.
        마지막에는 Token을 이용한 인증방법인 JWT에 대한 필요성과 이론, 그리고 사용법에 대해 강의했습니다.`,
    skillStack: ['aws', 'node', 'nginx', 'mysql', 'git', 'linux'],
    content: ''
}, {
    key: 1,
    title: 'EARLY-BUDDY',
    // duration: '2019-12-22 ~ 2020-01-04',
    duration: '2019.12 ~ 2020.01',
    subTitle: ['# 해커톤 APPJAM 우수상', '# Node.js # Express'],
    thumbnail: '/img/early-buddy.png',
    backImage: '/img/early-buddy.png',
    link: 'early-buddy',
    summary: `2주간의 해커톤 기간 동안, 약속시간을 지키기 어려워하는 사람을 위한 대중교통 배차 알림 서비스를 모바일 어플리케이션의 서버를 node.js를 이용하여 개발하였습니다.
                약속 시간에 맞추어 일정을 관리하는 것부터, 약속 장소로 가는 경로까지 제공합니다.
                ODsay에서 제공해주는 경로 검색 API를 사용하여, 대중교통을 이용한 이동 경로에 대해 데이터들을 받아왔습니다.
                서버를 구축해본 경험이 있었기 때문에 해당 프로젝트에서는 주도적인 개발을 하고 싶었고, 또 실제로 주도적인 개발을 이끌어나갔습니다.`,
    skillStack: ['aws', 'node', 'nginx', 'mysql', 'git', 'linux'],
    content: ''
}, {
    key: 0,
    title: 'Tooc',
    duration: '2018.02 ~ 2019.01',
    subTitle: ['# 해커톤 APPJAM 장려상', '# Spring Framework'],
    thumbnail: '/img/tooc-dark.png',
    backImage: '/img/tooc-dark.png',
    link: 'tooc',
    summary: `IT 동아리 내에서 3주간의 해커톤을 진행하며, ‘여행객을 위한 짐 보관 서비스 플랫폼’을 서비스하는 모바일 어플리케이션을 제작했습니다. 
        정말 큰 도전이 필요한 프로젝트였습니다. 
        서버를 제작하는 것이 처음일 뿐만 아니라, 실제 서비스를 제작하는 협업 프로젝트가 처음이었기 때문에 도전정신과 열정으로 해결해 나아가려고 노력했습니다.`,
    skillStack: ['aws', 'spring', 'nginx', 'mysql', 'git', 'linux'],
    content: ''
}, ];

const section2 = [{
        key: 4,
        title: 'Playlicense',
        duration: '2020.12 ~ 2021.03',
        subTitle: ['# Next.js # Javascript'],
        thumbnail: '/img/popupcinema/popupcinema-dark.jpeg',
        backImage: '/img/popupcinema/popupcinema-dark.jpeg',
        link: 'playlicense',
        summary: `외주 프로젝트로 Next.js 프레임워크를 이용하여 웹 프론트를 제작했습니다. 
        공연 저작권을 보호하며 공연 저작물을 서비스하는 웹페이지입니다. 
        React.js로 개발을 하다가 Next.js로 이전하였습니다. 
        프론트 개발자 1명과 백앤드 개발자 1명이 애자일 스크럼 방식으로, 2주 기간을 둔 스프린트로 진행하였습니다. 
        Component의 재사용에 최대 한 초점을 맞추어 개발했습니다.`,
        skillStack: ['react', 'git'],
        content: ''
    }, {
        key: 3,
        title: 'Pokit',
        duration: '2020.12.10 ~ 2020.12.14',
        subTitle: ['# Fintech # 농협해커톤'],
        thumbnail: '/img/pokit/pokit-dark.png',
        backImage: '/img/pokit/pokit-dark.png',
        link: 'pokit',
        summary: `소상공인과 소비자의 상생을 위한 온라인 판매, 다양하고 신선한 농산물 재료로 제작한 밀키트를 관리하는 플랫폼입니다.
        주요 소비층으로 부상한 MZ세대가 착한 소비와 미닝아웃(윤리적 소비) 를 지향하는 추세가 되며 최근 농업에 대한 중요성이 대두되고 있습니다.
        트렌드를 살려 밀키트를 제작하고 거래하는 플랫폼인 포킷을 제작하게 되었습니다.
        기획부터 디자인, 핀테크 기술을 모두 경험하고 적용했습니다.
        `,
        skillStack: ['react', 'git'],
        content: ''
    }, {
        key: 2,
        title: '아기 옷장',
        // duration: '2019.08.25 ~ 2019.10.21',
        duration: '2019.08 ~ 2019.10',
        subTitle: ['# 서울시 앱 공모전', '# 아기 옷 나눔 서비스 앱 제작'],
        thumbnail: '/img/babyCloset-dark.png',
        backImage: '/img/babyCloset-dark.png',
        link: 'baby-closet',
        summary: `2019 년 스마트 서울 모바일 앱 공모전’에 10 명의 팀원과 함께 응시하였습니다. 
        성장이 빠른 아기들의 옷을 나눔하는 서비스로, 기획과 iOS를 맡았습니다.
        iOS개발을 하면서 한 명의 팀원과 역할을 나누게 되었는데, 서로 해보지 못한 것들을 도전하기로 했습니다.
        ‘쉬자’ 라는 프로젝트를 같이 했던 분이라 그런지, 서로 잘 맞은 덕분에 서로 욕심과 타협 사이로 역할을 가져갈 수 있었습니다.
        그 결과, 사용자를 관리하는 부분과 게시글을 다루는 서비스에 대한 역할을 맡아 했습니다.`,
        skillStack: ['xcode', 'ios', 'swift', 'git'],
        content: ''
    },
    {
        key: 1,
        title: '쉬자',
        // duration: '2019.06.29 ~ 2019.07.13',
        duration: '2019.06 ~ 2019.07',
        subTitle: ['# 해커톤 APPJAM 멘토 우수상 ', ' # 쉬운 자기소개서 쓰기 앱 제작'],
        thumbnail: '/img/getRest-dark.png',
        backImage: '/img/getRest-dark.png',
        link: 'get-rest',
        summary: `2주간의 해커톤 기간 동안, 쉽게 포트폴리오를 관리하고 자기소개서 작성하는 모바일 어플리케이션서비스를 제작하였습니다. 
        자신의 활동 로그를 접근하기 가장 편한 핸드폰에 작성해두어 필요할 때마다 추가, 수정할 수 있습니다. 프로젝트에서 두 명이 iOS개발 부분을 맡았습니다.`,
        skillStack: ['xcode', 'ios', 'swift', 'git'],
        content: ''
    },
    {
        key: 0,
        title: 'BubbleBubble',
        // duration: '2019-06-29 ~ 2019-07-13',
        duration: '2019.06 ~ 2019.07',
        subTitle: [' # Unity'],
        thumbnail: '/img/game/bub_dark.png',
        backImage: '/img/game/bub_dark.png',
        link: 'game',
        summary: `누구나 아는 추억의 게임을 재현해냈습니다. 
        게임 제작, 보고서 작성, 게임 표지 디자인, 사용설명서 제작까지 해야했던 프로젝트.많이 힘들고 부담스러웠지만, 사실 그것보다 재미있고 더 잘 만들고 싶다는 욕심이 앞선 프로젝트입니다.
        교수님도 믿지 못한 퀄리티의 기말 프로젝트입니다.`,
        skillStack: ['unity'],
        content: ''
    }
];

const section3 = [{
        key: 7,
        title: 'HCI',
        // duration: '2020.01.18 ~ 2020.08.01',
        duration: '2020.01 ~ 2020.08',
        subTitle: ['# 따릉이 Redesign'],
        thumbnail: '/img/hci/hci_dark.png',
        backImage: '/img/hci/hci_dark.png',
        link: 'hci',
        summary: `인간과 컴퓨터의 상호작용을 탐구하여 기존에 출시되었던 '따릉이' 어플을 UX을 고려하여 재탄생시켰습니다.`,
        skillStack: ['xd', 'illustrator'],
        content: ''
    },
    {
        key: 8,
        title: 'Cardnews',
        // duration: '2017-09 ~ 2020-01',
        duration: '2017.09 ~ 2020.01',
        subTitle: ['# photoshop + illustrator '],
        thumbnail: '/img/cardnews/cardnews-dark.png',
        backImage: '/img/cardnews/cardnews-dark.png',
        link: 'cardnews',
        summary: `많은 동아리 활동들을 하면서 다양한 목적으로 컨텐츠를 제작하고 홍보하는 재능을 발휘했습니다. 
    덕분에 동아리 SNS 홍보의 시초가 되었으며, 이해하기 쉽고 심미적인 홍보를 할 수 있었습니다.`,
        skillStack: ['photoshop', 'illustrator'],
        content: ''
    },
    {
        key: 9,
        title: '3D Max Animation',
        duration: '2018.11 ~ 2018.12',
        subTitle: ['# 3D max + After Effects'],
        thumbnail: '/img/max3d/tangled-dark.png',
        backImage: '/img/max3d/tangled-dark.png',
        link: '3d-max',
        summary: `3D 모델링을 통해 3D Animation을 제작했습니다. 짧은 시간이었지만, 심미적으로나 스토리, 완성도에서 인정받았습니다.`,
        skillStack: ['3ds-max', 'after-effects'],
        content: ''
    }
];

export {
    section1,
    section2,
    section3
};