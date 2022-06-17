/**
 * @filename ListItem.js
 * @description 관광지,숙소,음식리스트 컴포넌트
 *              클릭된 리스트를 식별할 수있도록
 *              props로 클릭된 리스트의 id를 DetailePage.js에 전달한다.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

const ListItem = () => {
    return (
        <NavLink to='/place/:id'>
            <h1>관광지,숙소,음식점 리스트</h1>
        </NavLink>
    );
};

export default ListItem;