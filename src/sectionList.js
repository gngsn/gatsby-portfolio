import React from 'react';

const skillList= [
    {
        key: 0,
        title: 'BACKEND',
        cate: 'backend',
        description: <p> Curiosity, interest, and the challenge of working with backend systems. A passion for learning and always eager to explore new knowledge. </p>,
        skills: ['spring', 'spring-batch', 'spring-cloud', 'java', 'mysql', 'aws', 'linux'],
        project: ['linegames-bas', 'linegames-openapi']
    },
    {
        key: 1,
        title: 'TOY PROJECTS',
        cate: 'develop',
        description: <p> Code every day for the sake of habit, enjoyment, and the pleasure of learning. Yes, I am an enthusiastic developer. </p>,
        isRight: true,
        skills: ['react', 'gatsbyjs', 'graphql', 'ios', 'swift', 'angular', 'unity'],
        project: ['cookie-parking', 'popupcinema', 'sopt-page', 'server-head', 'early-buddy', 'tooc', 'playlicense', 'pokit', 'baby-closet', 'get-rest', 'game']
    },
    {
        key: 2,
        title: 'DESIGNER',
        cate: 'design',
        description: <p> Enjoy taking on new challenges and persisting until I succeed, without being afraid of failure. </p>,
        skills: ['illustrator', 'photoshop', 'xd', 'after-effects', '3ds-max'],
        project: ['hci', 'cardnews', '3ds-max']
    },
];

export default skillList;