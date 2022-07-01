import React from 'react';
import styled from 'styled-components';

import NoticeItem from '../components/NoticeItem';

const NoticeContainer = styled.div`
    width: 100%;

    .content {
        width: 80%;
        margin: 0 auto;

        h1 {
            padding: 20%;
            text-align: center;
        }
    }
`;

const Notice = () => {
    return (
        <NoticeContainer>
            <div className='content'>
                <h1>공지사항</h1>
            </div>
            <NoticeItem />
            <NoticeItem />
            <NoticeItem />
            <NoticeItem />
        </NoticeContainer>
    );
};

export default Notice;