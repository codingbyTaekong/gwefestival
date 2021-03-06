import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../assets/css/fonts.css"
import "./Header.css"
import logo from "../assets/imgs/LOGO.png"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri";
import styled from "styled-components";
import SubMenu from "./SubMenu";


const Header = () => {
    const underBar = useRef();
    const back = useRef();
    const startDepth = useRef();
    const style = {
        left: "0"
    }

    useEffect(()=> {
        setTimeout(()=> {
            let underBar_W = underBar.current.getBoundingClientRect().width
            let depthTitle_W = startDepth.current.getBoundingClientRect().width
            underBar.current.style = `left : ${startDepth.current.getBoundingClientRect().x - ((underBar_W - depthTitle_W) / 2)}px; opacity: 1;`
        },500)
    }, [])

    function ResetDepth(Node, ClassName) {
        document.querySelectorAll(Node).forEach(el => {
            if (el.classList.contains(ClassName)) {
                el.classList.remove(ClassName)
            }
        })
    }

    function controllUnderBar(e) {
        if (e.target.classList.contains('gnb_depth1')) {
            let underBar_W = underBar.current.getBoundingClientRect().width;
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
            title: "????????????",
            path: "/",
        },
        {
            title: "?????????",
            path: "https://vr.gwefestival.co.kr/scene_67_en.html",
        },
        {
            title: "?????? ??????",
            path: "https://vr.gwefestival.co.kr/scene_98_en.html",
        },
        {
            title: "?????? ??????",
            iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
            iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
            subNav: [
                {
                    title: "??????????????????????????? ????????????",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_1_en.html",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_2_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_3_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_4_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_5_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_6_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_7_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_8_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_9_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_10_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_11_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_12_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_13_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_14_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_15_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_16_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_17_en.html/",
                            },
                            {
                                title: "????????????",
                                path: "https://vr.gwefestival.co.kr/scene_18_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_19_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_20_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_21_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_22_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_23_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_24_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_25_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_26_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_27_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_28_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_29_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_30_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_31_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_32_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_33_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_34_en.html/",
                            },
                        ]
                },
                {
                    title: "????????????(AI)?????? ????????????",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_38_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_39_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_40_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_41_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_42_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_43_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_44_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_45_en.html/",
                            },
                            {
                                title: "??????????????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_46_en.html/",
                            },
                            {
                                title: "????????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_47_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_48_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_49_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_50_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_51_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_52_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_53_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_54_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_55_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_56_en.html/",
                            },
                            {
                                title: "?????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_57_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_58_en.html/",
                            },
                            {
                                title: "????????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_59_en.html/",
                            },
                            {
                                title: "??????????????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_60_en.html/",
                            },
                            {
                                title: "????????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_61_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_62_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_63_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_64_en.html/",
                            }
                        ]
                },
                {
                    title: "??????????????????????????? ????????????",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_35_en.html/",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_36_en.html/",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_37_en.html/",
                            },
                        ]
                },
                {
                    title: "????????????(AI) ???????????? ??????????????????",
                    path: "/",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_65_en.html/",
                            },
                            {
                                title: "????????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_66_en.html/",
                            }
                        ]
                }
            ]
        },
        {
            title: "?????? ??????",
            iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
            iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
            subNav: [
                {
                    title: "?????????????????????(?????????)??????",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_68_en.html",
                            },
                            {
                                title: "?????? ??????",
                                path: "https://vr.gwefestival.co.kr/scene_69_en.html",
                            },
                            {
                                title: "Comica",
                                path: "https://vr.gwefestival.co.kr/scene_70_en.html",
                            },
                            {
                                title: "????????? ?????????",
                                path: "https://vr.gwefestival.co.kr/scene_71_en.html",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_72_en.html",
                            },
                            {
                                title: "QR????????????",
                                path: "https://vr.gwefestival.co.kr/scene_73_en.html",
                            },
                            {
                                title: "PAPS?????? ???",
                                path: "https://vr.gwefestival.co.kr/scene_74_en.html",
                            },
                            {
                                title: "???????????? ??????",
                                path: "https://vr.gwefestival.co.kr/scene_75_en.html",
                            },
                            {
                                title: "?????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_76_en.html",
                            },
                            {
                                title: "????????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_77_en.html",
                            }
                        ]
                },
                {
                    title: "????????????(AI)??????",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_78_en.html",
                            },
                            {
                                title: "?????? ?????????",
                                path: "https://vr.gwefestival.co.kr/scene_79_en.html",
                            },
                            {
                                title: "???????????? VR",
                                path: "https://vr.gwefestival.co.kr/scene_80_en.html",
                            },
                            {
                                title: "?????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_81_en.html",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_82_en.html",
                            },
                            {
                                title: "??? ?????????",
                                path: "https://vr.gwefestival.co.kr/scene_83_en.html",
                            },
                            {
                                title: "AI for Oceans",
                                path: "https://vr.gwefestival.co.kr/scene_84_en.html",
                            },
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_85_en.html",
                            },
                            {
                                title: "?????? ??????",
                                path: "https://vr.gwefestival.co.kr/scene_86_en.html",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_87_en.html",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_88_en.html",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_89_en.html",
                            },
                            {
                                title: "?????????AI",
                                path: "https://vr.gwefestival.co.kr/scene_90_en.html",
                            },
                            {
                                title: "????????????",
                                path: "https://vr.gwefestival.co.kr/scene_91_en.html",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_92_en.html",
                            },
                        ]
                },
                {
                    title: "???????????????(SW)??????",
                    iconClosed: <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                    iconOpened: <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                    subNav:
                        [
                            {
                                title: "??????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_93_en.html",
                            },
                            {
                                title: "???????????????",
                                path: "https://vr.gwefestival.co.kr/scene_94_en.html",
                            },
                            {
                                title: "????????????",
                                path: "https://vr.gwefestival.co.kr/scene_95_en.html",
                            },
                            {
                                title: "?????????????????????",
                                path: "https://vr.gwefestival.co.kr/scene_96_en.html",
                            },
                            {
                                title: "?????????????????? ??????",
                                path: "https://vr.gwefestival.co.kr/scene_97_en.html",
                            }
                        ]
                }
            ]
        },
        {
            title: "??????????????????",
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
                        <li onMouseEnter={controllUnderBar} className="gnb_depth1" ref={startDepth}>????????????</li>
                    </Link>
                        <a onMouseEnter={controllUnderBar} className="gnb_depth1" href="https://vr.gwefestival.co.kr/scene_67_en.html">?????????</a>
                        <a onMouseEnter={controllUnderBar} className="gnb_depth1" href="https://vr.gwefestival.co.kr/scene_98_en.html">?????? ??????</a>
                    <li onMouseEnter={controllUnderBar} className="gnb_depth1">
                        ?????? ??????
                        <ul className="gnb_depth2 take_depth3" data-idx="1">
                            <li onMouseEnter={controllDepth3}>
                                2021 ??????????????????????????? ????????????
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_1_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_2_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_3_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_4_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_5_en.html">???????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_6_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_7_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_8_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_9_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_10_en.html">??????????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_11_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_12_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_13_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_14_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_15_en.html">???????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_16_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_17_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_18_en.html">????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_19_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_20_en.html">??????????????????</a></li>

                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_21_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_22_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_23_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_24_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_25_en.html">??????????????????</a></li>

                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_26_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_27_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_28_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_29_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_30_en.html">???????????????</a></li>

                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_31_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_32_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_33_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_34_en.html">???????????????</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2021 ????????????(AI)?????? ????????????
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_38_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_39_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_40_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_41_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_42_en.html">??????????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_43_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_44_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_45_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_46_en.html">??????????????????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_47_en.html">????????????????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_48_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_49_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_50_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_51_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_52_en.html">??????????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_53_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_54_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_55_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_56_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_57_en.html">?????????????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_58_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_59_en.html">????????????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_60_en.html">??????????????????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_61_en.html">????????????????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_62_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_63_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_64_en.html">??????????????????</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2020~2021 ??????????????????????????? ????????????
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_35_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_36_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_37_en.html">??????????????????</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                2020~2021 ????????????(AI) ???????????? ??????????????????
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_65_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_66_en.html">????????????????????????</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li onMouseEnter={controllUnderBar} className="gnb_depth1">
                        ?????? ??????
                        <ul className="gnb_depth2 take_depth3" data-idx="2">
                            <li onMouseEnter={controllDepth3}>
                                ?????????????????????(?????????)??????
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_68_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_69_en.html">?????? ??????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_70_en.html">Comica</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_71_en.html">????????? ?????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_72_en.html">???????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_73_en.html">QR????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_74_en.html">PAPS?????? ???</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_75_en.html">???????????? ??????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_76_en.html">?????????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_77_en.html">????????????????????????</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                ????????????(AI)??????
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_78_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_79_en.html">?????? ?????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_80_en.html">???????????? VR</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_81_en.html">?????????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_82_en.html">???????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_83_en.html">??? ?????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_84_en.html">AI for Oceans</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_85_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_86_en.html">?????? ??????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_87_en.html">???????????????</a></li>
                                    </ul>
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_88_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_89_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_90_en.html">?????????AI</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_91_en.html">????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_92_en.html">???????????????</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseEnter={controllDepth3}>
                                ???????????????(SW)??????
                                <i className="fas fa-chevron-right custom-arrow"></i>
                                <div className="gnb_depth3_box">
                                    <ul className="gnb_depth3">
                                        <li><a href="https://vr.gwefestival.co.kr/scene_93_en.html">??????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_94_en.html">???????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_95_en.html">????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_96_en.html">?????????????????????</a></li>
                                        <li><a href="https://vr.gwefestival.co.kr/scene_97_en.html">?????????????????? ??????</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <Link to="/experience">
                        <li onMouseOver={controllUnderBar} className="gnb_depth1">??????????????????</li>
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