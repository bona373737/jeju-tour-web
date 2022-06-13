import React from 'react';
import StyledNav from '../styles/StyledNav';

const Nav = () => {
    return (
        <div>
            <StyledNav to="/place">관광지</StyledNav>
            <StyledNav to="/accom">숙소</StyledNav>
            <StyledNav to="/food">음식</StyledNav>
        </div>
    );
};

export default Nav;