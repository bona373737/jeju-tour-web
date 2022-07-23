/** 
 * @Filename: ThumbItem.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 데이터 썸네일 리스트 아이템 컴포넌트
 */
import React from 'react';
import styled from 'styled-components';

const ThumbItemContainer = styled.div`
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

const ThumbItem = ({item}) => {
    return (
        <ThumbItemContainer>
            <img src="" alt="thumbnail" />
            <div className="heart">
                하트
            </div>
        </ThumbItemContainer>
    );
};

export default ThumbItem;