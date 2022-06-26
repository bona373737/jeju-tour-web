import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HashtagContainer = styled(NavLink)`
    padding: 10px;
    margin-right: 3%;
    margin-bottom: 4%;
    border-radius: 20px;
    border: 1px solid var(--blue);
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--blue);
    `;

const Hashtag = ({to, onClick, children}) => {
    return (
        <HashtagContainer to={to} onClick={onClick}>
            {`#${children}`}
        </HashtagContainer>
    );
};

export default Hashtag;