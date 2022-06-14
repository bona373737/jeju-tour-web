import React from 'react';
import StyledTab from '../styles/StyledTab';
import styled from 'styled-components';

const TabButtonStyle = styled.div`
    width: 100%;
    height: 60px;
    background-color: var(--white);
`

const TabButton = () => {
    return (
        <TabButtonStyle>
            <StyledTab to="/place">관광지</StyledTab>
            <StyledTab to="/accom">숙소</StyledTab>
            <StyledTab to="/food">음식</StyledTab>
        </TabButtonStyle>
    );
};

export default TabButton;