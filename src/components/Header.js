import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar'; 
import Search from './Search';


const HeaderContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 20vh;
    background-color: var(--main-color2);
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Search></Search>
            <Sidebar></Sidebar> 
        </HeaderContainer>
    );
};

export default Header;