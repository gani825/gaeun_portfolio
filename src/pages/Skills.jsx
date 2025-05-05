import React from 'react';
import './Skills.css';

import html5 from '../assets/skills/html5.jpg';
import css3 from '../assets/skills/css.jpg';
import javascript from '../assets/skills/JavaScript.jpg';
import react from '../assets/skills/react.jpg';
import jquery from '../assets/skills/jquery.jpg';

import github from '../assets/skills/github.jpg';
import webstorm from '../assets/skills/webstorm.jpg';
import firebase from '../assets/skills/firebase.jpg';

import figma from '../assets/skills/figma.jpg';
import photoshop from '../assets/skills/photoshop.jpg';

const skills = [
    {
        category: 'Frontend',
        items: [
            {name: 'HTML5', icon: html5, description: '시맨틱 태그와 폼 요소로 웹 구조를 설계하고 주요 콘텐츠를 구성할 수 있습니다.'},
            {name: 'CSS3', icon: css3, description: 'Flex와 Grid를 활용해 구조적인 레이아웃을 구성할 수 있습니다.'},
            {name: 'JavaScript', icon: javascript, description: 'JavaScript로 웹페이지에 상호작용과 동적인 UI 기능을 구현할 수 있습니다.'},
            {name: 'React', icon: react, description: '컴포넌트 기반 설계로 웹 UI를 구조적이고 효율적으로 개발할 수 있습니다.'},
            {name: 'jQuery', icon: jquery, description: 'jQuery로 DOM 조작과 애니메이션을 간편하게 구현할 수 있습니다.'},
        ],
    },
    {
        category: 'Tools',
        items: [
            {name: 'GitHub', icon: github, description: '버전 관리와 협업을 직접 수행할 수 있습니다.'},
            {name: 'WebStorm', icon: webstorm, description: 'React 프로젝트 중심으로 활용할 수 있습니다.'},
            {name: 'Firebase', icon: firebase, description: '실시간 데이터 처리와 인증으로 효율적인 개발이 가능합니다.'},
        ],
    },
    {
        category: 'Design',
        items: [
            {name: 'Figma', icon: figma, description: '사용자 흐름에 맞는 UI를 설계하고 팀과의 실시간 협업이 가능합니다.'},
            {name: 'Photoshop', icon: photoshop, description: '간단한 이미지 편집과 디자인 요소 제작에 활용할 수 있습니다.'},
        ],
    },
];

function Skills({isFullscreen}) {
    return (
        <div className={`skills-section ${isFullscreen ? 'fullscreen' : ''}`}>
            <div className="skills-container">
                {skills.map((group) => (
                    <div key={group.category} className="skills-group">
                        <h2 className="category-title">
                            {group.category === 'Frontend' && '🕸️ '}
                            {group.category === 'Tools' && '⚙️ '}
                            {group.category === 'Design' && '🎨 '}
                            {group.category}
                        </h2>

                        <div className="skills-grid">
                            {group.items.map((skill) => (
                                <div className="skill-card" key={skill.name}>
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <img src={skill.icon} alt={skill.name}/>
                                            <p>{skill.name}</p>
                                        </div>
                                        <div className="card-back">
                                            <p>{skill.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
