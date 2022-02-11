import React from 'react';
import { Link as L } from 'gatsby';

import styled from 'styled-components';
import useHeader from "../../lib/hooks/useHeader";
import storage from "../../lib/storage";
import palette from '../../lib/styles/palette';
import { device } from '../../lib/styles/sizes';

const Header = () => {
    const { menu, setMenu } = useHeader();

    const menuList = [
        { title: "park.", menu: "HOME", link: "/" },
        { title: "about.", menu: "ABOUT", link: "/about" },
        { title: "proj.", menu: "PROJ", link: "/project" },
    ];

    const MenuLoader = () => {
        const menu = storage.getItem('CURRENT_MENU') || "HOME";
        const { setMenu } = useHeader();
        setMenu(menu);
    };
    MenuLoader();

    return (
        <Block>
            {
                menuList.map((item) => (
                    <Link key={item.menu} className="link" to={item.link} isClick={menu === item.menu} onClick={() => setMenu(item.menu, true)}>
                        { item.title }
                    </Link>
                ))
            }
        </Block>
    )
}

const Block = styled.div`
    cursor: none;
    border-bottom: 1px solid #000;
    background-color: ${palette.background};
    position: fixed; display: flex; 
    z-index: 10; 
    top: 0%; 
    width: 100%; 
    ${device.mobile} {
        flex-wrap: wrap;
    }
`;
    
const Link = styled(L)`
    padding: 10px;
    width:100%; max-width: 200px;
    display: inline-flex; 
    align-items: center; justify-content: center;
    font-size: 2.2rem;
    font-weight: 900;
    margin: 0px; position: relative;
    color: ${palette.black0};
    text-decoration: none;
    &:hover {
        text-decoration: line-through;
    }

    &:first-child { 
        margin: 0px auto 0px 0px;
        color: ${palette.primary};
        ${device.tablet} {
            border-right: none;
        }
    }
    &:nth-child(3) {
        // border-right: 2px solid #000;
    }

    ${device.mobile} {
        max-width: none;
        flex-basis: 50%;
        font-size: 1.5rem;
        border-left: 2px solid #000;
        &:first-child {
            flex-basis: 100%;
            border: 2px solid #000;
        }
    }
`;


export default Header;