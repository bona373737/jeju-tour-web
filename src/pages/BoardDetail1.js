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
            <h1>Q. 계정을 잊어버렸어요.</h1>
            <div>
                계정 찾는 방법 안내 내용이 여기에 들어갈 예정입니다. 지금은 임의로 작성된 내용을 넣을 것입니다. 추후 수정할 수 있도록 빈 칸만 채워넣을 용도로 계속해서 텍스트를 작성해 보도록 하겠습니다.
            </div>
            <NavLink to='/faq'>
                <button type='button'>목록</button>
            </NavLink>
        </BDContainer>
    );
};

export default BoardDetail;