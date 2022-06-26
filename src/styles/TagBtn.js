import React from 'react';
import styled from 'styled-components';

const TagBtnContainer = styled.button`
    background-color: var(--white);
    border: 0.5px solid var(--gray);

    &:active{
        border: 0.5px solid var(--blue);
        color: var(--blue);
    }
`;

const TagBtn = ({children, onClickFun}) => {
    return (
        <TagBtnContainer onClick={onClickFun}>
            {children}
        </TagBtnContainer>
    );
};

export default TagBtn;