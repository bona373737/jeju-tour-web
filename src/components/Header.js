import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Sidebar from './Sidebar'; 
import Search from './Search';

import Logo from '../assets/icon/TRAY.png';
import SearchButton from '../assets/icon/search.png';
import MenuButton from '../assets/icon/menubutton.png';

const HeaderContainer = styled.div`
    width: 100%;

    .content_wrap {
        box-sizing: border-box;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
        background-color: var(--white);
        width: 100%;
        height: 7vh;
        position: fixed;
        display: flex;
        align-items: center;
        z-index: 10;

        .logo_area {
            background-color: var(--white);
            display: flex;
            box-sizing: border-box;
            height: 6.6vh;
            width: 40vw;

            .logo {
                margin: 0 auto;
                height: 5.4vw;
                position: relative;
                top: 32%;
            }
        }

        .icon1 {
            background-color: var(--white);
            display: flex;
            position: absolute;
            right: 20%;
            box-sizing: border-box;
            width: 10vw;
            height: 100%;

            .search_button {
                position: relative;
                height: 2.5vh;
                top: 32%;
            }
        }

        .icon2 {
            background-color: var(--white);
            display: flex;
            position: absolute;
            right: 8%;
            box-sizing: border-box;
            width: 12vw;
            height: 100%;

            .menu_button {
                position: relative;
                top: 34%;
                height: 2.2vh;
            }
        }

        h1 {
            text-indent: -9999em;
        }
    }
`;

const Header = memo(() => {
    // sidebar 토글기능
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = useCallback(() => {
        setShowSidebar(showSidebar => !showSidebar);
        setIsOpen((isOpen) => false);
    }, []);
    // search 열림/닫힘 기능
    const [isOpen, setIsOpen] = useState(false);
    const openSearch = useCallback(() => {
        setIsOpen(true);
        setShowSidebar((showSidebar) => false);
    }, []);
    const closeSearch = useCallback(() => {
        setIsOpen(false)
    }, []);

    return (
        <HeaderContainer>
            <div className="content_wrap">
                <NavLink to="/">
                    <div className="logo_area">
                        <img className="logo" src={Logo} alt="logo" />
                        <h1>tray</h1>
                    </div>
                </NavLink>

                <div className="icon1">
                    <img className="search_button" src={SearchButton} alt="search" onClick={openSearch} />
                    <h1>검색</h1>
                </div>
                <Search open={isOpen} close={closeSearch}/>

                <div className="icon2">
                    <img className='menu_button' src={MenuButton} alt="menu" onClick={toggleSidebar} />
                    <h1>☰</h1>
                </div>
                {showSidebar? <Sidebar setShowSidebar={setShowSidebar}/>:""}
            </div>            
        </HeaderContainer>
    );
});

export default Header;