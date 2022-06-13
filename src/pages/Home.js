import React from 'react';

import CardItem from '../styles/CardItem';
import TabButton from '../components/TabButton';

const Home = () => {
    return (
        <div>
            <TabButton></TabButton>
            {/* map사용하여 CardItem 반복으로 출력하기 */}
           <CardItem></CardItem>
           <CardItem></CardItem>
           <CardItem></CardItem>
           <CardItem></CardItem>
        </div>
    );
};

export default Home;