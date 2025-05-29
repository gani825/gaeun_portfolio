import React, {useState, useEffect} from 'react';
import './VentoGrid.css';

import gaeunImg1 from '../assets/img/gaeun1.png';
import gaeunImg2 from '../assets/img/gaeun2.png';
import notionImg from '../assets/img/Studying.jpg';

import {FaExternalLinkAlt} from 'react-icons/fa'; // react-icons 설치
import {MdDownload} from 'react-icons/md';

function VentoGrid() {
    const [showFirst, setShowFirst] = useState(true); // 첫 번째 이미지 표시 여부
    const [hoveredField, setHoveredField] = useState(null);
    const [copiedField, setCopiedField] = useState(null);

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000); // 2초 후 복사 상태 해제
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst(prev => !prev); // 이미지 토글
        }, 2000); // 2초마다 전환
        return () => clearInterval(interval);
    }, []);

    const gridItems = [
        {
            content: (
                <div className="profile-container">
                    {/* 두 이미지를 동시에 렌더링하고 opacity로 전환 */}
                    <img
                        src={gaeunImg1}
                        alt="Profile1"
                        className={`profile-image ${showFirst ? 'visible' : 'hidden'}`}
                    />
                    <img
                        src={gaeunImg2}
                        alt="Profile2"
                        className={`profile-image ${!showFirst ? 'visible' : 'hidden'}`}
                    />
                </div>
            ),
            className: 'area1'
        },
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
        {
            content: (
                <div className="notion-record">
                    <img src={notionImg} alt="공부 기록 이미지" className="notion-img"/>
                    <div className="notion-link">
                        <p>📚 학습했던 내용을 복습하고 정리한 노션 페이지입니다.<br/>
                            🖋️ 이해가 어려운 부분까지도 꼼꼼히 정리하고자 노력하며, <br/>
                            기록했습니다.
                        </p>
                        <a href="https://www.notion.so/201f444f60178036b039ec798f9a7b77" target="_blank"
                           rel="noopener noreferrer">
                            👉 수업 기록 보러가기<FaExternalLinkAlt/>
                        </a>
                    </div>
                </div>
            ),
            className: 'area4'
        },
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
            ), className: 'area6'
        }
    ];

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
