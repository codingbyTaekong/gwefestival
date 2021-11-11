import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Visual.css";


// import Swiper core and required modules

// install Swiper modules
const Visual = () => {
    const container = useRef();
    const visualAni = (e) => {
        if (!document.querySelector('.visual.cloned')) {
            let el = e.target;
            while (!el.classList.contains('visual')) {
                el = el.parentNode;
            }
            const cloneEl = el.cloneNode(true);
            cloneEl.classList.add('cloned')
            cloneEl.style.width = `${el.getBoundingClientRect().width}px`;
            cloneEl.style.height = `${el.getBoundingClientRect().height}px`;
            cloneEl.style.left = `${el.getBoundingClientRect().x}px`;
            container.current.appendChild(cloneEl);
        }
    }
    const stopAni = (e) => {
        if (document.querySelector('.visual.cloned')) {
            document.querySelector('.visual.cloned').remove()
        }
    }

    const resetDepth = (el, cname) => {
        document.querySelectorAll(`.${el}`).forEach(i => {
            if (i.classList.contains(cname)) {
                i.classList.remove(cname)
            }
        })
    }

    const controllback = (e) => {
        resetDepth(e.target.classList[0], 'hover');
        e.target.classList.add('hover')
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <section className="visual-container" ref={container} onMouseLeave={stopAni}>
                <div className="visual" data-idx="1" onMouseEnter={controllback}>
                    <div className="v-back"></div>
                    <div className="txt-box" onMouseEnter={visualAni}>
                        <h1>강연 영상</h1>
                        <span className="v-under-bar"></span>
                        <p className="v-subtxt">정보교육 소양을 위한 강연활동</p>
                        <a href="http://vr.gwefestival.co.kr/scene_98_en.html" className="v-links">강연 영상 바로가기</a>
                    </div>
                    <div className="h_txtbox">
                        <ul>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    미래사회 변화와 디지털리터러시교육이 나아가야 할 방향
                                </li>
                                <span className="h_teacher">전주교대 교수 정영식</span>
                            </div>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    디지털문해력 교육환경 구축과 선도학교 운영 사례
                                </li>
                                <span className="h_teacher">태장초 교사 김승연</span>
                            </div>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    인공지능(AI)교육 선도학교 운영과 수업사례
                                </li>
                                <span className="h_teacher">남원주중 교사 최지연</span>
                            </div>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    SW·AI교육 학교 현장 적용 사례(병설유치원, 영재교육원)
                                </li>
                                <span className="h_teacher">천곡초 교감 정계웅</span>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="visual" data-idx="2" onMouseEnter={controllback}>
                    <div className="v-back"></div>
                    <div className="txt-box" onMouseEnter={visualAni}>
                        <h1>성과 발표</h1>
                        <span className="v-under-bar"></span>
                        <p className="v-subtxt">연구·선도학교 성과발표를 홍보 포스터와<br />영상으로 자유롭게 만나보세요</p>
                        <a href="http://vr.gwefestival.co.kr/scene_1_en.html" className="v-links">성과 발표 바로가기</a>
                    </div>
                    <div className="h_txtbox">
                        <div className="h_container">
                            <div className="h_item">
                                <h3>37교</h3>
                                <p>
                                    디지털리터러시(문해력)<br />
                                    연구·선도학교
                                </p>
                            </div>
                            <div className="h_item">
                                <h3>27교</h3>
                                <p>
                                    인공지능(AI)교육<br />
                                    선도학교
                                </p>
                            </div>
                            <div className="h_item">
                                <h3>2교</h3>
                                <p>
                                    인공지능(AI) 융합교육<br />
                                    중심고등학교
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visual" data-idx="3" onMouseEnter={controllback}>
                    <div className="v-back"></div>
                    <div className="txt-box" onMouseEnter={visualAni}>
                        <h1>체험 부스</h1>
                        <span className="v-under-bar"></span>
                        <p className="v-subtxt">흥미진진한 SW·AI교육·디지털<br />리터러시 교육의 다양한 체험활동을<br />온라인 부스로 참여하세요</p>
                        <a href="http://vr.gwefestival.co.kr/scene_68_en.html" className="v-links">체험 부스 바로가기</a>
                    </div>
                    <div className="h_txtbox">
                        <div className="h_container">
                            <div className="h_item">
                                <h3>10개 부스</h3>
                                <span>디지털문해력교육체험</span>
                            </div>
                            <div className="h_item">
                                <h3>15개 부스</h3>
                                <span>인공지능(AI)교육 체험</span>
                            </div>
                            <div className="h_item">
                                <h3>5개 부스</h3>
                                <span>소프트웨어(SW)교육</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visual" data-idx="4" onMouseEnter={controllback}>
                    <div className="v-back" ></div>
                    <div className="txt-box" onMouseEnter={visualAni}>
                        <h1>개더타운체험</h1>
                        <span className="v-under-bar"></span>
                        <span className="v-subtxt">메타버스 게더타운의 가상공간에서<br />현실처럼 자유롭게 체험하자!</span>
                        <a href="/experience" className="v-links">게더타운체험 바로가기</a>
                    </div>
                    <div className="h_txtbox">
                        <ul>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    회의실 체험(강의실, 모둠실, 휴게실 등)
                                </li>
                            </div>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    화상대화
                                </li>
                            </div>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    방명록 쓰기, 포토존
                                </li>
                            </div>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    무궁화꽃이 피었습니다.
                                </li>
                            </div>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    OX퀴즈
                                </li>
                            </div>
                            <div className="h_list">
                                <li>
                                    <span className="circle"></span>
                                    방탈출게임 에피소드 1,2,3
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mobile-visual">
                <Slider {...settings}>
                    <div className="m-visul" data-idx="1">
                        <div className="m-txtbox">
                            <h1 className="m-title">강연 영상</h1>
                            <span className="m-underbar"></span>
                            <p className="m-subtxt">
                                정보교육 소양을 위한<br />
                                다양한 강연 영상을 만나보세요!
                            </p>
                        </div>
                        <div className="m-h-txtbox">
                            <ul>
                                <div className="h-list">
                                    <li>
                                        <span className="circle"></span>
                                        미래사회 변화와 디지털리터러시교육이 나아가야 할 방향
                                    </li>
                                    <span className="h-teacher">전주교대 교수 정영식</span>
                                </div>
                                <div className="h-list">
                                    <li>
                                        <span className="circle"></span>
                                        디지털문해력 교육환경 구축과 선도학교 운영 사례
                                    </li>
                                    <span className="h-teacher">태장초 교사 김승연</span>
                                </div>
                                <div className="h-list">
                                    <li>
                                        <span className="circle"></span>
                                        인공지능(AI)교육 선도학교 운영과 수업사례
                                    </li>
                                    <span className="h-teacher">남원주중 교사 최지연</span>
                                </div>
                                <div className="h-list">
                                    <li>
                                        <span className="circle"></span>
                                        SW·AI교육 학교 현장 적용 사례(병설유치원, 영재교육원)
                                    </li>
                                    <span className="h-teacher">천곡초 교감 정계웅</span>
                                </div>
                            </ul>
                            <a href="http://vr.gwefestival.co.kr/scene_98_en.html" className="m-link">강연 영상 바로가기</a>
                        </div>
                    </div>
                    <div className="m-visul" data-idx="2">
                        <div className="m-txtbox">
                            <h1 className="m-title">성과 발표</h1>
                            <span className="m-underbar"></span>
                            <p className="m-subtxt">
                                2021년 강원도교육청 지정<br />
                                연구·선도학교 운영 성과를<br />
                                홍보포스터와 영상으로<br />
                                자유롭게 만나보세요!
                            </p>
                        </div>
                        <div className="m-circlebox">
                            <div className="m-circle">
                                <h3>37교</h3>
                                <p>
                                    디지털리터러시(문해력)<br />
                                    연구·선도학교
                                </p>
                            </div>
                            <div className="m-circle">
                                <h3>27교</h3>
                                <p>
                                    인공지능(AI)교육<br />
                                    선도학교
                                </p>
                            </div>
                            <div className="m-circle">
                                <h3>2교</h3>
                                <p>
                                    인공지능(AI)융합교육<br />
                                    중심고등학교
                                </p>
                            </div>
                        </div>
                        <a href="http://vr.gwefestival.co.kr/scene_1_en.html" className="m-link">성과 발표 바로가기</a>
                    </div>
                    <div className="m-visul" data-idx="3">
                        <div className="m-txtbox">
                            <h1 className="m-title">체험 부스</h1>
                            <span className="m-underbar"></span>
                            <p className="m-subtxt">
                                SW·AI교육·디지털문해력교육<br />
                                각 분야별 다양한 체험프로그램을<br />
                                홍보포스터와 체험영상으로<br />
                                만나보는 기회!
                            </p>
                        </div>
                        <div className="m-circlebox">
                            <div className="m-circle">
                                <h3>10개 부스</h3>
                                <p>
                                    디지털문해력교육 체험
                                </p>
                            </div>
                            <div className="m-circle">
                                <h3>15개 부스</h3>
                                <p>
                                    인공지능(AI)교육 체험
                                </p>
                            </div>
                            <div className="m-circle">
                                <h3>5개 부스</h3>
                                <p>
                                    소프트웨어(SW)교육
                                </p>
                            </div>
                        </div>
                        <a href="http://vr.gwefestival.co.kr/scene_68_en.html" className="m-link">체험 부스 바로가기</a>
                    </div>
                    <div className="m-visul" data-idx="4">
                        <div className="m-txtbox">
                            <h1 className="m-title">개더타운체험</h1>
                            <span className="m-underbar"></span>
                            <p className="m-subtxt">
                                메타버스 개더타운 가상공간에서<br />
                                현실처럼 자유롭게 체험해 보세요!
                            </p>
                        </div>
                        <div className="m-h-txtbox">
                            <ul>
                                <div className="h-list">
                                    <li>
                                        <span className="circle"></span>
                                        미래사회 변화와 디지털리터러시교육이 나아가야 할 방향
                                    </li>
                                </div>
                                <div className="h-list">
                                    <li>
                                        <span className="circle"></span>
                                        디지털문해력 교육환경 구축과 선도학교 운영 사례
                                    </li>
                                </div>
                                <div className="h-list">
                                    <li>
                                        <span className="circle"></span>
                                        인공지능(AI)교육 선도학교 운영과 수업사례
                                    </li>
                                </div>
                                <div className="h-list">
                                    <li>
                                        <span className="circle"></span>
                                        SW·AI교육 학교 현장 적용 사례(병설유치원, 영재교육원)
                                    </li>
                                </div>
                            </ul>
                            <a href="/experience" className="m-link">개더타운체험 바로가기</a>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default Visual;