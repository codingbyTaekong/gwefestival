import React, {useRef, useState} from "react";
import  "../assets/css/fonts.css"
import "./Header.css"
import logo from "../assets/imgs/LOGO.png"

const Header = () => {
    const underBar = useRef()
    const style = {
        left: "0"
    }
    function controllUnderBar(e) {
        let underBar_W = underBar.current.getBoundingClientRect().width
        let depthTitle_W = e.target.getBoundingClientRect().width
        underBar.current.style = `left : ${e.target.getBoundingClientRect().x - ((underBar_W - depthTitle_W) / 2)}px;`
    }
    return (
        <header>
            <section className="hd_01">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </section>
            <section className="hd_02">
                <ul>
                    <li onMouseOver={controllUnderBar}>행사개요</li>
                    <li onMouseOver={controllUnderBar}>인사말</li>
                    <li onMouseOver={controllUnderBar}>성과전시</li>
                    <li onMouseOver={controllUnderBar}>체험부스</li>
                    <li onMouseOver={controllUnderBar}>강연교육</li>
                    <li onMouseOver={controllUnderBar}>체험활동</li>
                </ul>
                <span className="underBar" ref={underBar} style={style}></span>
            </section>
        </header>
    )
}

export default Header;