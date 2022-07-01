import React from 'react';
import styled from 'styled-components';

const TagBtnContainer=styled.button`
    background-color: var(--white);
    color: var(--gray);
    border: 1px solid var(--gray);
    border-radius: 15px;
    box-sizing: border-box;
    padding: 5px;

    &:active{
        border-color: var(--blue);
        color: var(--blue);
    }
`;


const TagBtn = ({children,onClickFun}) => {
    return (
        <TagBtnContainer onClick={onClickFun}>
            {children}
        </TagBtnContainer>
    );
};

export default TagBtn;