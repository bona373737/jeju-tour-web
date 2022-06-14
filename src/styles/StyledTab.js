import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledTabContainer = styled(NavLink)`

`;

const StyledTab = ({to,children}) => {
    return (
        <StyledTabContainer to={to}>
            {children}
        </StyledTabContainer>
    );
};

export default StyledTab;