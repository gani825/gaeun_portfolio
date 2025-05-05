// Dock.js
import React from 'react';
import './Dock.css';

// 아이콘 이미지 import
import aboutIcon from '../assets/icons/about.svg';
import projectsIcon from '../assets/icons/projects.svg';
import skillsIcon from '../assets/icons/skills.svg';

// app id와 아이콘 파일 매핑
const iconMap = {
    about: aboutIcon,
    projects: projectsIcon,
    skills: skillsIcon,
};

function Dock({ apps, onAppClick}) {
    return (
        <div
            className="dock"
            style={{ zIndex: 1000 }}
        >
            {/* 앱 버튼 리스트 렌더링 */}
            {apps.map((app) => (
                <button
                    key={app.id}
                    className="dock-button"
                    onClick={() => onAppClick(app.id)} // 아이콘 클릭 시 appId 전달
                >
                    {/* 아이콘 이미지 */}
                    <div className="dock-icon">
                        <img src={iconMap[app.id]} alt={app.name} />
                    </div>

                    {/* 호버 시 보여질 앱 이름 */}
                    <span className="dock-label">{app.name}</span>
                </button>
            ))}
        </div>
    );
}

export default Dock;
