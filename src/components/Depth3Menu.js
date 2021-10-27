import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Depth3Menu = ({depth3Items, state, title, onClick}) => {
    const Depth3_S = styled(Link)`
    display : flex;
    align-items: center;
    color : #fff;
    width : 100%;
    height : 60px;
    background : #001427;
    padding-left : 33px;
    font-family: "NotoSansKR-Medium";
    font-size: 14px;
`;
    return (
        state.title === title && depth3Items.map((item, index)=> {
            return (
                <>
                    <Depth3_S to={item.path} key={index} onClick={onClick}>{item.title}</Depth3_S>
                </>
            )
        })
    )
}

export default Depth3Menu;