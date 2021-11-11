import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import poster from "../assets/imgs/Poster.png"
import footerLogo from "../assets/imgs/footerLogo.png"
import "./Home.css";
import Visual from "./Visual";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ba1 from "../assets/imgs/event/1.png"
import ba2 from "../assets/imgs/event/2.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventBanner from "./Event";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const PosterWrap = useRef();
    const table_1 = useRef();
    const table_2 = useRef();
    const [check, setCheck] =useState(true)
    const canselevent = (e) => {
        if (check) {
            document.querySelector('.ba-wrap').remove()
        }
    }
    useEffect(() => {
        gsap.fromTo(
            PosterWrap.current,
            {
                opacity: 0,
                x: -20
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'none',
                scrollTrigger: {
                    id: 'posterAni',
                    toggleActions: 'play none none reverse',
                }
            }
        )
        gsap.fromTo(
            table_1.current,
            {
                opacity: 0,
                x: 20
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'none',
                scrollTrigger: {
                    id: 'table_1Ani',
                    trigger: PosterWrap.current,
                    start: 'center+=100',
                    toggleActions: 'play none none reverse',
                    // markers: true
                }
            }
        )
        gsap.fromTo(
            table_2.current,
            {
                opacity: 0,
                x: -20
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'none',
                scrollTrigger: {
                    id: 'table_2Ani',
                    trigger: table_1.current,
                    start: 'center+=100',
                    toggleActions: 'play none none reverse',
                }
            }
        )
    }, [])
    return (
        <>
            <Visual />
            <div className="homebanner"></div>
            <main>
                <div className="posterWrap">
                    <h1 className="mainTitle" ref={PosterWrap}><b className="color">4차 산업혁명 시대</b>를 주도하는 창의융합형 인재 양성</h1>
                    <div className="posterContainer" ref={PosterWrap}>
                        <div className="poster">
                            <img src={poster} alt="포스터"></img>
                            <a className="downloadPoster" href={poster} download="강원 정보교육 성과나눔 축제 포스터">포스터 다운로드</a>
                        </div>
                        <div className="poster_sub">
                            <h3>온·오프라인 강원 정보교육 축제의 장</h3>
                            <h2>강원 정보교육 성과나눔축제</h2>
                            <p>“강원 정보교육 성과나눔축제”는 2021년 강원 정보교육 성과를 공유하는 장으로서,
                                SW·AI교육·디지털문해력교육에 대한 올바른 이해와 관심도 확산,
                                다양한 정보교육기술체험을 통해 정보교육을 생활문화로서 인식,
                                창의융합사고를 심어줌으로써 디지털사회 구성원으로 살아가고, 학습하고,
                                일하는 역량을 배양하는 강원도 최대의 정보교육 축제입니다.
                                <br />
                                <br />
                                작년에 이어 올해도 코로나19가 지속되고 있어 온·오프라인으로 개최됩니다.
                                언제 어디서든 온라인으로 즐기고, 오프라인에서도 직접 즐기는 다양한 체험활동,
                                이벤트와 콘텐츠가 가득한 정보교육 축제를 온 선생님, 친구들 그리고 가족과 함께 즐겨보세요!
                            </p>
                            <div className="festivalInfo">
                                <div className="info_row">
                                    <span className="impact">행사명</span>
                                    <span className="txt">2021 강원 정보교육 성과나눔축제</span>
                                </div>
                                <div className="info_row">
                                    <span className="impact">행사기간</span>
                                    <span className="txt">2021. 11. 15.(월)~11.26.(금), 12일간</span>
                                </div>
                                <div className="info_row">
                                    <span className="impact">주최·주관</span>
                                    <div className="host">
                                        <img src={footerLogo} alt="주최주관"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ContentsWrap" ref={table_1}>
                    <h3>주요내용</h3>
                    <span className="underline"></span>
                    <div className="contentsTable">
                        <span className="tt">개회식</span>
                        <p className="td">메타버스 게더타운 온라인 개회식</p>
                        <span className="tt">강연영상 전시관</span>
                        <p className="td">
                            정보교육 분야별 특강, 운영사례 강연 영상<br />
                            -미래사회의 변화와 학교에서의 디지털문해력교육이 나아가야할 방향<br />
                            -디지털문해력교육 운영사례<br />
                            -인공지능시대! AI교육 운영사례<br />
                            -SW·AI교육의 학교 현장 적용 사례
                        </p>
                        <span className="tt">성과발표 전시관</span>
                        <p className="td">강원도교육청 지정 공모학교 운영결과 전시 및 홍보</p>
                        <span className="tt">신규교감 워크숍</span>
                        <p className="td">2021 신규 교감 대상 정보교육 워크숍</p>
                        <span className="tt">메타버스 게더타운 체험</span>
                        <p className="td">메타버스 게더타운 소개, 회의실체험, 방탈출 게임</p>
                        <span className="tt">찾아가는 정보교육 체험</span>
                        <p className="td">메타버스 체험, SW·AI교육·디지털문해력교육 체험</p>
                        <span className="tt">체험부스 전시관</span>
                        <p className="td">보면서 배우는 정보교육 영상 체험</p>
                        <span className="tt">이벤트</span>
                        <p className="td">
                            온라인 이벤트<br />
                            -체험부스 스템프 이벤트<br />
                            -축제 후기 설문 참여 이벤트
                        </p>
                    </div>
                </div>
                <div className="ContentsWrap" ref={table_2}>
                    <h3>주요 일정표</h3>
                    <span className="underline"></span>
                    <div className="timetables">
                        <div className="item tt">
                            <h1>11.15(월) 15:00</h1>
                        </div>
                        <div className="item tt">
                            <h1>11.16(화)~11.26.(금)</h1>
                            <span>(상시운영)</span>
                        </div>
                        <div className="item tt">
                            <h1>11.6.(토)~12.4.(토)</h1>
                            <span>(매주 토요일)</span>
                        </div>
                        <div className="item tt">
                            <h1>11.19.(금)</h1>
                        </div>
                        <div className="item tt">
                            <h1>11.26.(금)</h1>
                        </div>
                        <div className="item tt">
                            <h1>11.16.(화)~11.26.(금)</h1>
                        </div>
                        <div className="item tt">
                            <h1>11.22.(월)~11.26.(금)</h1>
                        </div>
                        <div className="item tt">
                            <h1>11.20.(토) 10:00<br />11.21.(일) 10:00</h1>
                        </div>
                        <div className="item td">
                            <h1>개회식(메타버스 개더타운)</h1>
                            <a href="https://gather.town/app/8viaqN5z1ypLs6z4/bighall01" className="links">
                                입장하기
                            </a>
                        </div>
                        <div className="item td">
                            <h1>강연영상 전시관</h1>
                            <a href="http://vr.gwefestival.co.kr/scene_98_en.html" className="links">
                                입장하기
                            </a>
                        </div>
                        <div className="item td">
                            <h1>성과발표 전시관</h1>
                            <a href="http://vr.gwefestival.co.kr/scene_1_en.html" className="links">
                                입장하기
                            </a>
                        </div>
                        <div className="item td">
                            <h1>체험부스 전시관</h1>
                            <a href="http://vr.gwefestival.co.kr/scene_68_en.html" className="links">
                                입장하기
                            </a>
                        </div>
                        <div className="item td">
                            <h1>메타버스 개더 타운 체험</h1>
                            <Link to="/experience" className="links">
                                입장하기
                            </Link>
                        </div>
                        <div className="item td">
                            <h1>
                                찾아가는 정보교육 체험<br />
                                초 · 중 20개교
                            </h1>
                        </div>
                        <div className="item td">
                            <h1>신규교감 워크숍(초등)</h1>
                        </div>
                        <div className="item td">
                            <h1>신규교감 워크숍(중등)</h1>
                        </div>
                        <div className="item tdc">
                            <h1>
                                이벤트① <br />
                                체험부스 스탬프 이벤트
                            </h1>
                            <a href="http://vr.gwefestival.co.kr/" className="links">
                                입장하기
                            </a>
                        </div>
                        <div className="item tdc">
                            <h1>이벤트② <br />
                                축제후기 설문 이벤트</h1>
                            <a href="" target="_blank" className="links">
                                입장하기
                            </a>
                        </div>
                        <div className="item tdc">
                            <div className="table-txt-box">
                                <h1>이벤트③-개더타운 특별이벤트</h1>
                                <span>무궁화 꽃이 피었습니다</span>
                            </div>
                            <Link to="/experience" className="links">
                                입장하기
                            </Link>
                        </div>
                        <div className="item tdc">
                            <div className="table-txt-box">

                                <h1>이벤트③-개더타운 특별이벤트</h1>
                                <span>OX퀴즈</span>
                            </div>
                            <Link to="/experience" className="links">
                                입장하기
                            </Link>
                        </div>
                        <div className="item tdc">
                            <div className="table-txt-box">
                                <h1>이벤트③-개더타운 특별이벤트</h1>
                                <span>방탈출게임</span>
                            </div>
                            <Link to="/experience" className="links">
                                입장하기
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <EventBanner/>
        </>
    )
}

export default Home;