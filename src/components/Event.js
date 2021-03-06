import React, { useRef, useEffect, useState } from "react";

import "./event.css";

import ba1 from "../assets/imgs/event/1.png"
import ba2 from "../assets/imgs/event/2.png"
import ba3 from "../assets/imgs/event/3.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CookiesProvider, useCookies } from 'react-cookie';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


const EventBanner = () => {
    const popup = useRef()
    let now = new Date();
    let after1m =new Date();
    
    const [cookies, setCookie, removeCookie] = useCookies(['eb']);
    const [show, setShow] = useState(true);
    const [check, setCheck] =useState(false);
    const canselevent = (e) => {
        if (check) {
            after1m.setDate(now.getDate()+1);
            setCookie('eb', 'DEF82E0CC0531342B4CBCF35220EE7BE', {path:'/', expires:after1m});
            setShow(!show);
        } else {
            setShow(!show);
        }
    }
    useEffect(()=> {
        if (cookies.eb) {
            setShow(!show);
        }
    }, [popup])
    
    return (
        <CookiesProvider>
            <div className={show ? "ba-bback" : "ba-bback closed"} ref={popup}>
                <div className="ba-wrap">
                    <div className="cansel-ba" onClick={canselevent}>
                        <i className="far fa-times"></i>
                    </div>
                    <div className="events-box">
                        <Slider {...settings}>
                            <div className="e-banner" data-idx="3">
                                <img src={ba3}></img>
                            </div>
                            <div className="e-banner" data-idx="1">
                                <img src={ba1}></img>
                            </div>
                            <div className="e-banner" data-idx="2">
                                <img src={ba2}></img>
                            </div>
                        </Slider>
                    </div>
                    <div className="cb-box">
                        <label htmlFor="agree">
                            <input type="checkbox" name="argee" id="agree" checked={check} onChange={((e)=> {setCheck(!check)})}></input>
                            ?????? ?????? ????????????
                        </label>
                    </div>
                </div>
            </div>
        </CookiesProvider>
    )
}

export default EventBanner;