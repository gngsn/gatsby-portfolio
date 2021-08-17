import React from 'react';

const sectionList = [
    {
        key: 0,
        title: 'BACKEND',
        cate: 'backend',
        description: <p>21살 때부터 배운 서버에 대한 호기심, 흥미 그리고 도전. <br/ >더 배우고 싶은 열정으로 쉼없이 뛰어왔습니다.</p>,
        skills: ['aws', 'spring', 'node', 'nginx', 'mysql', 'git', 'linux', 'mongodb', 'php'],
        project: [
            {
                key: 5,
                id: 'cookie-parking',
            }, {
                key: 4,
                id: 'popupcinema',
            }, {
                key: 3,
                id: 'sopt-page'
            }, {
                key: 2,
                id: 'server-head',
            }, {
                key: 1,
                id: 'early-buddy',
            }, {
                key: 0,
                id: 'tooc',
            }
        ]
    },
    {
        key: 1,
        title: 'DEVELOPER',
        cate: 'developer',
        description: <p>코딩을 재미로, 취미로, 놀이로, <br /> 끊임없는 호기심을 갖고 있습니다.</p>,
        isRight: true,
        skills: ['react', 'xcode', 'ios', 'swift', 'angular', 'unity', 'git'],
        project: [{
            key: 4,
            id: 'playlicense'
        }, {
            key: 3,
            id: 'pokit',
        }, {
            key: 2,
            id: 'baby-closet',
        }, {
            key: 1,
            id: 'get-rest',
        }, {
            key: 0,
            id: 'game',
        }]
    },
    {
        key: 2,
        title: 'DESIGNER',
        cate: 'design',
        description: <p>가보지 않은 길에 두려움을 없애고, <br /> 다양한 도전을 시도합니다.</p>,
        skills: ['illustrator', 'photoshop', 'xd', 'after-effects', '3ds-max'],
        project: [{
            key: 2,
            id: 'hci',
        }, {
            key: 1,
            id: 'cardnews',
        }, {
            key: 0,
            id: '3d-max',
        }]
    },
]
export default sectionList;