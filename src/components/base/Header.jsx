import React from 'react';
import { Link as L } from 'gatsby';

import styled from 'styled-components';
import useHeader from "../../lib/hooks/useHeader";
import storage from "../../lib/storage";
import palette from '../../lib/styles/palette';

const Header = () => {
    const { menu, setMenu } = useHeader();

    const menuList = [
        { title: "ABOUT", menu: "ABOUT", link: "/about" },
        { title: "PROJ", menu: "PROJ", link: "/project" },
        { title: "PARK", menu: "HOME", link: "/" },
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
                    <Link key={item.menu} to={item.link} isClick={menu === item.menu} onClick={() => setMenu(item.menu, true)}>
                        { item.title }
                    </Link>
                ))
            }
        </Block>
    )
}

const Block = styled.div`
    border: 2px solid #000;
    background-color: white;
    position: fixed; display: flex; z-index: 10; top: 0%; width: 100%; 
`;
    
const Link = styled(L)`
    padding: 10px 35px;
    font-family: Fira Bl; 
    border-right: 2px solid #000;
    font-size: 2.5rem;
    margin: 0px; position: relative;
    display: inline-flex; 
    color: ${palette.black0};
    text-decoration: none;
    font-weight: 900;

    &:last-child { 
        border-left: 2px solid #000;
        border-right: none;
        margin: 0px 0px 0px auto;
        color: ${palette.red0};
    }

    @media (max-width:600px) {
        font-size: 1.5rem;
    }
`;


export default Header;