import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HashtagContainer = styled(NavLink)`
    padding: 3%;
    margin-bottom: 3%;
    border-radius: 20px;
    color: var(--subblue);
    background: var(--sky);
`;

const Hashtag = ({to, onClick, children}) => {
    return (
        <HashtagContainer to={to} onClick={onClick}>
            {`# ${children}`}
        </HashtagContainer>
    );
};

export default Hashtag;