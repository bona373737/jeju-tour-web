import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import '../assets/scss/color.scss';
import Sidebar from './Sidebar'; 
import Search from './Search';


const HeaderContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 10vh;
    background-color: --main-color2;
    /* background-color: $main-color; */

    .content-wrap{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icons{
            display: flex;
        }   
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className="content-wrap">
                <NavLink to='/'>
                    <h1>TRAY</h1>
                </NavLink>
                <div className="icons">
                    <h1>검색</h1>
                    <h1>햄버거</h1>
                </div>
            </div>
            
            {/*조건부 렌더링_검색,햄버거 토글*/}
            <Search></Search>
            <Sidebar></Sidebar> 
        </HeaderContainer>
    );
};

export default Header;