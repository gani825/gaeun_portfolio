// Window.js
import React, { useRef, useState, useEffect } from 'react';
import './Window.css';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import { motion } from 'framer-motion';

function Window({ id, appId, onClose, onFocus, offsetX, offsetY, zIndex, onDrag }) {
    const windowRef = useRef(null); // 창 DOM 참조

    // 새로고침 여부 판단
    const isReload = performance.getEntriesByType('navigation')[0]?.type === 'reload';

    // 초기 전체화면 상태 (새로고침일 때만 적용)
    const getInitialFullscreen = () => {
        if (isReload) {
            const saved = localStorage.getItem(`window-fullscreen-${id}`);
            return saved === 'true';
        }
        return false; // 새로고침 아닌 경우 전체화면 false
    };

    const [isFullscreen, setIsFullscreen] = useState(getInitialFullscreen); // 전체화면 상태

    // 전체화면 상태가 정의된 이후에 콘텐츠 구성
    const content = {
        about: <About isFullscreen={isFullscreen} />,
        projects: <Projects isFullscreen={isFullscreen} />,
        skills: <Skills isFullscreen={isFullscreen} />,
    };

    // 초기 위치 설정 (새로고침일 때만 localStorage 적용)
    const getInitialPosition = () => {
        const saved = localStorage.getItem(`window-position-${id}`);
        if (saved) {
            return JSON.parse(saved);
        }

        /* 처음 윈도우창 위치 조정 */
        let defaultOffset = { x: offsetX, y: offsetY };
        if (id === 'about') defaultOffset = { x: 650, y: -220 };
        else if (id === 'projects') defaultOffset = { x: 500, y: -180 };
        else if (id === 'skills') defaultOffset = { x: 350, y: -130 };
        return defaultOffset;
    };

    const [position, setPosition] = useState(getInitialPosition); // 위치 상태

    // 창이 화면 밖으로 안 나가도록 제한
    const clampPosition = (x, y) => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const box = windowRef.current?.getBoundingClientRect();
        const width = box?.width || 1000;
        const height = box?.height || 500;

        const clampedX = Math.max(-winWidth + 50, Math.min(x, winWidth - 50));
        const clampedY = Math.max(-winHeight + 50, Math.min(y, winHeight - 50));

        return { x: clampedX, y: clampedY };
    };

    // 마우스 드래그 시작
    const handleMouseDown = (e) => {
        if (!e.target.closest('.window-header')) return;
        if (isFullscreen) return; // 전체화면일 땐 드래그 비활성

        const startX = e.clientX;
        const startY = e.clientY;
        const startOffsetX = position.x;
        const startOffsetY = position.y;

        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            const deltaY = moveEvent.clientY - startY;
            const newX = startOffsetX + deltaX;
            const newY = startOffsetY + deltaY;
            const clamped = clampPosition(newX, newY);
            setPosition(clamped);
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    // 위치 저장 (새로고침일 때만)
    useEffect(() => {
        if (isReload) {
            localStorage.setItem(`window-position-${id}`, JSON.stringify(position));
            onDrag(id, position.x, position.y);
        }
    }, [position]);

    // 전체화면 상태 저장 (새로고침일 때만)
    useEffect(() => {
        if (isReload) {
            localStorage.setItem(`window-fullscreen-${id}`, isFullscreen);
        }
    }, [isFullscreen]);

    // 닫기 버튼 클릭
    const handleCloseClick = () => {
        localStorage.removeItem(`window-position-${id}`);
        localStorage.removeItem(`window-fullscreen-${id}`);
        onClose();
    };

    // 전체화면 토글
    const toggleFullscreen = () => {
        setIsFullscreen((prev) => !prev);
    };

    return (
        <div
            ref={windowRef}
            onMouseDown={(e) => {
                onFocus(); // 포커스 처리
                handleMouseDown(e); // 드래그 시작
            }}
            className={`window ${isFullscreen ? 'fullscreen' : ''}`}
            style={{
                transform: isFullscreen
                    ? 'none'
                    : `translate(calc(50% + ${position.x}px), calc(50% + ${position.y}px))`,
                top: isFullscreen ? '50px' : 'auto', // 메뉴바 높이만큼만 띄움
                left: isFullscreen ? '0' : 'auto', // 왼쪽 여백 제거
                width: isFullscreen ? '100vw' : undefined, // 전체 너비
                height: isFullscreen ? 'calc(100vh - 50px)' : undefined, // 메뉴바 제외 전체높이
                zIndex,
            }}
        >
            {/* 윈도우 헤더 */}
            <div className="window-header">
                <div className="window-buttons">
                    <div className="window-button red" onClick={handleCloseClick}>
                        <span className="button-icon">×</span>
                    </div>
                    <div className="window-button yellow">
                        <span className="button-icon">–</span>
                    </div>
                    <div className="window-button green" onClick={toggleFullscreen}>
                        <span className="button-icon">{isFullscreen ? '⤡' : '⤢'}</span>
                    </div>
                </div>
                <span className="window-appId">{appId}</span>
            </div>

            {/* 윈도우 콘텐츠 */}
            <motion.div
                key={appId}
                className="window-content"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{
                    height: isFullscreen ? 'calc(100% - 20px)' : 'auto',
                    maxHeight: isFullscreen ? 'none' : '550px', // 일반 창일 때는 제한
                    overflow: 'auto',
                }}
            >
                {content[appId]}
            </motion.div>
        </div>
    );
}

export default Window;
