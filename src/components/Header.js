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
            path: "/vr/67",
        },
        {
            title: "강연 영상",
            path: "/vr/98",
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
                                path: "/vr/1",
                            },
                            {
                                title: "솔올중학교",
                                path: "/vr/2",
                            },
                            {
                                title: "대진초등학교",
                                path: "/vr/3",
                            },
                            {
                                title: "동해초등학교",
                                path: "/vr/4",
                            },
                            {
                                title: "예람중학교",
                                path: "/vr/5",
                            },
                            {
                                title: "오저초등학교",
                                path: "/vr/6",
                            },
                            {
                                title: "임원중학교",
                                path: "/vr/7",
                            },
                            {
                                title: "송포초등학교",
                                path: "/vr/8",
                            },
                            {
                                title: "현북중학교",
                                path: "/vr/9",
                            },
                            {
                                title: "양구초등학교",
                                path: "/vr/10",
                            },
                            {
                                title: "석천중학교",
                                path: "/vr/11",
                            },
                            {
                                title: "도촌초등학교",
                                path: "/vr/12",
                            },
                            {
                                title: "한전초등학교",
                                path: "/vr/13",
                            },
                            {
                                title: "마차초등학교",
                                path: "/vr/14",
                            },
                            {
                                title: "영월중학교",
                                path: "/vr/15",
                            },
                            {
                                title: "고산초등학교",
                                path: "/vr/16",
                            },
                            {
                                title: "육민관중학교",
                                path: "/vr/17",
                            },
                            {
                                title: "원주여중",
                                path: "/vr/18",
                            },
                            {
                                title: "기린초등학교",
                                path: "/vr/19",
                            },
                            {
                                title: "함백초등학교",
                                path: "/vr/20",
                            },
                            {
                                title: "정선중학교",
                                path: "/vr/21",
                            },
                            {
                                title: "증산초등학교",
                                path: "/vr/22",
                            },
                            {
                                title: "장흥초등학교",
                                path: "/vr/23",
                            },
                            {
                                title: "김화중학교",
                                path: "/vr/24",
                            },
                            {
                                title: "천전초등학교",
                                path: "/vr/25",
                            },
                            {
                                title: "남춘천중학교",
                                path: "/vr/26",
                            },
                            {
                                title: "황지초등학교",
                                path: "/vr/27",
                            },
                            {
                                title: "철암중학교",
                                path: "/vr/28",
                            },
                            {
                                title: "삼생초등학교",
                                path: "/vr/29",
                            },
                            {
                                title: "내면중학교",
                                path: "/vr/30",
                            },
                            {
                                title: "성북초등학교",
                                path: "/vr/31",
                            },
                            {
                                title: "횡성중학교",
                                path: "/vr/32",
                            },
                            {
                                title: "태장초등학교",
                                path: "/vr/33",
                            },
                            {
                                title: "북원중학교",
                                path: "/vr/34",
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
                                path: "/vr/38",
                            },
                            {
                                title: "귀둔초등학교",
                                path: "/vr/39",
                            },
                            {
                                title: "동송초등학교",
                                path: "/vr/40",
                            },
                            {
                                title: "무실초등학교",
                                path: "/vr/41",
                            },
                            {
                                title: "문혜초등학교",
                                path: "/vr/42",
                            },
                            {
                                title: "버들초등학교",
                                path: "/vr/43",
                            },
                            {
                                title: "장흥초등학교",
                                path: "/vr/44",
                            },
                            {
                                title: "천전초등학교",
                                path: "/vr/45",
                            },
                            {
                                title: "춘천교대부설초등학교",
                                path: "/vr/46",
                            },
                            {
                                title: "춘천삼육초등학교",
                                path: "/vr/47",
                            },
                            {
                                title: "태서초등학교",
                                path: "/vr/48",
                            },
                            {
                                title: "평원초등학교",
                                path: "/vr/49",
                            },
                            {
                                title: "한솔초등학교",
                                path: "/vr/50",
                            },
                            {
                                title: "현북초등학교",
                                path: "/vr/51",
                            },
                            {
                                title: "황둔초등학교",
                                path: "/vr/52",
                            },
                            {
                                title: "황지초등학교",
                                path: "/vr/53",
                            },
                            {
                                title: "남원주중학교",
                                path: "/vr/54",
                            },
                            {
                                title: "남춘천중학교",
                                path: "/vr/55",
                            },
                            {
                                title: "단구중학교",
                                path: "/vr/56",
                            },
                            {
                                title: "속초해랑중학교",
                                path: "/vr/57",
                            },
                            {
                                title: "치악중학교",
                                path: "/vr/58",
                            },
                            {
                                title: "강릉명륜고등학교",
                                path: "/vr/59",
                            },
                            {
                                title: "강원사대부설고등학교",
                                path: "/vr/60",
                            },
                            {
                                title: "북원여자고등학교",
                                path: "/vr/61",
                            },
                            {
                                title: "원주고등학교",
                                path: "/vr/62",
                            },
                            {
                                title: "홍천고등학교",
                                path: "/vr/63",
                            },
                            {
                                title: "강릉오성학교",
                                path: "/vr/64",
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
                                path: "/vr/35",
                            },
                            {
                                title: "평창중학교",
                                path: "/vr/36",
                            },
                            {
                                title: "내대초등학교",
                                path: "/vr/37",
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
                                path: "/vr/65",
                            },
                            {
                                title: "유봉여고",
                                path: "/vr/66",
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
                                title: "구정초등학교",
                                path: "/",
                            },
                            {
                                title: "기린초등학교",
                                path: "/",
                            },
                            {
                                title: "내대초등학교",
                                path: "/",
                            },
                            {
                                title: "대진초등학교",
                                path: "/",
                            },
                            {
                                title: "반곡초등학교",
                                path: "/",
                            },
                            {
                                title: "석천중학교",
                                path: "/",
                            },
                            {
                                title: "양구초등학교",
                                path: "/",
                            },
                            {
                                title: "오저초등학교",
                                path: "/",
                            },
                            {
                                title: "장흥초등학교",
                                path: "/",
                            },
                            {
                                title: "정선중학교",
                                path: "/",
                            }
                        ]
                },
                {
                    title: "인공지능(AI)교육",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "김화중학교",
                                path: "/",
                            },
                            {
                                title: "도촌초등학교",
                                path: "/",
                            },
                            {
                                title: "동송초등학교",
                                path: "/",
                            },
                            {
                                title: "마차초등학교",
                                path: "/",
                            },
                            {
                                title: "예람중학교",
                                path: "/",
                            },
                            {
                                title: "유봉여자고등학교",
                                path: "/",
                            },
                            {
                                title: "증산초등학교",
                                path: "/",
                            },
                            {
                                title: "태장초등학교",
                                path: "/",
                            },
                            {
                                title: "황지초등학교",
                                path: "/",
                            },
                            {
                                title: "고산초등학교",
                                path: "/",
                            },
                            {
                                title: "남춘천중학교",
                                path: "/",
                            },
                            {
                                title: "삼생초등학교",
                                path: "/",
                            },
                            {
                                title: "송포초등학교",
                                path: "/",
                            },
                            {
                                title: "철암중학교",
                                path: "/",
                            }
                        ]
                },
                {
                    title: "소프트웨어(SW)교육",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "고산초등학교",
                                path: "/vr/1",
                            },
                            {
                                title: "남춘천중학교",
                                path: "/vr/2",
                            },
                            {
                                title: "삼생초등학교",
                                path: "/vr/3",
                            },
                            {
                                title: "송포초등학교",
                                path: "/vr/4",
                            },
                            {
                                title: "철암중학교",
                                path: "/vr/5",
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

    const Nav = styled.div`
        background : #164672;
        height : 80px;
    `

    const NavIcon = styled.div`
        font-size: 30px;
        position: absolute;
        top: 25px;
        right: 25px;
        color : #515151;
        cursor : pointer;
    `

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
                    <img src={logo} alt="logo" />
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
                    <Link to="/vr/67">
                        <li onMouseEnter={controllUnderBar} className="gnb_depth1">인사말</li>
                    </Link>
                    <Link to="/vr/98">
                        <li onMouseEnter={controllUnderBar} className="gnb_depth1">강연 영상</li>
                    </Link>
                    <li onMouseEnter={controllUnderBar} className="gnb_depth1">
                        성과 발표
                        <ul className="gnb_depth2 take_depth3" data-idx="1">
                            <li onMouseEnter={controllDepth3}>
                                2021 디지털리터러시교육 선도학교
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <Link to="/vr/1">
                                            <li>구정초등학교</li>
                                        </Link>
                                        <Link to="/vr/2">
                                            <li>솔올중학교</li>
                                        </Link>
                                        <Link to="/vr/3">
                                            <li>대진초등학교</li>
                                        </Link>
                                        <Link to="/vr/4">
                                            <li>동해초등학교</li>
                                        </Link>
                                        <Link to="/vr/5">
                                            <li>예람중학교</li>
                                        </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <Link to="/vr/6">
                                            <li>오저초등학교</li>
                                        </Link>
                                        <Link to="/vr/7">
                                            <li>임원중학교</li>
                                        </Link>
                                        <Link to="/vr/8">
                                            <li>송포초등학교</li>
                                        </Link>
                                        <Link to="/vr/9">
                                            <li>현북중학교</li>
                                        </Link>
                                        <Link to="/vr/10">
                                            <li>양구초등학교</li>
                                        </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <Link to="/vr/11">
                                            <   li>석천중학교</li>
                                        </Link>
                                        <Link to="/vr/12">
                                            <li>도촌초등학교</li>
                                        </Link>
                                        <Link to="/vr/13">
                                            <li>한전초등학교</li>
                                        </Link>
                                        <Link to="/vr/14">
                                            <li>마차초등학교</li>
                                        </Link>
                                        <Link to="/vr/15">
                                            <li>영월중학교</li>
                                        </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <Link to="/vr/16">
                                            <li>고산초등학교</li>
                                        </Link>
                                        <Link to="/vr/17">
                                            <li>육민관중학교</li>
                                        </Link>
                                        <Link to="/vr/18">
                                            <li>원주여중</li>
                                        </Link>
                                        <Link to="/vr/19">
                                            <li>기린초등학교</li>
                                        </Link>
                                        <Link to="/vr/20">
                                            <li>함백초등학교</li>
                                        </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <Link to="/vr/21">
                                            <li>정선중학교</li>
                                        </Link>
                                        <Link to="/vr/22">
                                            <li>증산초등학교</li>
                                        </Link>
                                        <Link to="/vr/23">
                                            <li>장흥초등학교</li>
                                        </Link>
                                        <Link to="/vr/24">
                                            <li>김화중학교</li>
                                        </Link>
                                        <Link to="/vr/25">
                                            <li>천전초등학교</li>
                                        </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <Link to="/vr/26">
                                            <li>남춘천중학교</li>
                                        </Link>
                                        <Link to="/vr/27">
                                            <li>황지초등학교</li>
                                        </Link>
                                        <Link to="/vr/28">
                                            <li>철암중학교</li>
                                        </Link>
                                        <Link to="/vr/29">
                                            <li>삼생초등학교</li>
                                        </Link>
                                        <Link to="/vr/30">
                                            <li>내면중학교</li>
                                        </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <Link to="/vr/31">
                                            <li>성북초등학교</li>
                                        </Link>
                                        <Link to="/vr/32">
                                            <li>횡성중학교</li>
                                        </Link>
                                        <Link to="/vr/33">
                                            <li>태장초등학교</li>
                                        </Link>
                                        <Link to="/vr/34">
                                            <li>북원중학교</li>
                                        </Link>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2021 인공지능(AI)교육 선도학교
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                    <Link to="/vr/38">
                                        <li>구곡초등학교</li>
                                    </Link>
                                    <Link to="/vr/39">
                                        <li>귀둔초등학교</li>
                                    </Link>
                                    <Link to="/vr/40">
                                        <li>동송초등학교</li>
                                    </Link>
                                    <Link to="/vr/41">
                                        <li>무실초등학교</li>
                                    </Link>
                                    <Link to="/vr/42">
                                        <li>문혜초등학교</li>
                                    </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                    <Link to="/vr/43">
                                        <li>버들초등학교</li>
                                    </Link>
                                    <Link to="/vr/44">
                                        <li>장흥초등학교</li>
                                    </Link>
                                    <Link to="/vr/45">
                                        <li>천전초등학교</li>
                                    </Link>
                                    <Link to="/vr/46">
                                        <li>춘천교대부설초등학교</li>
                                    </Link>
                                    <Link to="/vr/47">
                                        <li>춘천삼육초등학교</li>
                                    </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                    <Link to="/vr/48">
                                        <li>태서초등학교</li>
                                    </Link>
                                    <Link to="/vr/49">
                                        <li>평원초등학교</li>
                                    </Link>
                                    <Link to="/vr/50">
                                        <li>한솔초등학교</li>
                                    </Link>
                                    <Link to="/vr/51">
                                        <li>현북초등학교</li>
                                    </Link>
                                    <Link to="/vr/52">
                                        <li>황둔초등학교</li>
                                    </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                    <Link to="/vr/53">
                                        <li>황지초등학교</li>
                                    </Link>
                                    <Link to="/vr/54">
                                        <li>남원주중학교</li>
                                    </Link>
                                    <Link to="/vr/55">
                                        <li>남춘천중학교</li>
                                    </Link>
                                    <Link to="/vr/56">
                                        <li>단구중학교</li>
                                    </Link>
                                    <Link to="/vr/57">
                                        <li>속초해랑중학교</li>
                                    </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                    <Link to="/vr/58">
                                        <li>치악중학교</li>
                                    </Link>
                                    <Link to="/vr/59">
                                        <li>강릉명륜고등학교</li>
                                    </Link>
                                    <Link to="/vr/60">
                                        <li>강원사대부설고등학교</li>
                                    </Link>
                                    <Link to="/vr/61">
                                        <li>북원여자고등학교</li>
                                    </Link>
                                    </ul>
                                    <ul className="gnb_depth3">
                                    <Link to="/vr/62">
                                        <li>원주고등학교</li>
                                    </Link>
                                    <Link to="/vr/63">
                                        <li>홍천고등학교</li>
                                    </Link>
                                    <Link to="/vr/64">
                                        <li>강릉오성학교</li>
                                    </Link>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2020~2021 디지털리터러시교육 연구학교
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                    <Link to="/vr/34">
                                        <li>반곡초등학교</li>
                                    </Link>
                                    <Link to="/vr/34">
                                        <li>평창중학교</li>
                                    </Link>
                                    <Link to="/vr/34">
                                        <li>내대초등학교</li>
                                    </Link>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2020~2021 인공지능(AI) 융합교육 중심고등학교
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                    <Link to="/vr/34">
                                    </Link>
                                    <Link to="/vr/34">
                                    </Link>
                                        <li>치악고등학교</li>
                                        <li>유봉여고</li>
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
                                        <li>구정초등학교</li>
                                        <li>기린초등학교</li>
                                        <li>내대초등학교</li>
                                        <li>대진초등학교</li>
                                        <li>반곡초등학교</li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li>석천중학교</li>
                                        <li>양구초등학교</li>
                                        <li>오저초등학교</li>
                                        <li>장흥초등학교</li>
                                        <li>정선중학교</li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                인공지능(AI)교육
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li>김화중학교</li>
                                        <li>노암초등학교</li>
                                        <li>도촌초등학교</li>
                                        <li>동송초등학교</li>
                                        <li>마차초등학교</li>

                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li>상평초등학교</li>
                                        <li>여량초등학교</li>
                                        <li>예람중학교</li>
                                        <li>유봉여자고등학교</li>
                                        <li>유천초등학교</li>

                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li>정동초등학교</li>
                                        <li>증산초등학교</li>
                                        <li>태장초등학교</li>
                                        <li>한솔초등학교</li>
                                        <li>황지초등학교</li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                소프트웨어(SW)교육
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li>고산초등학교</li>
                                        <li>남춘천중학교</li>
                                        <li>삼생초등학교</li>
                                        <li>송포초등학교</li>
                                        <li>철암중학교</li>
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