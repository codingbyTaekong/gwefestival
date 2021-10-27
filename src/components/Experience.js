import React, {useRef, useState} from "react";
import "./Experience.css"
import poster from "../assets/imgs/gathertown.png"

const Experience = () => {
    return (
        <>
            <div className="mainbanner"></div>
            <main>
                <h1 className="title">게더타운 사용법</h1>
                <span className="titleUnderBar"></span>
                <a href="" target="_blank" className="gotoGather">게더타운 입장하기</a>
                <div className="gathertown">
                    <img src={poster}></img>
                </div>
            </main>
        </>
    )
}

export default Experience;