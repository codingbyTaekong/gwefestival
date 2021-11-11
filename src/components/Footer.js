import React from "react";
import "./Footer.css"
import Logo from "../assets/imgs/footerLogo.png"

const Footer = ()=>{
    return (
    <footer>
        <div className="f-c-row">
            <h1>행사에 대해 궁금한 점은 이쪽으로 문의하세요!</h1>
            <div className="f-txtbox">
                <span className="far fa-envelope"></span>
                <span className="email">junphoto38@korea.kr</span>
                <span className="fas fa-phone-alt"></span>
                <span className="tel">033-258-5374</span>
            </div>
        </div>
        <div className="f-row">
            <div className="f-logo">
                <img src={Logo}></img>
            </div>
        </div>
        <div className="info-box">
            <div className="info">
                <h3 className="info-title">NOTICE</h3>
                <p className="info-txt">
                    이용자분들께 안내해 드립니다.<br/>
                    2021 강원 정보교육 성과나눔축제는 Microsoft사의<br/>
                    구버전 익스플로러(IE) 브라우저를 지원해드리지 못하므로, 오른쪽 브라우저를 이용해주세요.
                </p>
            </div>
            <div className="browsers">
                <a href="https://www.google.com/intl/ko/chrome/" target="_blank" className="browser"></a>
                <a href="https://www.mozilla.org/ko/firefox/new/" target="_blank" className="browser"></a>
                <a href="https://support.apple.com/ko_KR/downloads/safari" target="_blank" className="browser"></a>
                <a href="https://whale.naver.com/ko/download/win/" target="_blank" className="browser"></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer;