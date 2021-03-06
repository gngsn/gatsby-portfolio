import React from 'react';
const sectionList = [
    {
        key: 0,
        title: 'BACKEND',
        cate: 'backend',
        description: <p>서버에 대한 호기심, 흥미 그리고 도전. <br/ > 더 배우고 싶은 열정으로 쉼없이 뛰어왔습니다.</p>,
        skills: ['spring', 'node', 'aws', 'nginx', 'docker', 'mysql', 'linux', 'mongodb', 'php'],
        project: ['cookie-parking', 'popupcinema', 'sopt-page', 'server-head', 'early-buddy', 'pondan', 'tooc']
    },
    {
        key: 1,
        title: 'DEVELOPER',
        cate: 'developer',
        description: <p>코딩을 재미로, 취미로, 놀이로, <br /> 끊임없는 호기심을 갖고 있습니다.</p>,
        isRight: true,
        skills: ['react', 'gatsbyjs', 'graphql', 'ios', 'swift', 'angular', 'unity'
        ],
        project: ['playlicense', 'pokit', 'clayon', 'baby-closet', 'get-rest', 'game']
    },
    {
        key: 2,
        title: 'DESIGNER',
        cate: 'design',
        description: <p>가보지 않은 길에 두려움을 없애고, <br /> 다양한 도전을 시도합니다.</p>,
        skills: ['illustrator', 'photoshop', 'xd', 'after-effects', '3ds-max'],
        project: ['hci', 'cardnews', '3ds-max']
    },
]
export default sectionList;