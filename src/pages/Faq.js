import React from 'react';
import styled from 'styled-components';

const FaqContainer = styled.div`
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

const Faq = () => {
    return (
        <FaqContainer>
            <div className='content'>
                <h1>자주 묻는 질문</h1>
            </div>
        </FaqContainer>
    );
};


export default Faq;