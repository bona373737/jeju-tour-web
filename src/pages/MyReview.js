import React from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

import ReivewItem from '../components/ReivewItem';

const MyReviewContent = styled.div`
    padding: 10px;

`;

const MyReview = () => {
    return (
        <MyReviewContent>
            <h1>내 리뷰</h1>
            <ul>
               <ReivewItem></ReivewItem>
               <ReivewItem></ReivewItem>
               <ReivewItem></ReivewItem>
            </ul>
        </MyReviewContent>
    );
};

export default MyReview;