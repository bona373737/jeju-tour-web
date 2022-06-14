import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Sidebar from './Sidebar'; 
import Search from './Search';

import Logo from "../assets/icon/TRAY.png";


const HeaderContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 8vh;
    background-color: var(--white);

    .content-wrap {
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0.5em;
        background-color: #eee;

        .icons {
            display: flex;
        }   

        h1 {
            text-indent: -9999em;
        }

        img {
            width: 60px;
            position: absolute;
            left: 20px;
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className="content-wrap">
                <NavLink to="/">
                    <img src={Logo} alt="Logo" />
                    <h1>TRAY</h1>
                </NavLink>
                <div className="icons">
                    <h1>
                        검색
                    </h1>
                    <h1>☰</h1>
                </div>
            </div>

            {/*조건부 렌더링_검색,햄버거 토글*/}
            <Search></Search>
            <Sidebar></Sidebar>
        </HeaderContainer>
    );
};

export default Header;