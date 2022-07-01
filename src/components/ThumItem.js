import React from 'react';
import styled from 'styled-components';

const ThumItemContainer = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid tomato;
    position: relative;
    img{
        width: 100%;
        object-fit: fill;
    }
    .heart{
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
`;

const ThumItem = ({item}) => {
    return (
        <ThumItemContainer>
            <img src="" alt="thumbnail" />
            <div className="heart">
                하트
            </div>
        </ThumItemContainer>
    );
};

export default ThumItem;