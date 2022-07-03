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
        <BIContainer to='/faq/1'>
            <div className ="left">
                <p className='title'>Q. 계정을 잊어버렸어요.</p>
                <span>2022-06-01</span>
            </div>
            <img className="arrow" src ={Arrow} alt="arrow"/>
        </BIContainer>
    );
};

export default BoardItem;