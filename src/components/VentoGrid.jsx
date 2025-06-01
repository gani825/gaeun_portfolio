import React, { useState, useEffect } from 'react';
import './VentoGrid.css';

// 이미지와 아이콘 임포트
import gaeunImg1 from '../assets/img/gaeun1.png';
import gaeunImg2 from '../assets/img/gaeun2.png';
import CodingImg from '../assets/img/Coding.jpeg';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

function VentoGrid() {
    // 상태 관리
    const [showFirst, setShowFirst] = useState(true); // 이미지 전환 상태
    const [hoveredField, setHoveredField] = useState(null); // hover 필드
    const [copiedField, setCopiedField] = useState(null); // 복사 완료 필드

    // 복사 핸들러: 텍스트 복사 및 2초 후 상태 초기화
    const handleCopy = (text, field) => {
        if (navigator.clipboard && window.isSecureContext) {
            // HTTPS나 로컬 환경 (clipboard API 사용)
            navigator.clipboard.writeText(text)
                .then(() => {
                    setCopiedField(field);
                    setTimeout(() => setCopiedField(null), 1000);
                })
                .catch(err => {
                    fallbackCopy(text, field);
                });
        } else {
            // HTTP 등 보안 환경이 아닐 때 fallback
            fallbackCopy(text, field);
        }
    };

    // fallback 복사 핸들러: HTTPS 환경이 아닐 경우 임시 textarea를 생성해 텍스트 복사 수행
    const fallbackCopy = (text, field) => {
        // 복사 핸들러: HTTPS 환경이 아닌 경우 임시 textarea를 생성해 텍스트 복사 수행
        const textarea = document.createElement('textarea'); // textarea 생성
        textarea.value = text; // 복사할 텍스트 삽입
        textarea.style.position = 'fixed'; // 화면에 안보이도록 위치 고정
        textarea.style.top = 0;
        textarea.style.left = 0;
        document.body.appendChild(textarea); // DOM에 추가
        textarea.focus(); // 포커스
        textarea.select(); // 텍스트 선택

        try {
            const successful = document.execCommand('copy'); // 복사 시도
            if (successful) {
                setCopiedField(field); // 복사 성공 표시
                setTimeout(() => setCopiedField(null), 1000); // 1초 후 초기화
            } else {
                alert('복사가 지원되지 않습니다. 직접 복사해 주세요.'); // 실패 메시지
            }
        } catch (err) {
            alert('복사 중 오류가 발생했습니다. 직접 복사해 주세요.'); // 예외 처리 메시지
        }
        document.body.removeChild(textarea); // DOM에서 textarea 제거
    };


    // 이미지 전환 타이머 설정 (2초마다 전환)
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst(prev => !prev);
        }, 2000);
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 해제
    }, []);

    // Grid에 렌더링할 카드 요소들
    const gridItems = [
        // 프로필 이미지 전환 카드
        {
            content: (
                <div className="profile-container">
                    <img src={gaeunImg1} alt="Profile1" className={`profile-image ${showFirst ? 'visible' : 'hidden'}`} />
                    <img src={gaeunImg2} alt="Profile2" className={`profile-image ${!showFirst ? 'visible' : 'hidden'}`} />
                </div>
            ),
            className: 'area1'
        },
        // Q&A 카드 (프론트엔드 선택 이유 및 개발 철학)
        {
            content: (
                <div className="interview-card">
                    <h4>🗨️ : 프론트엔드를 선택한 이유는?</h4>
                    <p>
                        🙋‍♀️: 저는 과정을 정리하고 차근차근 해결하는 방식이 저와 잘 맞아요.<br/>
                        프론트엔드는 결과물이 눈앞에서 <strong>실시간으로 구현되고 화면이 완성되어가는 과정</strong>이<br/>
                        매력적으로 다가왔습니다. HTML 태그 하나부터 <strong>화면을 만드는 배움의 즐거움과, <br/>
                        기능 구현마다 점점 완성되어가는 성취감</strong>이 좋아 선택하게 되었습니다.<br/>
                    </p>
                    <h4>🗨️: 개발할 때 가장 중요하게 생각하는 점은?</h4>
                    <p>
                        🙋‍♀️: 저는 <strong>사용자 중심의 경험을 가장 중요</strong>하게 생각합니다.<br/>
                        직관적인 UI와 효율적인 인터페이스를 통해 사용자가 쉽게 이해하고 활용할 수 있는 <br/>
                        서비스를 제공하려고 노력합니다. <strong>협업을 통해 다양한 시각을 반영하고 문제를 함께 <br/>
                        해결하는 과정도 중요</strong>하게 여기고 있습니다.
                    </p>
                </div>
            ),
            className: 'area2'
        },
        // 자기소개 카드
        {
            content: (
                <div className="growth-story-card">
                    <h4>👩‍💻 나의 소개</h4>
                    <p>
                        저는 사용자 중심의 효율적이고 직관적인 UI를 구현하는 신입 프론트엔드 개발자 <br/>
                        김가은입니다. 팀 프로젝트를 진행하면서 <strong>의사소통 부족과 역할 분담의 어려움</strong>으로<br/>
                        일정 지연과 혼란을 경험했습니다. 하지만 이를 넘기지 않고 <strong>팀원들과 문제를 공유</strong>하고,
                        <strong>역할을 재조정하며 부족한 부분을 서로 메워가며 해결</strong>했습니다. 저는 끈기 있게 문제를
                        해결하는 성격이지만, 가끔 완벽을 추구하다 부담을 느끼기도 합니다. 앞으로도 <strong>팀과 <br/>
                        사용자 모두를 만족시키는 개발을 목표</strong>로 꾸준히 배우고 성장해 나가겠습니다.
                    </p>
                </div>
            ),
            className: 'area3'
        },
        // 미정 카드 (추후 컨텐츠 추가 예정)
        {
            content: (
                <div className="studying-code">
                    <img src={CodingImg} alt="Studying" className="notion-image" />
                </div>
            ),
            className: 'area4'
        },
        // 연락처 및 링크 카드
        {
            content: (
                <div className="contact-card">
                    <h4>📬 나의 정보</h4>
                    <ul style={{paddingLeft: 0, marginTop: '5px'}}>
                        <li>
                            📄 <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer"
                                 style={{display: 'inline-flex', alignItems: 'center'}}>
                            입사지원서 <MdDownload className="icon-Download"/>
                        </a>
                        </li>
                        <li>
                            💻 <a href="https://github.com/gani825" target="_blank" rel="noopener noreferrer"
                                 style={{display: 'inline-flex', alignItems: 'center'}}>
                            GitHub <FaExternalLinkAlt className="icon-link"/>
                        </a>
                        </li>
                        <li>
                            ✉️ <span
                            onClick={() => handleCopy('kgee@gmail.com', 'email')}
                            onMouseEnter={() => setHoveredField('email')}
                            onMouseLeave={() => setHoveredField(null)}
                            style={{cursor: 'pointer', textDecoration: 'underline', position: 'relative'}}
                        > kgee@gmail.com
                            {hoveredField === 'email' && !copiedField && <span className="tooltip">클릭 시 복사</span>}
                            {copiedField === 'email' && <span className="tooltip">복사 완료되었습니다.</span>}
                             </span>
                        </li>
                        <li>
                            📞 <span
                            onClick={() => handleCopy('010-5830-5149', 'phone')}
                            onMouseEnter={() => setHoveredField('phone')}
                            onMouseLeave={() => setHoveredField(null)}
                            style={{cursor: 'pointer', textDecoration: 'underline', position: 'relative'}}
                        > 010-5830-5149
                            {hoveredField === 'phone' && !copiedField && <span className="tooltip">클릭 시 복사</span>}
                            {copiedField === 'phone' && <span className="tooltip">복사 완료되었습니다.</span>}
                             </span>
                        </li>
                    </ul>
                </div>
            ),
            className: 'area5'
        },
        // 마지막 마무리 인사 카드
        {
            content: (
                <div className="final-message">
                    <h4>🙇 마무리 인사</h4>
                    <p>
                        저의 포트폴리오를 봐주셔서 감사합니다.<br/>
                        사용자에게 더 나은 경험을 제공하기 위해 <strong>꾸준히 배우고 노력</strong>하겠습니다.<br/>
                        이제 막 첫걸음을 뗀 만큼, <strong>배움의 자세로 도전하며 성장해</strong> 나가겠습니다.
                    </p>
                </div>
            ),
            className: 'area6'
        }
    ];

    // Grid 렌더링
    return (
        <div className="vento-grid">
            {gridItems.map((item, index) => (
                <div key={index} className={`vento-card ${item.className}`}>
                    {item.content}
                </div>
            ))}
        </div>
    );
}

export default VentoGrid;
