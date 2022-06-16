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
<<<<<<< HEAD
    //setter함수를 직접 변경
    // const toggleSidebar = useCallback(()=>setShowSidebar(!showSidebar),[showSidebar]);
    const toggleSidebar = useCallback(()=>{
        setShowSidebar(showSidebar => !showSidebar)
        setIsOpen((isOpen) => false);
    },[]);

=======
    const toggleSidebar = useCallback(() => {
        setShowSidebar(showSidebar => !showSidebar);
        setIsOpen((isOpen) => false);
    }, []);
>>>>>>> 5cc2d7177984bf7633d8ab455ab26be82fc3d3cd
    // 검색 버튼 toggle
    const [isOpen, setIsOpen] = useState(false);
    const onClick = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
<<<<<<< HEAD
        setShowSidebar((showSidebar)=>false);
=======
        setShowSidebar((showSidebar) => false);
>>>>>>> 5cc2d7177984bf7633d8ab455ab26be82fc3d3cd
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
                    <img
                        className="search_button"
                        src={SearchButton}
                        alt="search"
                        onClick={onClick}
                    />
                    <h1>검색</h1>
                </div>
                <div className="icon2" onClick={toggleSidebar}>
                    <img className='menu_button' src={MenuButton} alt="menu" />
                    <h1>☰</h1>
                </div>
                {/*조건부 렌더링_검색,햄버거 토글*/}
                {
                    showSidebar? <Sidebar setShowSidebar={setShowSidebar}/>:""
                }
            </div>
            <Search isOpen={isOpen}/>
        </HeaderContainer>
    );
});

export default Header;