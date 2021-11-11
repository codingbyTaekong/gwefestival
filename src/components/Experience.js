import React, {useRef, useState, useEffect} from "react";
import poster from "../assets/imgs/gathertown.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import login1 from "../assets/imgs/gather/login/1.png"
import login2 from "../assets/imgs/gather/login/2.png"
import login3 from "../assets/imgs/gather/login/3.png"
import login4 from "../assets/imgs/gather/login/4.png"
import login5 from "../assets/imgs/gather/login/5.png"
import login6 from "../assets/imgs/gather/login/6.png"
import login7 from "../assets/imgs/gather/login/7.png"
import login8 from "../assets/imgs/gather/login/8.png"
import login9 from "../assets/imgs/gather/login/9.png"
import login10 from "../assets/imgs/gather/login/10.png"
import use01 from "../assets/imgs/gather/use/1.png"
import use02 from "../assets/imgs/gather/use/2.png"
import use03 from "../assets/imgs/gather/use/3.png"
import use04 from "../assets/imgs/gather/use/4.png"
import use05 from "../assets/imgs/gather/use/5.png"
import use06 from "../assets/imgs/gather/use/6.png"
import use07 from "../assets/imgs/gather/use/7.png"
import use08 from "../assets/imgs/gather/use/8.png"
import use09 from "../assets/imgs/gather/use/9.png"
import use10 from "../assets/imgs/gather/use/10.png"
import use11 from "../assets/imgs/gather/use/11.png"
import "./Experience.css"

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const mSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const Experience = () => {
    return (
        <>
            <div className="mainbanner"></div>
            <main>
                <h1 className="title open">게더타운 입장하기</h1>
                <span className="titleUnderBar"></span>
                <div className="gotoGatherWrap">
                    <a href="https://gather.town/app/8viaqN5z1ypLs6z4/bighall01" target="_blank" className="gotoGather">1번방 입장(정원: 70명)</a>
                    <a href="https://gather.town/app/2eu6vpZB9ZYmZRpe/bighall_02" target="_blank" className="gotoGather">2번방 입장(정원: 25명)</a>
                    <a href="https://gather.town/app/V6xevA0tsNdYzwmd/bighall_03" target="_blank" className="gotoGather">3번방 입장(정원: 25명)</a>
                    <a href="https://gather.town/app/soqZXLhX1HTMs2c1/bighall_04" target="_blank" className="gotoGather">4번방 입장(정원: 25명)</a>
                    <a href="https://gather.town/app/Fg4lUrBMbLvv1Tv5/bighall_05" target="_blank" className="gotoGather">5번방 입장(정원: 25명)</a>
                </div>
                <p className="title">게더타운 접속방법</p>
                <section className="gatherCardWrapOne">
                <Slider {...settings}>
                    <div className="gatherCard" data-idx="1">
                        <img className="gatherCardImg" src={login1}></img>
                    </div>
                    <div className="gatherCard" data-idx="2">
                        <img className="gatherCardImg" src={login2}></img> 
                    </div>
                    <div className="gatherCard" data-idx="3">
                        <img className="gatherCardImg" src={login3}></img> 
                    </div>
                    <div className="gatherCard" data-idx="4">
                        <img className="gatherCardImg" src={login4}></img> 
                    </div>
                    <div className="gatherCard" data-idx="5">
                        <img className="gatherCardImg" src={login5}></img> 
                    </div>
                    <div className="gatherCard" data-idx="6">
                        <img className="gatherCardImg" src={login6}></img>
                    </div>
                    <div className="gatherCard" data-idx="7">
                        <img className="gatherCardImg" src={login7}></img>
                    </div>
                    <div className="gatherCard" data-idx="8">
                        <img className="gatherCardImg" src={login8}></img>
                    </div>
                    <div className="gatherCard" data-idx="9">
                        <img className="gatherCardImg" src={login9}></img>
                    </div>
                    <div className="gatherCard" data-idx="10">
                        <img className="gatherCardImg" src={login10}></img>
                    </div>
                    </Slider>
                </section>
                <p className="title">게더타운 사용방법</p>
                <section className="gatherCardWrapTwo">
                <Slider {...settings}>
                    <div className="gatherCard" data-idx="1">
                        <img className="gatherCardImg" src={use01}></img>
                    </div>
                    <div className="gatherCard" data-idx="2">
                        <img className="gatherCardImg" src={use02}></img> 
                    </div>
                    <div className="gatherCard" data-idx="3">
                        <img className="gatherCardImg" src={use03}></img> 
                    </div>
                    <div className="gatherCard" data-idx="4">
                        <img className="gatherCardImg" src={use04}></img> 
                    </div>
                    <div className="gatherCard" data-idx="5">
                        <img className="gatherCardImg" src={use05}></img> 
                    </div>
                    <div className="gatherCard" data-idx="6">
                        <img className="gatherCardImg" src={use06}></img>
                    </div>
                    <div className="gatherCard" data-idx="7">
                        <img className="gatherCardImg" src={use07}></img>
                    </div>
                    <div className="gatherCard" data-idx="8">
                        <img className="gatherCardImg" src={use08}></img>
                    </div>
                    <div className="gatherCard" data-idx="9">
                        <img className="gatherCardImg" src={use09}></img>
                    </div>
                    <div className="gatherCard" data-idx="10">
                        <img className="gatherCardImg" src={use10}></img>
                    </div>
                    <div className="gatherCard" data-idx="10">
                        <img className="gatherCardImg" src={use11}></img>
                    </div>
                    </Slider>
                </section>
                <p className="m-title">게더타운 접속방법</p>
                <section className="mGatherCardWrapOne">
                <Slider {...mSettings}>
                    <div className="gatherCard" data-idx="1">
                        <img className="gatherCardImg" src={login1}></img>
                    </div>
                    <div className="gatherCard" data-idx="2">
                        <img className="gatherCardImg" src={login2}></img> 
                    </div>
                    <div className="gatherCard" data-idx="3">
                        <img className="gatherCardImg" src={login3}></img> 
                    </div>
                    <div className="gatherCard" data-idx="4">
                        <img className="gatherCardImg" src={login4}></img> 
                    </div>
                    <div className="gatherCard" data-idx="5">
                        <img className="gatherCardImg" src={login5}></img> 
                    </div>
                    <div className="gatherCard" data-idx="6">
                        <img className="gatherCardImg" src={login6}></img>
                    </div>
                    <div className="gatherCard" data-idx="7">
                        <img className="gatherCardImg" src={login7}></img>
                    </div>
                    <div className="gatherCard" data-idx="8">
                        <img className="gatherCardImg" src={login8}></img>
                    </div>
                    <div className="gatherCard" data-idx="9">
                        <img className="gatherCardImg" src={login9}></img>
                    </div>
                    <div className="gatherCard" data-idx="10">
                        <img className="gatherCardImg" src={login10}></img>
                    </div>
                    </Slider>
                </section>
                <p className="m-title">게더타운 사용방법</p>
                <section className="mGatherCardWrapTwo">
                <Slider {...mSettings}>
                    <div className="gatherCard" data-idx="1">
                        <img className="gatherCardImg" src={use01}></img>
                    </div>
                    <div className="gatherCard" data-idx="2">
                        <img className="gatherCardImg" src={use02}></img> 
                    </div>
                    <div className="gatherCard" data-idx="3">
                        <img className="gatherCardImg" src={use03}></img> 
                    </div>
                    <div className="gatherCard" data-idx="4">
                        <img className="gatherCardImg" src={use04}></img> 
                    </div>
                    <div className="gatherCard" data-idx="5">
                        <img className="gatherCardImg" src={use05}></img> 
                    </div>
                    <div className="gatherCard" data-idx="6">
                        <img className="gatherCardImg" src={use06}></img>
                    </div>
                    <div className="gatherCard" data-idx="7">
                        <img className="gatherCardImg" src={use07}></img>
                    </div>
                    <div className="gatherCard" data-idx="8">
                        <img className="gatherCardImg" src={use08}></img>
                    </div>
                    <div className="gatherCard" data-idx="9">
                        <img className="gatherCardImg" src={use09}></img>
                    </div>
                    <div className="gatherCard" data-idx="10">
                        <img className="gatherCardImg" src={use10}></img>
                    </div>
                    <div className="gatherCard" data-idx="10">
                        <img className="gatherCardImg" src={use11}></img>
                    </div>
                    </Slider>
                </section>
            </main>
        </>
    )
}

export default Experience;