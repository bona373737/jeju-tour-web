import React from 'react';
import styled from 'styled-components';

import BoardItem from '../components/BoardItem';

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

const NoticeBoard = () => {
    return (
        <NBContainer>
            <div className='content'>
                <h1>공지사항</h1>
                <BoardItem/>
                <BoardItem/>
                <BoardItem/>
                <BoardItem/>
                <BoardItem/>
                <BoardItem/>
            </div>
        </NBContainer>
    );
};

export default NoticeBoard;