import React from 'react';

import Nav from '../components/Nav';
import CardItem from '../styles/CardItem';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            {/* map사용하여 CardItem 반복으로 출력하기 */}
           <CardItem></CardItem>
           <CardItem></CardItem>
           <CardItem></CardItem>
           <CardItem></CardItem>
        </div>
    );
};

export default Home;