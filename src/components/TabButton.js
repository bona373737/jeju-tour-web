import React from 'react';
import StyledTab from '../styles/StyledTab';
import styled from 'styled-components';

import TravelIcon from "../assets/icon/pin_active.png";
import HotelIcon from "../assets/icon/hotel.png";
import FoodIcon from "../assets/icon/food.png";

const TabButtonStyle = styled.div`
    box-sizing: border-box;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 6.6vh;
    background-color: var(--white);
    display: flex;

    .tab {
        background-color: var(--sky);
        position: absolute;
        width: 25%;
        height: 6.6vh;
        left: 10%;
        display: flex;

        .travelIcon {
            position: absolute;
            width: 20%;
            top: 35%;
            left: 20%;
        }

        .text {
            position: absolute;
            left: 50%;
            top: 50%;
            color: var(--blue);
        }

        .line {
            background-color: var(--blue);
            width: 100%;
            height: 0.3vh;
            position: absolute;
            bottom: 0;
        }
    }

    .hotelIcon {
        position: absolute;
        width: 20px;
        left: 50%;
    }

    .foodIcon {
        position: absolute;
        width: 20px;
        left: 100%;
    }
`;

const TabButton = () => {
    return (
        <TabButtonStyle>
            <div className="tab">
                <div className="line">
                    <img className="travelIcon" src={TravelIcon} alt="travelicon"/>
                    <StyledTab to="/place" className="text">여행지</StyledTab>
                </div>
            </div>

            <div className="tab">
                <div className="line">
                    <img className="hotelIcon" src={HotelIcon} alt="hotelicon"/>
                    <StyledTab to="/accom" className="text">숙소</StyledTab>
                </div>
            </div>

            <div className="tab">
                <div className="line">
                    <img className="foodIcon" src={FoodIcon} alt="foodicon" />
                    <StyledTab to="/food" className='text'>음식</StyledTab>
                </div>
            </div>
        </TabButtonStyle>
    );
};

export default TabButton;