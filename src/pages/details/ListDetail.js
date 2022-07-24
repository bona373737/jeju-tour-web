/** 
 * @Filename: ListDetail.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 리스트 클릭 시 보여질 상세페이지
 *               클릭된 리스트를 식별할 수 있도록
 *               props로 클릭된 리스트의 id를 ListDetail.js에 전달한다.
 */
import React from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


const DetailContainer=styled.div`
    box-sizing: border-box;
    padding: 15px;
    width: 80%;
    margin: auto;
`;

const ListDetail = () => {
    const location = useLocation();
    const { item } = location.state;

    return (
        <DetailContainer>
            <h1>{item.title}</h1>
            <h1>{item.introduction}</h1>
            <h1>{item.address}</h1>
            <h1>{item.tag}</h1>
        </DetailContainer>
    );
};

export default ListDetail;