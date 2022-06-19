import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Sidebar from "./Sidebar";
import Search from "./Search";

import Logo from "../assets/icon/logo.png";
import SearchButton from "../assets/icon/search.png";
import MenuButton from "../assets/icon/menubutton.png";

const HeaderContainer = styled.div`
    width: 100%;
    height: 7vh;
    box-sizing: border-box;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    position: fixed;
    z-index: 10;

    .content_wrap {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 80%;
        height: 100%;

        .logo_area {
            background-color: var(--white);
            justify-content: center;
            align-items: center;
            display: flex;
            height: 100%;

            .logo {
                height: 2.7vh;
            }
        }

        .icons_area {
            background-color: var(--white);
            justify-content: center;
            align-items: center;
            display: flex;
            height: 100%;

            .search_button {
                height: 2.5vh;
            }

            .menu_button {
                height: 2.2vh;
                padding-left: 14px;
            }
        }
    }

    h1 {
        text-indent: -9999em;
    }
`;

const Header = memo(() => {
    // sidebar 토글기능
    const [showSidebar, setShowSidebar] = useState(false);
    // setter함수를 직접 변경
    // const toggleSidebar = useCallback(()=>setShowSidebar(!showSidebar),[showSidebar]);
    const toggleSidebar = useCallback(() => {
        setShowSidebar((showSidebar) => !showSidebar);
        setIsOpen((isOpen) => false);
    }, []);

    // search 열림/닫힘 기능
    const [isOpen, setIsOpen] = useState(false);
    const openSearch = useCallback(() => {
        setIsOpen(true);
        setShowSidebar((showSidebar) => false);
    }, []);
    const closeSearch = useCallback(() => {
        setIsOpen(false);
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
                <div className="icons_area">
                    <img
                        className="search_button"
                        src={SearchButton}
                        alt="search"
                        onClick={openSearch}
                    />
                    <h1>검색</h1>

                    <Search open={isOpen} setIsOpen={setIsOpen} close={closeSearch} />

                    <img
                        className="menu_button"
                        src={MenuButton}
                        alt="menu"
                        onClick={toggleSidebar}
                    />
                    <h1>☰</h1>
                </div>
            </div>
            {showSidebar ? <Sidebar setShowSidebar={setShowSidebar} /> : ""}
        </HeaderContainer>
    );
});

export default Header;
