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
        margin: 0 auto;
        width: 80%;
        height: 100%;

        .tab {
            background-color: var(--white);
            width: 33.33333%;
            height: 7vh;
            float: left;
            margin: 0 auto;

            .line {
                background-color: #ddd;
                width: 100%;
                height: 0.4vh;
                position: relative;
                top: 96%;
            }

            .icontext_area1 {
                width: 68px;
                height: 100%;
                margin: 0 auto;

                .text {
                    color: var(--gray);
                    position: relative;
                    top: 18%;
                    padding-left: 0.5em;
                    font-size: 0.9em;
                }

                .travel_icon {
                    position: relative;
                    height: 2.5vh;
                    top: 24%;
                }
            }

            .icontext_area2 {
                width: 52px;
                height: 100%;
                margin: 0 auto;

                .text {
                    color: var(--gray);
                    position: relative;
                    top: 18%;
                    padding-left: 0.5em;
                    font-size: 0.9em;
                }
                .hotel_icon {
                    position: relative;
                    height: 2.3vh;
                    top: 24%;
                }

                .food_icon {
                    position: relative;
                    height: 2.3vh;
                    top: 24%;
                }
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
                    <StyledTab to="/place">
                        <div className="icontext_area1">
                            <img
                                className="travel_icon"
                                src={TravelIcon}
                                alt="travelicon"
                            />
                            <span className="text">여행지</span>
                        </div>
                    </StyledTab>
                </div>

                <div className="tab">
                    <div className="line"></div>
                    <StyledTab to="/accom">
                        <div className="icontext_area2">
                            <img
                                className="hotel_icon"
                                src={HotelIcon}
                                alt="hotelicon"
                            />
                            <span className="text">숙소</span>
                        </div>
                    </StyledTab>
                </div>

                <div className="tab">
                    <div className="line"></div>
                    <StyledTab to="/food">
                        <div className="icontext_area2">
                            <img
                                className="food_icon"
                                src={FoodIcon}
                                alt="foodicon"
                            />
                            <span className="text">음식</span>
                        </div>
                    </StyledTab>
                </div>
            </div>
        </TabButtonStyle>
    );
});

export default TabButton;
