import React from 'react';
import './Projects.css';

const projectData = [
    {
        img: require('../assets/img/HandTrip.jpg'),
        darkness: 'HandTrip',
        title: 'HandTrip',
        type: '협업',
        summary: '일본 여행지 탐색, 리뷰 작성, 맞춤형 여행 플래너 기능을 제공합니다.\n' +
            '사용자 선호를 기반으로 여행지를 추천하며, 프로필과 기록 관리로 개인화된 \n여행 계획이 가능합니다.' ,
        role: ' 와이어프레임, 디자인과 함께 FN 개발을 맡아 메인 페이지, \n플래너 작성·조회·수정 페이지, 마이페이지를 React로 구현했습니다.',
        tools: ['백엔드 : SpringBoot   프론트엔드 : WebStorm, React, Css\n' +
        '데이터베이스 : MYSQL, HIBERNATE   배포 : AWS 테스트서버 : JUNITS \n' +
        '협업도구 : Notion, GitHub, Figma'],
        deploy: 'https://gani825.github.io/HandTrip/#/',
        github: 'https://github.com/bong123123/Team_HandTrip_FN',
        ppt: 'https://drive.google.com/file/d/148_qEvYeeoVQRi-UOXkLH3Ix_xrMLc4B/view?usp=drive_link',
    },
    {
        img: require('../assets/img/PlanFit.jpg'),
        darkness: 'PlanFit',
        title: 'PlanFit',
        type: '협업',
        summary: '운동 일정을 관리하고 목표를 설정할 수 있는 웹사이트입니다.\n' +
            '사용자는 캘린더로 계획을 세우고 실천 여부를 기록할 수 있으며,\n' +
            '실시간 날씨 정보도 확인할 수 있습니다.' ,
        role: '디자인, 와이어프레임, 스토리보드 작성과 함께 홈, 마이페이지 CSS 작업, \n' +
            'AJAX를 활용하여 날씨 정보 출력 기능을 개발하고, 홈페이지와 캘린더 연동, \n' +
            '캘린더 페이지 CSS, React 작업을 맡아 사용자 경험을 개선했습니다.',
        tools: ['디자인 & 와이어프레임 : Figma   프론트엔드: HTML, CSS, React \n' +
        '웹 기술: AJAX   코드 에디터: WebStorm   데이터베이스: Firebase(Realtime Database, Authentication)'],
        deploy: 'https://gani825.github.io/PlanFit/#/',
        github: 'https://github.com/gani825/PlanFit',
        ppt: 'https://drive.google.com/file/d/1jzPK9NF-yhiLw59JbqfEzQk8hiyaEYGa/view?usp=drive_link',
    },
    {
        img: require('../assets/img/PlanFit.jpg'),
        darkness: 'PlanFit',
        title: 'PlanFit',
        type: '협업',
        summary: '운동 일정을 관리하고 목표를 설정할 수 있는 웹사이트입니다.\n' +
            '사용자는 캘린더로 계획을 세우고 실천 여부를 기록할 수 있으며,\n' +
            '실시간 날씨 정보도 확인할 수 있습니다.' ,
        role: '디자인, 와이어프레임, 스토리보드 작성과 함께 홈, 마이페이지 CSS 작업, \n' +
            'AJAX를 활용하여 날씨 정보 출력 기능을 개발하고, 홈페이지와 캘린더 연동, \n' +
            '캘린더 페이지 CSS, React 작업을 맡아 사용자 경험을 개선했습니다.',
        tools: ['디자인 & 와이어프레임 : Figma   프론트엔드: HTML, CSS, React \n' +
        '웹 기술: AJAX   코드 에디터: WebStorm   데이터베이스: Firebase(Realtime Database, Authentication)'],
        deploy: 'https://gani825.github.io/PlanFit/#/',
        github: 'https://github.com/gani825/PlanFit',
        ppt: 'https://drive.google.com/file/d/1jzPK9NF-yhiLw59JbqfEzQk8hiyaEYGa/view?usp=drive_link',
    },
];

function Projects({ isFullscreen }) {
    return (
        <div className={`projects-section ${isFullscreen ? 'fullscreen' : ''}`}>
            <div className="projects-container">
                {projectData.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div className="project-inner">
                            <div className="project-front" style={{ backgroundImage: `url(${project.img})` }}>
                                <div className={`image-darken ${project.darkness}`} />
                                {!isFullscreen && (
                                    <div className="project-overlay">
                                        <h3>
                                            {project.title}
                                            {project.type && <span className="project-type"> ({project.type})</span>}
                                        </h3>
                                        <p style={{ whiteSpace: 'pre-wrap' }}>{project.summary}</p>
                                        <p style={{ whiteSpace: 'pre-wrap' }}><span>📌 담당 :</span> {project.role}</p>
                                        <p style={{ whiteSpace: 'pre-wrap' }}><span>🛠 작업 툴 :</span> {project.tools?.join(', ')}</p>
                                    </div>
                                )}
                            </div>

                            {isFullscreen && (
                                <>
                                    <div className="project-description">
                                        <h3>
                                            {project.title}
                                            {project.type && <span className="project-type"> ({project.type})</span>}
                                        </h3>
                                        <p>{project.summary}</p>
                                        <p><strong>📌 담당 :</strong> {project.role}</p>
                                        <p><strong>🛠 작업 툴 :</strong> {project.tools?.join(', ')}</p>
                                    </div>
                                    <div className="project-links">
                                        {project.deploy && <a href={project.deploy} target="_blank" rel="noreferrer">🔗 배포</a>}
                                        {project.github && <a href={project.github} target="_blank" rel="noreferrer">💻 GitHub</a>}
                                        {project.ppt && <a href={project.ppt} target="_blank" rel="noreferrer">📄 발표자료</a>}
                                    </div>
                                </>
                            )}

                            {!isFullscreen && (
                                <div className="project-back">
                                    {project.deploy && <a href={project.deploy} target="_blank" rel="noreferrer">🔗 배포</a>}
                                    {project.github && <a href={project.github} target="_blank" rel="noreferrer">💻 GitHub</a>}
                                    {project.ppt && <a href={project.ppt} target="_blank" rel="noreferrer">📄 발표자료</a>}
                                </div>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
