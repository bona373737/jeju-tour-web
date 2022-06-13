import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavContainer = styled(NavLink)`

`;

const StyledNav = ({to,children}) => {
    return (
        <StyledNavContainer to={to}>
            {children}
        </StyledNavContainer>
    );
};

export default StyledNav;