import React, { useEffect, useState } from 'react';
import './MenuBar.css';
// (필요 시) About, Projects 등 다른 컴포넌트 import 가능
// import About from './About';

function MenuBar({ onToggleTheme, theme }) {
    // 현재 시간 상태
    const [time, setTime] = useState('');

    // 시계 업데이트 함수
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });
            setTime(formatted);
        };

        updateTime(); // 초기 시간 설정
        const interval = setInterval(updateTime, 1000); // 1초마다 업데이트
        return () => clearInterval(interval); // 클린업
    }, []);

    return (
        <div className="menubar">
            {/* 왼쪽: 타이틀 */}
            <div className="menubar-left">
                <div className="menubar-title">KimGaEun Portfolio</div>
            </div>

            {/* 오른쪽: 테마 토글 + 시간 */}
            <div className="menubar-right">
                <button className="theme-toggle" onClick={onToggleTheme}>
                    {theme === 'light' ? 'Dark mode' : 'Light mode'}
                </button>
                <div className="clock">{time}</div>
            </div>
        </div>
    );
}

export default MenuBar;
