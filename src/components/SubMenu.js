import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Depth3Menu from "./Depth3Menu"

const SidebarLink = styled.a`
    display : flex;
    align-items: center;
    color : #fff;
    width : 100%;
    height : 60px;
    font-family: "NotoSansKR-Bold";
    font-size: 18px;
    cursor : pointer;
`
const SidebarNotLink = styled.div`
    display : flex;
    align-items: center;
    color : #fff;
    width : 100%;
    height : 60px;
    font-family: "NotoSansKR-Bold";
    font-size: 18px;
    cursor : pointer;
`
const Sidebarlabel = styled.span`
    margin-left : 33px;
    margin-right : auto;
`;

const Depth2 = styled.span`
    margin-right : auto;
    font-family: "NotoSansKR-Medium";
    font-size: 16px;
`;

const DropdownLink = styled.div`
    display : flex;
    align-items: center;
    color : #fff;
    width : 100%;
    height : 60px;
    background : #052a4d;
    padding-left : 33px;
    font-family: "NotoSansKR-Medium";
    font-size: 16px;
    cursor : pointer;
`




const SubMenu = ({ item, i, onClick }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = ()=> setSubnav(!subnav);
    const [depth3, setDepth3] = useState({
        title : "",
        clicked : false
    });
    const showdepth3 = (e)=> {
        if (!depth3.clicked) {
            setDepth3({
                title : e.target.textContent,
                clicked : true,
            })
        } else {
            setDepth3({
                title : e.target.textContent,
                clicked : false,
            })
        }
    }
    return (
        <>
            {item.path
                ? <SidebarLink href={item.path} >
                    {item.icon ? item.icon : null}
                    <Sidebarlabel>{item.title}</Sidebarlabel>
                        <div>
                            {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                        </div>
                    </SidebarLink>
                : <SidebarNotLink onClick={item.subNav && showSubnav} key={i}>
                    {item.icon ? item.icon : null}
                    <Sidebarlabel>{item.title}</Sidebarlabel>
                        <div>
                            {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                        </div>
                </SidebarNotLink>
            }
            {subnav && item.subNav.map((item, index)=> {
                return (
                    <>
                        <DropdownLink key={index} onClick={item.subNav && showdepth3}>
                            <Depth2 >
                                {item.title}
                            </Depth2>
                            {item.subNav && depth3.clicked ? item.iconOpened : item.subNav ? item.iconClosed : null}
                        </DropdownLink>
                        {item.subNav && depth3.clicked ? <Depth3Menu state={depth3} title={item.title} depth3Items={item.subNav} onClick={onClick} /> : null}
                    </>
                )
            })}
        </>
    )
}

export default SubMenu;