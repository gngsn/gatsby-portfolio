export interface ISection {
    key: number;
    title: string;
    cate: string;
    description: string;
    skills: Array<string>;
    project: Array<string>;
};

const sectionList: Array<ISection> = [
    {
        key: 0,
        title: 'BACKEND',
        cate: 'backend',
        description: 'Curiosity, interest, and the challenge of working with backend systems. A passion for learning and always eager to explore new knowledge.',
        skills: ['java', 'kotlin','py', 'spring','nodejs', 'redis', 'nginx', 'mysql', 'postgres', 'aws', 'kubernetes', 'docker', 'jenkins'],
        // skills: ['java','kotlin','spring','postgres','mysql','nodejs','aws','react','nextjs','emotion,ts,gatsby,kubernetes,docker', 'spring-batch', 'java', 'java', 'jenkins', 'nginx', 'mysql', 'aws', 'linux'],
        project: ['bas', 'openapi', 'developers-site']
    },
    {
        key: 1,
        title: 'SIDE PROJECTS',
        cate: 'develop',
        description: 'Code every day for the sake of habit, enjoyment, and the pleasure of learning. Yes, I am an enthusiastic developer.',
        skills: ['ts', 'swift', 'react', 'gatsby', 'graphql', 'angular', 'styledcomponents', 'sass', 'emotion', 'unity'],
        project: ['cookie-parking', 'popupcinema', 'sopt-page', 'server-head', 'early-buddy', 'tooc', 'playlicense', 'pokit', 'baby-closet', 'get-rest', 'game', 'pondan', 'clayon']
    },
    {
        key: 2,
        title: 'DESIGNER',
        cate: 'design',
        description: 'Enjoy taking on new challenges and persisting until I succeed, without being afraid of failure.',
        skills: ['illustrator', 'photoshop', 'xd', 'after-effects', '3ds-max'],
        project: ['hci', 'cardnews', 'max3ds']
    },
];

export default sectionList;