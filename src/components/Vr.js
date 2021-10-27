import React from "react";
import { useParams } from "react-router-dom";

const Vr = () => {
    const style = {
        width : "100%",
        height : "100%",
        border : "none"
    }
    let {id} = useParams();
    return (
        <iframe style={style} src={"https://mv.amaranth10.co.kr/scene_"+id+"_en.html"}></iframe>
    )
}

export default Vr;
