import React from 'react';
import styled from 'styled-components';

import CardItem from '../components/CardItem';
import TabButton from '../components/TabButton';

const HomeContant = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E3EEFF88;
`;

const Home = () => {
    return (
        <HomeContant>
            <TabButton></TabButton>
            {/* map사용하여 CardItem 반복으로 출력하기 */}
           <CardItem></CardItem>
           <CardItem></CardItem>
           <CardItem></CardItem>
           <CardItem></CardItem>
        </HomeContant>
    );
};

export default Home;