import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Sidebar from './Sidebar'; 
import Search from './Search';

import Logo from '../assets/icon/TRAY.png';
import SearchButton from '../assets/icon/search.png';
import MenuButton from '../assets/icon/menubutton.png';

const HeaderContainer = styled.div`


    .content-wrap {
        box-sizing: border-box;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 70px;
        position: sticky;
        display: flex;
        align-items: center;
        background-color: var(--white);

        .logo {
            position: absolute;
            width: 90px;
            top: 24px;
            left: 40px;
        }

        .icons {
            display: flex;

            .searchButton {
                position: absolute;
                width: 24px;
                top: 24px;
                right: 76px;
            }

            .menuButton {
                position: absolute;
                width: 20px;
                top: 26px;
                right: 36px;
            }
        }   

        h1 {
            text-indent: -9999em;
        }


    }
`;

const Header = () => {
    //sidebar 토글기능
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = useCallback((e)=>setShowSidebar(!showSidebar),[showSidebar])

    return (
        <HeaderContainer>
            <div className="content-wrap">
                <NavLink to="/">
                    <img className='logo' src={Logo} alt="Logo" />
                    <h1>TRAY</h1>
                </NavLink>
                <div className="icons">
                    <img className='searchButton' src={SearchButton} alt="search" />
                    <h1>검색</h1>
                    <img className='menuButton' src={MenuButton} alt="menu" onClick={toggleSidebar} />
                    {/* <h1>☰</h1> */}
                </div>
            </div>

            {/*조건부 렌더링_검색,햄버거 토글*/}
            {
                showSidebar? <Sidebar setShowSidebar={setShowSidebar}/>:""
            }
            <Search></Search>
        </HeaderContainer>
    );
};

export default Header;