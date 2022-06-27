import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

const NIContainer = styled.div`
    width: 100%;

    .Collapsible {
        width: 80%;
        margin: 0 auto;

        .Collapsible__trigger {
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid var(--subblue);
        }

        p {
            padding: 10px 0;
            border-bottom: 1px solid var(--subblue);
            line-height: 1.5;
        }
    }
`;

const NoticeItem = () => {
    return (
        <NIContainer>
             <Collapsible trigger="시스템 개편 예정 안내">
                <p>
                    트라이가 제주 여행 어플의 새로운 시작을 준비하고자 시스템을 개편합니다.<br/>
                    다가오는 8월, 만족스런 제주 여행을 계획하실 수 있도록 트라이가 더욱 더 새로운 모습으로 찾아뵙겠습니다.<br/>
                    <br/>
                    감사합니다.<br/>
                </p>
            </Collapsible>
        </NIContainer>
    );
};

export default NoticeItem;