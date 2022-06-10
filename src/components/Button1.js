import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button1Container = styled(NavLink)`

`;

const Button1 = ({to,children}) => {
    return (
        <Button1Container to={to}>
            {children}
        </Button1Container>
    );
};

export default Button1;