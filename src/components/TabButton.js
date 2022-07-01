import React, { memo } from "react";
import StyledTab from "../styles/StyledTab";
import styled from "styled-components";

import TravelIcon from "../assets/icon/pin.png";
import HotelIcon from "../assets/icon/hotel.png";
import FoodIcon from "../assets/icon/food.png";
import TravelIconAct from "../assets/icon/pin_active.png";
import HotelIconAct from "../assets/icon/hotel_active.png";
import FoodIconAct from "../assets/icon/food_active.png";

const TabButtonStyle = styled.div`
    box-sizing: border-box;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    width: 100%;
    height: 7vh;
    position: relative;
    z-index: 9;

    .tab_area {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 80%;
        height: 100%;

        .tab {
            background-color: var(--white);
            width: 33.33333%;
            justify-content: center;
            align-items: center;

            .line {
                background-color: #ddd;
                width: 100%;
                margin: 0 auto;
                height: 0.4vh;
                position: relative;
                top: 96%;
            }

            span {
                color: var(--gray);
                padding-left: 8px;
            }

            .travel_icon {
                height: 2.5vh;
            }

            .hotel_icon, .food_icon {
                height: 2.3vh;
            }
        }
    }
`;

const TabButton = memo(() => {
    return (
        <TabButtonStyle>
            <div className="tab_area">
                <div className="tab">
                    <div className="line"></div>
                    <StyledTab to="/tab/place">
                        <img
                            className="travel_icon"
                            src={TravelIcon}
                            alt="travelicon"
                        />
                        <span className="font5">여행지</span>
                    </StyledTab>
                </div>

                <div className="tab">
                    <div className="line"></div>
                    <StyledTab to="/tab/accom">
                        <img
                            className="hotel_icon"
                            src={HotelIcon}
                            alt="hotelicon"
                        />
                        <span className="font5">숙소</span>
                    </StyledTab>
                </div>

                <div className="tab">
                    <div className="line"></div>
                    <StyledTab to="/tab/food">
                        <img
                            className="food_icon"
                            src={FoodIcon}
                            alt="foodicon"
                        />
                        <span className="font5">음식</span>
                    </StyledTab>
                </div>
            </div>
        </TabButtonStyle>
    );
});

export default TabButton;
