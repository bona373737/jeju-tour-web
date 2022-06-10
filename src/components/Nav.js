import React from 'react';
import { NavLink } from 'react-router-dom';
import Button1 from './Button1';

const Nav = () => {
    return (
        <div>
            <Button1 to="/tab/:tab">관광지</Button1>
            <Button1 to="/tab/:tab">숙소</Button1>
            <Button1 to="/tab/:tab">음식</Button1>
        </div>
    );
};

export default Nav;