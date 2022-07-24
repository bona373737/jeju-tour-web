/** 
 * @Filename: TabArea.js
 * @Author: 구나래, 구본아, 이재이
 * @Description: 헤더 영역 아래 여행지, 숙소, 음식 탭 버튼 영역
 */
import React, { memo } from "react";
import TabBtn from "./buttons/TabBtn";
import styled from "styled-components";

// import TravelIcon from "../assets/icon/pin.png";
import HotelIcon from "../assets/icon/hotel.png";
import FoodIcon from "../assets/icon/food.png";
import TravelIconAct from "../assets/icon/pin_active.png";
// import HotelIconAct from "../assets/icon/hotel_active.png";
// import FoodIconAct from "../assets/icon/food_active.png";

const TabAreaContainer = styled.div`
    box-sizing: border-box;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    width: 100%;
    height: 70px;
    z-index: 9;

    .tab_area {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 80%;
        height: 100%;

        .tab {
            width: 33.33333%;
            justify-content: center;
            align-items: center;

            .line {
                background-color: var(--subgray);
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
                height: 24px;
            }

            .hotel_icon, .food_icon {
                height: 22px;
            }

            .tabactive {
                background-color: var(--sky);
            }

            .lineactive {
                background-color: var(--blue);
            }

            .fontactive {
                color: var(--blue);
            }
        }
    }
`;

const TabArea = memo(() => {
    return (
        <TabAreaContainer>
            <div className="tab_area">
                <div className="tab tabactive">
                    <div className="line lineactive"></div>
                    <TabBtn to="/tab/place">
                        <img
                            className="travel_icon"
                            src={TravelIconAct}
                            alt="travelicon"
                        />
                        <span className="font5 fontactive">여행지</span>
                    </TabBtn>
                </div>

                <div className="tab">
                    <div className="line"></div>
                    <TabBtn to="/tab/accom">
                        <img
                            className="hotel_icon"
                            src={HotelIcon}
                            alt="hotelicon"
                        />
                        <span className="font6">숙소</span>
                    </TabBtn>
                </div>

                <div className="tab">
                    <div className="line"></div>
                    <TabBtn to="/tab/food">
                        <img
                            className="food_icon"
                            src={FoodIcon}
                            alt="foodicon"
                        />
                        <span className="font6">음식</span>
                    </TabBtn>
                </div>
            </div>
        </TabAreaContainer>
    );
});

export default TabArea;
