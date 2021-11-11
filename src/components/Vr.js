import React from "react";
import { useParams } from "react-router-dom";
import "./vr.css"

const Vr = () => {
    const style = {
        width : "100%",
        height : "100%",
        border : "none"
    }
    let {id} = useParams();
    return (
        <iframe style={style} src={"https://pict4.cafe24.com/gwefestival/scene_"+id+"_en.html"}></iframe>
    )
}

export default Vr;
