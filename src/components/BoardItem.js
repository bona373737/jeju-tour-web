import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Arrow from '../assets/icon/arrow.png'; 

const BIContainer = styled(NavLink)`
    border-bottom: 1px solid var(--subblue);
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center; 

    .left {
        p {
            padding-bottom: 7px;
        }
    }
    
    img {
        width: 10px;
        height: 10px;
        transform: rotate(-90deg);
    }
`;

const BoardItem = () => {
    return (
        <BIContainer to='/notice/1'>
            <div className ="left">
                <p className='title'>시스템 개편 예정 안내</p>
                <span>2022-06-01</span>
            </div>
            <img className="arrow" src ={Arrow} alt="arrow"/>
        </BIContainer>
    );
};

export default BoardItem;