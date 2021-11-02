import React from "react";
import { useParams } from "react-router-dom";

const Vr = () => {
    function test() {
        console.log('testtttt')
    }
    const style = {
        width : "100%",
        height : "100%",
        border : "none"
    }
    let {id} = useParams();
    return (
        <iframe style={style} src={"https://pict1.cafe24.com/douzonetest/scene"+id+"_en.html"}></iframe>
    )
}

export default Vr;
