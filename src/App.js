import React, {useState, useEffect} from 'react';
import Dock from './components/Dock'; // 하단 앱 실행 아이콘 바
import MenuBar from './components/MenuBar'; // 상단 메뉴바
import Window from './components/Window'; // About, Projects, Skills 창
import Intro from './components/Intro'; // 첫 화면 인트로 애니메이션
import './App.css';

// 실행 가능한 앱 정보 정의
const apps = [
    {id: 'about', name: 'About'},
    {id: 'projects', name: 'Projects'},
    {id: 'skills', name: 'Skills'},
];

function App() {
    // 열려있는 앱 상태 (id와 위치 포함)
    const [openApps, setOpenApps] = useState(() => {
        const isReload = performance.navigation.type === 1;
        if (isReload) {
            const saved = localStorage.getItem('openApps');
            return saved ? JSON.parse(saved) : [];
        }
        return []; // 새로고침 아닌 경우 초기화
    });


    // 다크/라이트 모드 상태
    const [theme, setTheme] = useState(() => {
        return (
            localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        );
    });

    // 인트로 상태: 새로고침 시 false, 그 외 true
    const [showIntro, setShowIntro] = useState(() => {
        // const isReload = performance.navigation.type === 1; ← deprecated
        const isReload = performance.getEntriesByType('navigation')[0]?.type === 'reload';
        return !isReload;
    });

// 새로고침일 때만 위치 상태 저장
    useEffect(() => {
        // const isReload = performance.navigation.type === 1; ← deprecated
        const isReload = performance.getEntriesByType('navigation')[0]?.type === 'reload';
        if (isReload) {
            localStorage.setItem('openApps', JSON.stringify(openApps));
        }
    }, [openApps]);


    // 인트로 한번만 실행 (showIntro가 true일 때만 실행)
    useEffect(() => {
        if (showIntro) {
            const timer = setTimeout(() => {
                setShowIntro(false);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [showIntro]);

    // 테마 설정 반영 및 저장
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);


    // 테마 토글
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    // 앱 실행 시 열려있는 목록에 추가 (중복 방지)
    const handleAppClick = (id) => {
        const alreadyOpen = openApps.find(app => app.id === id);
        if (!alreadyOpen) {
            // 앱별 초기 위치 지정
            let offsetX = 0, offsetY = 0;
            if (id === 'about') {
                offsetX = -750;
                offsetY = -250;
            } else if (id === 'projects') {
                offsetX = -800;
                offsetY = 50;
            } else if (id === 'skills') {
                offsetX = -900;
                offsetY = 120;
            }

            setOpenApps([...openApps, {id, offsetX, offsetY}]);
        }
    };

    // 앱 닫기
    const handleClose = (id) => {
        setOpenApps((prev) => prev.filter(app => app.id !== id));
    };

    // 앱 포커스 시 최상단으로 위치
    const handleFocus = (id) => {
        setOpenApps((prev) => {
            const focused = prev.find(app => app.id === id);
            const others = prev.filter(app => app.id !== id);
            return [...others, focused];
        });
    };

    // 드래그로 위치 변경 시 상태에 반영
    const handleDrag = (id, newOffsetX, newOffsetY) => {
        setOpenApps((prev) =>
            prev.map((app) =>
                app.id === id ? {...app, offsetX: newOffsetX, offsetY: newOffsetY} : app
            )
        );
    };

    const fullscreenApp = openApps.find((app) => app.isFullscreen);

    // 인트로 애니메이션은 첫 방문에만 렌더링
    if (showIntro) return <Intro/>;

    return (
        <div className="App">
            <MenuBar onToggleTheme={toggleTheme} theme={theme}/>

            <div className="background-title">
                안녕하세요 :)<br/>
                프론트엔드 개발자 김가은입니다
            </div>
            <div className="background-text">
                저는 국비 지원 과정을 통해 HTML, CSS, JavaScript를 기초부터 배웠고,<br/>
                React와 Figma를 활용한 팀 프로젝트로 개발의 흐름을 익혔습니다.<br/>
                아직 경력은 없지만, 성장 가능성과 배우려는 자세로 준비된 신입입니다.<br/>
                사용자에게 더 나은 웹 경험을 제공하는 프론트엔드 개발자를 꿈꿉니다.
            </div>

            <Dock apps={apps} onAppClick={handleAppClick} fullscreenAppId={fullscreenApp?.id} />

            {/* 여러 앱 창을 렌더링 */}
            {openApps.map((app, index) => (
                <Window
                    key={app.id}
                    id={app.id}
                    appId={app.id}
                    onClose={() => handleClose(app.id)}
                    onFocus={() => handleFocus(app.id)}
                    offsetX={app.offsetX}
                    offsetY={app.offsetY}
                    zIndex={100 + index}
                    onDrag={handleDrag} // 위치 저장을 위한 핸들러 전달
                />
            ))}
        </div>
    );
}

export default App;