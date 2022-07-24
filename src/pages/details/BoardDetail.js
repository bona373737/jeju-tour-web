/** 
 * @Filename: BoardDetail.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 공지사항, FAQ 게시판 상세페이지
 */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BoardDetailContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    h1 {
        padding: 30px 0;
        border-bottom: 1px solid var(--subblue);
    }

    div {
        padding-top: 15px;
        line-height: 2;
    }

    button {
        margin-top: 50px;
        padding: 15px;
        width: 100%;
    }
`;

const BoardDetail = () => {
    const location = useLocation();
    const { item, api } = location.state;

    return (
        <BoardDetailContainer>
            <h1>
                <p>{item.title}</p>
                <span>{item.reg_date}</span> <span>{item.edit_date}</span>
            </h1>
            <div>{item.content}</div>
            <NavLink to={`/service/${api}`}>
                <button type='button'>목록</button>
            </NavLink>
        </BoardDetailContainer>
    );
};

export default BoardDetail;