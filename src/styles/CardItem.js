import React from 'react';
import { NavLink } from 'react-router-dom';

const CardItem = () => {
    return (
        <NavLink to='/magazine/:id'>
            <h1 className='menufont'>여행컨텐츠 박스위치</h1>
        </NavLink>
    );
};

export default CardItem;