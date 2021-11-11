import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "../assets/css/fonts.css"
import "./Header.css"
import logo from "../assets/imgs/LOGO.png"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri";
import styled from "styled-components";
import SubMenu from "./SubMenu";


const Header = () => {
    const underBar = useRef();
    const back = useRef();
    const style = {
        left: "0"
    }

    function ResetDepth(Node, ClassName) {
        document.querySelectorAll(Node).forEach(el => {
            if (el.classList.contains(ClassName)) {
                el.classList.remove(ClassName)
            }
        })
    }

    function controllUnderBar(e) {
        if (e.target.classList.contains('gnb_depth1')) {
            let underBar_W = underBar.current.getBoundingClientRect().width
            let depthTitle_W = e.target.getBoundingClientRect().width
            underBar.current.style = `left : ${e.target.getBoundingClientRect().x - ((underBar_W - depthTitle_W) / 2)}px; opacity: 1;`
            ResetDepth('.gnb_depth2', 'opened');
            if (e.target.querySelector('.gnb_depth2')) {
                e.target.querySelector('.gnb_depth2').classList.add('opened');
                back.current.classList.add('opened');
            } else {
                back.current.classList.remove('opened');
            }
        }
    }

    function controllDepth3(e) {
        if (e.target.querySelector('.gnb_depth3_box')) {
            ResetDepth('.gnb_depth3_box', 'opened');
            e.target.querySelector('.gnb_depth3_box').classList.add('opened');
        }
    }

    function onLeaveHeader(e) {
        underBar.current.style = `left : ${underBar.current.getBoundingClientRect().x}px; opacity: 1;`
        back.current.classList.remove('opened');
        ResetDepth('.gnb_depth3_box', 'opened');
        ResetDepth('.gnb_depth2', 'opened');
    }
    const MobileGnb = [
        {
            title: "행사개요",
            path: "/",
        },
        {
            title: "인사말",
            path: "http://vr.gwefestival.co.kr/scene_67_en.html",
        },
        {
            title: "강연 영상",
            path: "http://vr.gwefestival.co.kr/scene_98_en.html",
        },
        {
            title: "성과 발표",
            iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
            iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
            subNav: [
                {
                    title: "디지털리터러시교육 선도학교",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "구정초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_1_en.html",
                            },
                            {
                                title: "솔올중학교",
                                path: "http://vr.gwefestival.co.kr/scene_2_en.html/",
                            },
                            {
                                title: "대진초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_3_en.html/",
                            },
                            {
                                title: "동해초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_4_en.html/",
                            },
                            {
                                title: "예람중학교",
                                path: "http://vr.gwefestival.co.kr/scene_5_en.html/",
                            },
                            {
                                title: "오저초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_6_en.html/",
                            },
                            {
                                title: "임원중학교",
                                path: "http://vr.gwefestival.co.kr/scene_7_en.html/",
                            },
                            {
                                title: "송포초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_8_en.html/",
                            },
                            {
                                title: "현북중학교",
                                path: "http://vr.gwefestival.co.kr/scene_9_en.html/",
                            },
                            {
                                title: "양구초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_10_en.html/",
                            },
                            {
                                title: "석천중학교",
                                path: "http://vr.gwefestival.co.kr/scene_11_en.html/",
                            },
                            {
                                title: "도촌초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_12_en.html/",
                            },
                            {
                                title: "한전초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_13_en.html/",
                            },
                            {
                                title: "마차초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_14_en.html/",
                            },
                            {
                                title: "영월중학교",
                                path: "http://vr.gwefestival.co.kr/scene_15_en.html/",
                            },
                            {
                                title: "고산초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_16_en.html/",
                            },
                            {
                                title: "육민관중학교",
                                path: "http://vr.gwefestival.co.kr/scene_17_en.html/",
                            },
                            {
                                title: "원주여중",
                                path: "http://vr.gwefestival.co.kr/scene_18_en.html/",
                            },
                            {
                                title: "기린초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_19_en.html/",
                            },
                            {
                                title: "함백초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_20_en.html/",
                            },
                            {
                                title: "정선중학교",
                                path: "http://vr.gwefestival.co.kr/scene_21_en.html/",
                            },
                            {
                                title: "증산초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_22_en.html/",
                            },
                            {
                                title: "장흥초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_23_en.html/",
                            },
                            {
                                title: "김화중학교",
                                path: "http://vr.gwefestival.co.kr/scene_24_en.html/",
                            },
                            {
                                title: "천전초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_25_en.html/",
                            },
                            {
                                title: "남춘천중학교",
                                path: "http://vr.gwefestival.co.kr/scene_26_en.html/",
                            },
                            {
                                title: "황지초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_27_en.html/",
                            },
                            {
                                title: "철암중학교",
                                path: "http://vr.gwefestival.co.kr/scene_28_en.html/",
                            },
                            {
                                title: "삼생초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_29_en.html/",
                            },
                            {
                                title: "내면중학교",
                                path: "http://vr.gwefestival.co.kr/scene_30_en.html/",
                            },
                            {
                                title: "성북초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_31_en.html/",
                            },
                            {
                                title: "횡성중학교",
                                path: "http://vr.gwefestival.co.kr/scene_32_en.html/",
                            },
                            {
                                title: "태장초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_33_en.html/",
                            },
                            {
                                title: "북원중학교",
                                path: "http://vr.gwefestival.co.kr/scene_34_en.html/",
                            },
                        ]
                },
                {
                    title: "인공지능(AI)교육 선도학교",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "구곡초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_38_en.html/",
                            },
                            {
                                title: "귀둔초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_39_en.html/",
                            },
                            {
                                title: "동송초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_40_en.html/",
                            },
                            {
                                title: "무실초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_41_en.html/",
                            },
                            {
                                title: "문혜초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_42_en.html/",
                            },
                            {
                                title: "버들초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_43_en.html/",
                            },
                            {
                                title: "장흥초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_44_en.html/",
                            },
                            {
                                title: "천전초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_45_en.html/",
                            },
                            {
                                title: "춘천교대부설초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_46_en.html/",
                            },
                            {
                                title: "춘천삼육초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_47_en.html/",
                            },
                            {
                                title: "태서초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_48_en.html/",
                            },
                            {
                                title: "평원초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_49_en.html/",
                            },
                            {
                                title: "한솔초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_50_en.html/",
                            },
                            {
                                title: "현북초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_51_en.html/",
                            },
                            {
                                title: "황둔초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_52_en.html/",
                            },
                            {
                                title: "황지초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_53_en.html/",
                            },
                            {
                                title: "남원주중학교",
                                path: "http://vr.gwefestival.co.kr/scene_54_en.html/",
                            },
                            {
                                title: "남춘천중학교",
                                path: "http://vr.gwefestival.co.kr/scene_55_en.html/",
                            },
                            {
                                title: "단구중학교",
                                path: "http://vr.gwefestival.co.kr/scene_56_en.html/",
                            },
                            {
                                title: "속초해랑중학교",
                                path: "http://vr.gwefestival.co.kr/scene_57_en.html/",
                            },
                            {
                                title: "치악중학교",
                                path: "http://vr.gwefestival.co.kr/scene_58_en.html/",
                            },
                            {
                                title: "강릉명륜고등학교",
                                path: "http://vr.gwefestival.co.kr/scene_59_en.html/",
                            },
                            {
                                title: "강원사대부설고등학교",
                                path: "http://vr.gwefestival.co.kr/scene_60_en.html/",
                            },
                            {
                                title: "북원여자고등학교",
                                path: "http://vr.gwefestival.co.kr/scene_61_en.html/",
                            },
                            {
                                title: "원주고등학교",
                                path: "http://vr.gwefestival.co.kr/scene_62_en.html/",
                            },
                            {
                                title: "홍천고등학교",
                                path: "http://vr.gwefestival.co.kr/scene_63_en.html/",
                            },
                            {
                                title: "강릉오성학교",
                                path: "http://vr.gwefestival.co.kr/scene_64_en.html/",
                            }
                        ]
                },
                {
                    title: "디지털리터러시교육 연구학교",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "반곡초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_35_en.html/",
                            },
                            {
                                title: "평창중학교",
                                path: "http://vr.gwefestival.co.kr/scene_36_en.html/",
                            },
                            {
                                title: "내대초등학교",
                                path: "http://vr.gwefestival.co.kr/scene_37_en.html/",
                            },
                        ]
                },
                {
                    title: "인공지능(AI) 융합교육 중심고등학교",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "치악고등학교",
                                path: "http://vr.gwefestival.co.kr/scene_65_en.html/",
                            },
                            {
                                title: "유봉여고",
                                path: "http://vr.gwefestival.co.kr/scene_66_en.html/",
                            }
                        ]
                }
            ]
        },
        {
            title: "체험 부스",
            iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
            iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
            subNav: [
                {
                    title: "디지털리터러시(문해력)교육",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "웹툰만들기",
                                path: "http://vr.gwefestival.co.kr/scene_68_en.html",
                            },
                            {
                                title: "얼굴 뱃지",
                                path: "http://vr.gwefestival.co.kr/scene_69_en.html",
                            },
                            {
                                title: "Comica",
                                path: "http://vr.gwefestival.co.kr/scene_70_en.html",
                            },
                            {
                                title: "다빈치 리졸브",
                                path: "http://vr.gwefestival.co.kr/scene_71_en.html",
                            },
                            {
                                title: "라인드로잉",
                                path: "http://vr.gwefestival.co.kr/scene_72_en.html",
                            },
                            {
                                title: "QR코드명함",
                                path: "http://vr.gwefestival.co.kr/scene_73_en.html",
                            },
                            {
                                title: "PAPS코치 앱",
                                path: "http://vr.gwefestival.co.kr/scene_74_en.html",
                            },
                            {
                                title: "스톱모션 애니",
                                path: "http://vr.gwefestival.co.kr/scene_75_en.html",
                            },
                            {
                                title: "디지털시민되기",
                                path: "http://vr.gwefestival.co.kr/scene_76_en.html",
                            },
                            {
                                title: "구글프레젠테이션",
                                path: "http://vr.gwefestival.co.kr/scene_77_en.html",
                            }
                        ]
                },
                {
                    title: "인공지능(AI)교육",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "미리캔버스",
                                path: "http://vr.gwefestival.co.kr/scene_78_en.html",
                            },
                            {
                                title: "크롬 뮤직랩",
                                path: "http://vr.gwefestival.co.kr/scene_79_en.html",
                            },
                            {
                                title: "카드보드 VR",
                                path: "http://vr.gwefestival.co.kr/scene_80_en.html",
                            },
                            {
                                title: "머신러닝포키즈",
                                path: "http://vr.gwefestival.co.kr/scene_81_en.html",
                            },
                            {
                                title: "퀴즈앤세상",
                                path: "http://vr.gwefestival.co.kr/scene_82_en.html",
                            },
                            {
                                title: "퀵 드로우",
                                path: "http://vr.gwefestival.co.kr/scene_83_en.html",
                            },
                            {
                                title: "AI for Oceans",
                                path: "http://vr.gwefestival.co.kr/scene_84_en.html",
                            },
                            {
                                title: "마인크래프트",
                                path: "http://vr.gwefestival.co.kr/scene_85_en.html",
                            },
                            {
                                title: "비트 작곡",
                                path: "http://vr.gwefestival.co.kr/scene_86_en.html",
                            },
                            {
                                title: "아트앤컬쳐",
                                path: "http://vr.gwefestival.co.kr/scene_87_en.html",
                            },
                            {
                                title: "오토드로우",
                                path: "http://vr.gwefestival.co.kr/scene_88_en.html",
                            },
                            {
                                title: "두더쥐잡기",
                                path: "http://vr.gwefestival.co.kr/scene_89_en.html",
                            },
                            {
                                title: "엔트리AI",
                                path: "http://vr.gwefestival.co.kr/scene_90_en.html",
                            },
                            {
                                title: "바디신스",
                                path: "http://vr.gwefestival.co.kr/scene_91_en.html",
                            },
                            {
                                title: "아키네이터",
                                path: "http://vr.gwefestival.co.kr/scene_92_en.html",
                            },
                        ]
                },
                {
                    title: "소프트웨어(SW)교육",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "드론코딩",
                                path: "http://vr.gwefestival.co.kr/scene_93_en.html",
                            },
                            {
                                title: "갤러그게임",
                                path: "http://vr.gwefestival.co.kr/scene_94_en.html",
                            },
                            {
                                title: "레고위두",
                                path: "http://vr.gwefestival.co.kr/scene_95_en.html",
                            },
                            {
                                title: "뚜루뚜루코딩봇",
                                path: "http://vr.gwefestival.co.kr/scene_96_en.html",
                            },
                            {
                                title: "마이크로비트 마퀸",
                                path: "http://vr.gwefestival.co.kr/scene_97_en.html",
                            }
                        ]
                }
            ]
        },
        {
            title: "개더타운체험",
            path: "/experience",
        }
    ]


    const ExitIcon = styled.div`
        font-size: 30px;
        position: absolute;
        top: 25px;
        right: 25px;
        color : #fff;
        cursor : pointer;
    `

    const SidebarNav = styled.div`
        transform : translateX(${({ sidebar }) => (sidebar ? '0' : '100%')});
    `
    const SidebarWrap = styled.div`
        width : 100%
    `

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
        if (sidebar) {
            document.querySelector('body').style.overflowY = "auto"
        } else {
            document.querySelector('body').style.overflowY = "hidden"
        }
    }

    return (
        <header onMouseLeave={onLeaveHeader}>
            <section className="hd_01">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="navicon">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </div>
                </div>
            </section>
            <section className="hd_02">
                <ul className="gnb">
                    <Link to="/">
                        <li onMouseEnter={controllUnderBar} className="gnb_depth1">행사개요</li>
                    </Link>
                        <a onMouseEnter={controllUnderBar} className="gnb_depth1" href="http://vr.gwefestival.co.kr/scene_67_en.html">인사말</a>
                        <a onMouseEnter={controllUnderBar} className="gnb_depth1" href="http://vr.gwefestival.co.kr/scene_98_en.html">강연 영상</a>
                    <li onMouseEnter={controllUnderBar} className="gnb_depth1">
                        성과 발표
                        <ul className="gnb_depth2 take_depth3" data-idx="1">
                            <li onMouseEnter={controllDepth3}>
                                2021 디지털리터러시교육 선도학교
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_1_en.html">구정초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_2_en.html">솔올중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_3_en.html">대진초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_4_en.html">동해초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_5_en.html">예람중학교</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_6_en.html">오저초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_7_en.html">임원중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_8_en.html">송포초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_9_en.html">현북중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_10_en.html">양구초등학교</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_11_en.html">석천중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_12_en.html">도촌초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_13_en.html">한전초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_14_en.html">마차초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_15_en.html">영월중학교</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_16_en.html">고산초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_17_en.html">육민관중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_18_en.html">원주여중</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_19_en.html">기린초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_20_en.html">함백초등학교</a></li>

                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_21_en.html">정선중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_22_en.html">증산초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_23_en.html">장흥초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_24_en.html">김화중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_25_en.html">천전초등학교</a></li>

                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_26_en.html">남춘천중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_27_en.html">황지초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_28_en.html">철암중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_29_en.html">삼생초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_30_en.html">내면중학교</a></li>

                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_31_en.html">성북초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_32_en.html">횡성중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_33_en.html">태장초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_34_en.html">북원중학교</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2021 인공지능(AI)교육 선도학교
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_38_en.html">구곡초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_39_en.html">귀둔초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_40_en.html">동송초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_41_en.html">무실초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_42_en.html">문혜초등학교</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_43_en.html">버들초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_44_en.html">장흥초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_45_en.html">천전초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_46_en.html">춘천교대부설초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_47_en.html">춘천삼육초등학교</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_48_en.html">태서초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_49_en.html">평원초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_50_en.html">한솔초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_51_en.html">현북초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_52_en.html">황둔초등학교</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_53_en.html">황지초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_54_en.html">남원주중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_55_en.html">남춘천중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_56_en.html">단구중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_57_en.html">속초해랑중학교</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_58_en.html">치악중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_59_en.html">강릉명륜고등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_60_en.html">강원사대부설고등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_61_en.html">북원여자고등학교</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_62_en.html">원주고등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_63_en.html">홍천고등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_64_en.html">강릉오성학교</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2020~2021 디지털리터러시교육 연구학교
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_35_en.html">반곡초등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_36_en.html">평창중학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_37_en.html">내대초등학교</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2020~2021 인공지능(AI) 융합교육 중심고등학교
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_65_en.html">치악고등학교</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_66_en.html">유봉여고</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li onMouseEnter={controllUnderBar} className="gnb_depth1">
                        체험 부스
                        <ul className="gnb_depth2 take_depth3" data-idx="2">
                            <li onMouseEnter={controllDepth3}>
                                디지털리터러시(문해력)교육
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_68_en.html">웹툰만들기</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_69_en.html">얼굴 뱃지</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_70_en.html">Comica</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_71_en.html">다빈치 리졸브</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_72_en.html">라인드로잉</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_73_en.html">QR코드명함</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_74_en.html">PAPS코치 앱</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_75_en.html">스톱모션 애니</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_76_en.html">디지털시민되기</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_77_en.html">구글프레젠테이션</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                인공지능(AI)교육
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_78_en.html">미리캔버스</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_79_en.html">크롬 뮤직랩</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_80_en.html">카드보드 VR</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_81_en.html">머신러닝포키즈</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_82_en.html">퀴즈앤세상</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_83_en.html">퀵 드로우</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_84_en.html">AI for Oceans</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_85_en.html">마인크래프트</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_86_en.html">비트 작곡</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_87_en.html">아트앤컬쳐</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_88_en.html">오토드로우</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_89_en.html">두더쥐잡기</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_90_en.html">엔트리AI</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_91_en.html">바디신스</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_92_en.html">아키네이터</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                소프트웨어(SW)교육
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="http://vr.gwefestival.co.kr/scene_93_en.html">드론코딩</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_94_en.html">갤러그게임</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_95_en.html">레고위두</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_96_en.html">뚜루뚜루코딩봇</a></li>
                                        <li><a href="http://vr.gwefestival.co.kr/scene_97_en.html">마이크로비트 마퀸</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <Link to="/experience">
                        <li onMouseOver={controllUnderBar} className="gnb_depth1">게더타운체험</li>
                    </Link>
                </ul>
                <span className="underBar" ref={underBar} style={style}></span>
            </section>
            <section className="gnb_depth_back" ref={back}></section>
            <SidebarNav className="SidebarNav" sidebar={sidebar}>
                <SidebarWrap>
                    <ExitIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </ExitIcon>
                    <h3 className="m_gnb_title">MENU</h3>
                    {MobileGnb.map((item, index) => {
                        return <SubMenu item={item} i={index} onClick={showSidebar} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </header>
    )
}

export default Header;