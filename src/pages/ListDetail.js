import React from 'react';
// import { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


const DetailContainer=styled.div`
    box-sizing: border-box;
    padding: 15px;
    width: 80%;
    margin: auto;
`;

const ListDetail = () => {
    const location = useLocation()
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