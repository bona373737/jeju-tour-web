/**
 * @Filename: BoardItem.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 공지사항, FAQ 게시판 리스트 아이템 컴포넌트
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Arrow from '../../assets/icon/arrow.png'; 

const BoardItemContainer = styled.div`
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

const BoardItem = ({item, api}) => {
    return (
        <BoardItemContainer>
            {api === 'notice' ? (
                <>
                    {/* notice_no은 notice 아이디값(PK) */}
                    <NavLink to={`/service/notice/${item.notice_no}`} className ="left">
                        <p className='title'>{item.title}</p>
                        <span>{item.reg_date.substring(0,10)}</span>
                    </NavLink>
                    <img className="arrow" src ={Arrow} alt="arrow"/>
                </>
                
            ) : (
                <>
                    {/* faq_no은 faq 아이디값(PK) */}
                    <NavLink to={`/service/faq/${item.faq_no}`} className ="left">
                        <p className='title'>{item.title}</p>
                        <span>{item.reg_date.substring(0,10)}</span>
                    </NavLink>
                    <img className="arrow" src ={Arrow} alt="arrow"/>
                </>
            )}
        </BoardItemContainer>
    );
};

export default BoardItem;