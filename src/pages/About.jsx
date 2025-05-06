import React from 'react';
import './About.css';
import profile from '../assets/icons/photo.jpg'; // 이미지 경로
import {
    FaBirthdayCake,
    FaGraduationCap,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaExternalLinkAlt
} from 'react-icons/fa';

function About({isFullscreen}) {
    return (
        <div className={`about-section ${isFullscreen ? 'fullscreen' : ''}`}>
            <div className="about-container">
                <div className="about-info-block">

                    <div className="about-info">
                        <img src={profile} alt="김가은" className="about-photo"/>
                        <div className="about-text">
                            <div className="about-name">김가은</div>
                            <div className="about-details">
                                <div><FaBirthdayCake className="about-icon"/> 2001.05.03</div>
                                <div><FaGraduationCap className="about-icon icon-edu"/> 대입 검정고시(고졸)</div>
                                <div>
                                    <FaPhoneAlt className="about-icon"/>
                                    <a href="tel:01058305149" className="about-contact-link">
                                        010-5830-5149 <FaExternalLinkAlt className="about-link-icon"/>
                                    </a>
                                </div>
                                <div>
                                    <FaEnvelope className="about-icon"/>
                                    <a href="mailto:kgee0503@gmail.com" className="about-about-contact-link">
                                        kgee0503@gmail.com <FaExternalLinkAlt className="about-link-icon"/>
                                    </a>
                                </div>
                                <div>
                                    <FaGithub className="about-icon"/>
                                    <a href="https://github.com/gani825" target="_blank" rel="noopener noreferrer"
                                       className="contact-link">
                                        github.com/gani825 <FaExternalLinkAlt className="about-link-icon"/>
                                    </a>
                                </div>
                                <div><FaMapMarkerAlt className="about-icon"/> 대구광역시 남구 대명동</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-Introduce">
                        <h6>간략소개</h6>
                        <p>
                            웹 퍼블리싱을 시작하며 개발의 매력을 느꼈고, 국비 학원에서 HTML, CSS, JavaScript, React를 익히며
                            실력을 키웠습니다.
                            PlanFit 프로젝트에서는 React와 Figma를 활용해 UI/UX 설계를 경험했고,
                            HandTrip에서는 백엔드 협업과 API 연동, GitHub 실시간 코드 병합을 경험했습니다.
                            또한, React Hooks로 상태 관리와 성능 최적화를 익히며, 유지보수성과 재사용성을 높이는
                            개발 역량을 키웠습니다.
                            새 환경에 빠르게 적응하고, 팀워크와 사용자 중심 개발을 중시하는 프론트엔드 개발자로 성장하겠습니다.
                        </p>
                    </div>

                    <div className="about-study">
                        <h6>학습과정</h6>
                        <p>
                            <span className="about-academyl">코리아IT아카데미 대구점</span>
                            <span className="about-day"> | 2024.07 ~ 2024.12</span>
                        </p>
                        <p>
                            (디지털디자인) React 활용 스마트 UI/UX 반응형 웹퍼블리셔 양성과정🎨<br/>
                            학원에서 교과과정을 활용하여 컴포넌트, 베리에이션, 디자인, 와이어프레임 등을 학습하였으며,
                            이후 HTML을 통해 웹 구조를 이해하고 CSS를 활용한 스타일 적용, Flexbox·Grid를 이용한 레이아웃 구성,
                            미디어 쿼리를 통한 반응형 웹 디자인 구현 방법을 배웠습니다.
                            jQuery를 활용하여 클릭과 오버 애니메이션을 적용하는 방법을 익힌 후,
                            JavaScript를 통해 동적 UI 요소를 개발하고 웹 페이지에 상호작용 기능을 추가하는 방법을 학습하였습니다.
                            마지막으로 React와 JSX를 활용하여 선언적 UI 개발을 익히고, 팀 프로젝트를 통해 React를 활용한
                            피트니스 캘린더 웹사이트를 제작하였습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
