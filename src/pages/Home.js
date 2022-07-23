/** 
 * @Filename: Home.js
 * @Author: 이재이(loveleej87@gmail.com)
 * @Description: 홈 페이지
 */
import React from "react";
import styled from "styled-components";

import ThemeItem from "../components/items/ThemeItem";
import TabArea from "../components/TabArea";

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #e3eeff88;
`;

const Home = () => {
    return (
        <HomeContainer>
            <TabArea />
            {/* map사용하여 ThemeItem 반복으로 출력하기 */}
            <ThemeItem></ThemeItem>
            <ThemeItem></ThemeItem>
            <ThemeItem></ThemeItem>
            <ThemeItem></ThemeItem>
        </HomeContainer>
    );
};

export default Home;
