import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import BoardItem1 from '../components/BoardItem1';

const NBContainer = styled.div`
    width: 100%;

    .content {
        width: 80%;
        margin: 0 auto;

        h1 {
            padding: 20%;
            text-align: center;
            border-bottom: 1px solid var(--subblue);
        }

        button {
            margin-top: 50px;
            padding: 15px;
            width: 100%;
        }
    }
`;

const NoticeBoard1 = () => {
    return (
        <NBContainer>
            <div className='content'>
                <h1>자주 묻는 질문</h1>
                <BoardItem1/>
                <BoardItem1/>
                <BoardItem1/>
                <BoardItem1/>
                <BoardItem1/>
                <BoardItem1/>
                <NavLink to='/qna'>
                    <button type='button'>1:1 문의하기</button>
                </NavLink>
            </div>
        </NBContainer>
    );
};

export default NoticeBoard1;