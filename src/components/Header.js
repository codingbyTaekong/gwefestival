import React, {useRef, useState} from "react";
import {Link} from 'react-router-dom';
import  "../assets/css/fonts.css"
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
        document.querySelectorAll(Node).forEach(el=> {
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
        title : "행사개요",
        path : "/",
    },
    {
        title : "인사말",
        path : "/",
    },
    {
        title : "성과전시",
        iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
        iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
        subNav : [
            {
                title : "디지털리터러시교육 선도학교",
                path : "/",
                iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                subNav : 
                [
                    {
                        title : "구정초등학교",
                        path : "/",
                    },
                    {
                        title : "솔올중학교",
                        path : "/",
                    },
                    {
                        title : "대진초등학교",
                        path : "/",
                    },
                    {
                        title : "동해초등학교",
                        path : "/",
                    },
                    {
                        title : "예람중학교",
                        path : "/",
                    },
                    {
                        title : "오저초등학교",
                        path : "/",
                    },
                    {
                        title : "임원중학교",
                        path : "/",
                    },
                    {
                        title : "송포초등학교",
                        path : "/",
                    },
                    {
                        title : "현북중학교",
                        path : "/",
                    },
                    {
                        title : "양구초등학교",
                        path : "/",
                    },
                    {
                        title : "석천중학교",
                        path : "/",
                    },
                    {
                        title : "도촌초등학교",
                        path : "/",
                    },
                    {
                        title : "한전초등학교",
                        path : "/",
                    },
                    {
                        title : "마차초등학교",
                        path : "/",
                    },
                    {
                        title : "영월중학교",
                        path : "/",
                    },
                    {
                        title : "고산초등학교",
                        path : "/",
                    },
                    {
                        title : "육민관중학교",
                        path : "/",
                    },
                    {
                        title : "원주여중",
                        path : "/",
                    },
                    {
                        title : "기린초등학교",
                        path : "/",
                    },
                    {
                        title : "함백초등학교",
                        path : "/",
                    },
                    {
                        title : "정선중학교",
                        path : "/",
                    },
                    {
                        title : "증산초등학교",
                        path : "/",
                    },
                    {
                        title : "장흥초등학교",
                        path : "/",
                    },
                    {
                        title : "김화중학교",
                        path : "/",
                    },
                    {
                        title : "천전초등학교",
                        path : "/",
                    },
                    {
                        title : "남춘천중학교",
                        path : "/",
                    },
                    {
                        title : "황지초등학교",
                        path : "/",
                    },
                    {
                        title : "철암중학교",
                        path : "/",
                    },
                    {
                        title : "삼생초등학교",
                        path : "/",
                    },
                    {
                        title : "내면중학교",
                        path : "/",
                    },
                    {
                        title : "성북초등학교",
                        path : "/",
                    },
                    {
                        title : "횡성중학교",
                        path : "/",
                    },
                    {
                        title : "태장초등학교",
                        path : "/",
                    },
                    {
                        title : "북원중학교",
                        path : "/",
                    },
                ]
            },
            {
                title : "인공지능(AI)교육 선도학교",
                path : "/",
                iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                subNav : 
                [
                    {
                        title : "구곡초등학교",
                        path : "/",
                    },
                    {
                        title : "귀둔초등학교",
                        path : "/",
                    },
                    {
                        title : "동송초등학교",
                        path : "/",
                    },
                    {
                        title : "무실초등학교",
                        path : "/",
                    },
                    {
                        title : "문혜초등학교",
                        path : "/",
                    },
                    {
                        title : "버들초등학교",
                        path : "/",
                    },
                    {
                        title : "장흥초등학교",
                        path : "/",
                    },
                    {
                        title : "천전초등학교",
                        path : "/",
                    },
                    {
                        title : "춘천교대부설초등학교",
                        path : "/",
                    },
                    {
                        title : "춘천삼육초등학교",
                        path : "/",
                    },
                    {
                        title : "태서초등학교",
                        path : "/",
                    },
                    {
                        title : "평원초등학교",
                        path : "/",
                    },
                    {
                        title : "한솔초등학교",
                        path : "/",
                    },
                    {
                        title : "현북초등학교",
                        path : "/",
                    },
                    {
                        title : "황둔초등학교",
                        path : "/",
                    },
                    {
                        title : "황지초등학교",
                        path : "/",
                    },
                    {
                        title : "남원주중학교",
                        path : "/",
                    },
                    {
                        title : "남춘천중학교",
                        path : "/",
                    },
                    {
                        title : "단구중학교",
                        path : "/",
                    },
                    {
                        title : "속초해랑중학교",
                        path : "/",
                    },
                    {
                        title : "치악중학교",
                        path : "/",
                    },
                    {
                        title : "강릉명륜고등학교",
                        path : "/",
                    },
                    {
                        title : "강원사대부설고등학교",
                        path : "/",
                    },
                    {
                        title : "북원여자고등학교",
                        path : "/",
                    },
                    {
                        title : "원주고등학교",
                        path : "/",
                    },
                    {
                        title : "홍천고등학교",
                        path : "/",
                    },
                    {
                        title : "강릉오성학교",
                        path : "/",
                    }
                ]
            },
            {
                title : "디지털리터러시교육 연구학교",
                path : "/",
                iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                subNav : 
                [
                    {
                        title : "반곡초등학교",
                        path : "/",
                    },
                    {
                        title : "평창중학교",
                        path : "/",
                    },
                    {
                        title : "내대초등학교",
                        path : "/",
                    },
                ]
            },
            {
                title : "인공지능(AI) 융합교육 중심고등학교",
                path : "/",
                iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                subNav : 
                [
                    {
                        title : "치악고등학교",
                        path : "/",
                    },
                    {
                        title : "유봉여고",
                        path : "/",
                    }
                ]
            }
        ]
    },
    {
        title : "체험부스",
        iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
        iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
        subNav : [
            {
                title : "디지털문해력",
                path : "/",
                iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                subNav : 
                [
                    {
                        title : "구정초등학교",
                        path : "/",
                    },
                    {
                        title : "기린초등학교",
                        path : "/",
                    },
                    {
                        title : "내대초등학교",
                        path : "/",
                    },
                    {
                        title : "대진초등학교",
                        path : "/",
                    },
                    {
                        title : "반곡초등학교",
                        path : "/",
                    },
                    {
                        title : "석천중학교",
                        path : "/",
                    },
                    {
                        title : "양구초등학교",
                        path : "/",
                    },
                    {
                        title : "오저초등학교",
                        path : "/",
                    },
                    {
                        title : "장흥초등학교",
                        path : "/",
                    },
                    {
                        title : "정선중학교",
                        path : "/",
                    }
                ]
            },
            {
                title : "AI",
                path : "/",
                iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                subNav : 
                [
                    {
                        title : "김화중학교",
                        path : "/",
                    },
                    {
                        title : "도촌초등학교",
                        path : "/",
                    },
                    {
                        title : "동송초등학교",
                        path : "/",
                    },
                    {
                        title : "마차초등학교",
                        path : "/",
                    },
                    {
                        title : "예람중학교",
                        path : "/",
                    },
                    {
                        title : "유봉여자고등학교",
                        path : "/",
                    },
                    {
                        title : "증산초등학교",
                        path : "/",
                    },
                    {
                        title : "태장초등학교",
                        path : "/",
                    },
                    {
                        title : "황지초등학교",
                        path : "/",
                    },
                    {
                        title : "고산초등학교",
                        path : "/",
                    },
                    {
                        title : "남춘천중학교",
                        path : "/",
                    },
                    {
                        title : "삼생초등학교",
                        path : "/",
                    },
                    {
                        title : "송포초등학교",
                        path : "/",
                    },
                    {
                        title : "철암중학교",
                        path : "/",
                    }
                ]
            },            
            {
                title : "연구회",
                path : "/",
                iconClosed : <RiIcons.RiArrowDownSFill className="arrowIcons" />,
                iconOpened : <RiIcons.RiArrowUpSFill className="arrowIcons" />,
                subNav : 
                [
                    {
                        title : "연구회1",
                        path : "/vr/1",
                    },
                    {
                        title : "연구회2",
                        path : "/vr/2",
                    },
                    {
                        title : "연구회3",
                        path : "/vr/3",
                    },
                    {
                        title : "연구회4",
                        path : "/vr/4",
                    },
                    {
                        title : "연구회5",
                        path : "/vr/5",
                    },
                    {
                        title : "연구회6",
                        path : "/vr/6",
                    }
                ]
            }
        ]
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
        transform : translateX(${({sidebar})=> (sidebar ? '0' : '100%')});
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
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </div>
                    </div>
                </section>
                <section className="hd_02">
                    <ul className="gnb">
                        <Link to="/">
                            <li onMouseEnter={controllUnderBar} className="gnb_depth1">행사개요</li>
                        </Link>
                        <li onMouseEnter={controllUnderBar} className="gnb_depth1">인사말</li>
                        <li onMouseEnter={controllUnderBar} className="gnb_depth1">
                            성과전시
                            <ul className="gnb_depth2 take_depth3" data-idx="1">
                                <li onMouseEnter={controllDepth3}>
                                    2021 디지털리터러시교육 선도학교
                                    <i className="fas fa-chevron-right custom-arrow"></i>
                                    <div className="gnb_depth3_box">
                                        <ul className="gnb_depth3">
                                            <li>구정초등학교</li>
                                            <li>솔올중학교</li>
                                            <li>대진초등학교</li>
                                            <li>동해초등학교</li>
                                            <li>예람중학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>오저초등학교</li>
                                            <li>임원중학교</li>
                                            <li>송포초등학교</li>
                                            <li>현북중학교</li>
                                            <li>양구초등학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>석천중학교</li>
                                            <li>도촌초등학교</li>
                                            <li>한전초등학교</li>
                                            <li>마차초등학교</li>
                                            <li>영월중학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>고산초등학교</li>
                                            <li>육민관중학교</li>
                                            <li>원주여중</li>
                                            <li>기린초등학교</li>
                                            <li>함백초등학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>정선중학교</li>
                                            <li>증산초등학교</li>
                                            <li>장흥초등학교</li>
                                            <li>김화중학교</li>
                                            <li>천전초등학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>남춘천중학교</li>
                                            <li>황지초등학교</li>
                                            <li>철암중학교</li>
                                            <li>삼생초등학교</li>
                                            <li>내면중학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>성북초등학교</li>
                                            <li>횡성중학교</li>
                                            <li>태장초등학교</li>
                                        </ul>
                                    </div>
                                </li>
                                <li onMouseEnter={controllDepth3}>
                                    2021 인공지능(AI)교육 선도학교
                                    <i className="fas fa-chevron-right custom-arrow"></i>
                                    <div className="gnb_depth3_box">
                                        <ul className="gnb_depth3">
                                            <li>구곡초등학교</li>
                                            <li>귀둔초등학교</li>
                                            <li>동송초등학교</li>
                                            <li>무실초등학교</li>
                                            <li>문혜초등학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>버들초등학교</li>
                                            <li>장흥초등학교</li>
                                            <li>천전초등학교</li>
                                            <li>춘천교대부설초등학교</li>
                                            <li>춘천삼육초등학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>태서초등학교</li>
                                            <li>평원초등학교</li>
                                            <li>한솔초등학교</li>
                                            <li>현북초등학교</li>
                                            <li>황둔초등학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>황지초등학교</li>
                                            <li>남원주중학교</li>
                                            <li>남춘천중학교</li>
                                            <li>단구중학교</li>
                                            <li>속초해랑중학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>치악중학교</li>
                                            <li>강릉명륜고등학교</li>
                                            <li>강원사대부설고등학교</li>
                                            <li>북원여자고등학교</li>
                                            <li>원주고등학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>원주고등학교</li>
                                            <li>홍천고등학교</li>
                                            <li>강릉오성학교</li>
                                        </ul>
                                    </div>
                                </li>
                                <li onMouseEnter={controllDepth3}>
                                    2020~2021 디지털리터러시교육 연구학교
                                    <i className="fas fa-chevron-right custom-arrow"></i>
                                    <div className="gnb_depth3_box">
                                        <ul className="gnb_depth3">
                                            <li>반곡초등학교</li>
                                            <li>평창중학교</li>
                                            <li>내대초등학교</li>
                                        </ul>
                                    </div>
                                </li>
                                <li onMouseEnter={controllDepth3}>
                                    2020~2021 인공지능(AI) 융합교육 중심고등학교
                                    <i className="fas fa-chevron-right custom-arrow"></i>
                                    <div className="gnb_depth3_box">
                                        <ul className="gnb_depth3">
                                            <li>치악고등학교</li>
                                            <li>유봉여고</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li onMouseEnter={controllUnderBar} className="gnb_depth1">
                            체험부스
                            <ul className="gnb_depth2 take_depth3" data-idx="2">
                                <li onMouseEnter={controllDepth3}>
                                    디지털문해력
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
                                    AI
                                    <i className="fas fa-chevron-right custom-arrow"></i>
                                    <div className="gnb_depth3_box">
                                        <ul className="gnb_depth3">
                                            <li>김화중학교</li>
                                            <li>도촌초등학교</li>
                                            <li>동송초등학교</li>
                                            <li>마차초등학교</li>
                                            <li>예람중학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>유봉여자고등학교</li>
                                            <li>증산초등학교</li>
                                            <li>태장초등학교</li>
                                            <li>황지초등학교</li>
                                            <li>고산초등학교</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>남춘천중학교</li>
                                            <li>삼생초등학교</li>
                                            <li>송포초등학교</li>
                                            <li>철암중학교</li>
                                        </ul>
                                    </div>
                                </li>
                                <li onMouseEnter={controllDepth3}>
                                    연구회
                                    <i className="fas fa-chevron-right custom-arrow"></i>
                                    <div className="gnb_depth3_box">
                                        <ul className="gnb_depth3">
                                            {/* <Link to="/vr/11"> */}
                                                <li>연구회1</li>
                                            {/* </Link> */}
                                            <li>연구회2</li>
                                            <li>연구회3</li>
                                        </ul>
                                        <ul className="gnb_depth3">
                                            <li>연구회4</li>
                                            <li>연구회5</li>
                                            <li>연구회6</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            </li>
                        <li onMouseEnter={controllUnderBar} className="gnb_depth1 take_depth2">
                            강연교육
                            <ul className="gnb_depth2">
                                <li>강연교육 1</li>
                                <li>강연교육 2</li>
                                <li>강연교육 3</li>
                                <li>강연교육 4</li>
                            </ul>
                        </li>
                        <Link to="/experience">
                            <li onMouseOver={controllUnderBar} className="gnb_depth1">체험활동</li>
                        </Link>
                    </ul>
                    <span className="underBar" ref={underBar} style={style}></span>
                </section>
                <section className="gnb_depth_back" ref={back}></section>
                <SidebarNav className="SidebarNav" sidebar={sidebar}>
                    <SidebarWrap>
                    <ExitIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </ExitIcon>
                    <h3 className="m_gnb_title">MENU</h3>
                    {MobileGnb.map((item, index)=> {
                        return <SubMenu item={item} i={index} onClick={showSidebar} />
                    })}
                    </SidebarWrap>
                </SidebarNav>
            </header>
    )
}

export default Header;