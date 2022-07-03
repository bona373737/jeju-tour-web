import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BDContainer = styled.div`
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
    return (
        <BDContainer>
            <h1>시스템 개편 예정 안내</h1>
            <div>
                트라이가 제주 여행 어플의 새로운 시작을 준비하고자 시스템을 개편합니다. 다가오는 8월, 만족스런 제주 여행을 계획하실 수 있도록 트라이가 더욱 더 새로운 모습으로 찾아뵐테니 많은 기대 부탁드립니다. 감사합니다.
            </div>
            <NavLink to='/notice'>
                <button type='button'>목록</button>
            </NavLink>
        </BDContainer>
    );
};

export default BoardDetail;