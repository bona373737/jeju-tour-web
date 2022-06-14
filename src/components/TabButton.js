import React from 'react';
import StyledTab from '../styles/StyledTab';
import styled from 'styled-components';

import TravelIcon from '../assets/icon/pin.png';
import HotelIcon from '../assets/icon/hotel.png';
import FoodIcon from '../assets/icon/food.png';

const TabButtonStyle = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 8vh;
    background-color: var(--white);

    .travelIcon {
        position: absolute;
        width: 20px;
    }

    .hotelIcon {
        position: absolute;
        width: 20px;
    }

    .foodIcon {
        position: absolute;
        width: 20px
    }
`;

const TabButton = () => {
    return (
        <TabButtonStyle>
            <img className='travelIcon' src={TravelIcon} alt='travelicon' />
            <StyledTab to="/place">관광지</StyledTab>
            <img className='travelIcon' src={HotelIcon} alt='travelicon' />
            <StyledTab to="/accom">숙소</StyledTab>
            <img className='travelIcon' src={FoodIcon} alt='travelicon' />
            <StyledTab to="/food">음식</StyledTab>
        </TabButtonStyle>
    );
};

export default TabButton;