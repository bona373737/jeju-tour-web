/**
 * @filename Tab.js
 * @description path파라미터를 전달받아 axis통신 파라미터로 전달 
 *              관광지,숙소,음식 각 데이터를 불러와 화면에 리스트 출력
 */
import React from 'react';
import TabButton from '../components/TabButton';
import ListItem from '../components/ListItem';

const Tab = () => {
    return (
        <div>
          <TabButton></TabButton>
          {/* map으로 ListItem 반복출력 */}
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </div>
    );
};

export default Tab;