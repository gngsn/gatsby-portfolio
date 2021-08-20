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
                    <Link key={item.menu} to={item.link} onClick={() => setMenu(item.menu, true)}>
                        &nbsp;{item.title}.
                        {
                            menu === item.menu ? <UnderBar /> : <></>
                        }
                    </Link>
                ))
            }
        </Block>
    )
}

const Block = styled.div`
    background: linear-gradient(180deg, ${palette.grey0} 20%, ${palette.grey0_p60} 67%, transparent 100%);
    position: fixed; display: flex; z-index: 10; top: 0%; width: 100%; padding: 20px 10px 40px;
`;

const Link = styled(L)`
    font-weight: 100; font-size: 2.6rem;
    margin: 0px 5px; padding: 0px 5px; position: relative;
    display: inline-flex; font-family: 'Noto Th'; color: ${palette.black0};
    text-decoration: none;
    &:last-child { 
        margin: 0px 20px 0px auto;
        color: ${palette.red0};
    }

    @media (max-width:600px) {
        font-size: 1.5rem;
    }
`;

const UnderBar = styled.span`
    position: absolute; z-index: 5; 
    top: 47%;
    width: 100%; left: 0;
    border-top: 2px solid ${palette.red0}; 
    transform: rotate(-3deg); opacity: .3;

    @media (max-width:600px) {
        margin-top: -20px;
    }
`;



export default Header;