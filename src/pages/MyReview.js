import React from 'react';
import styled from 'styled-components';
import ReivewItem from '../components/ReivewItem';

const MyReviewContent = styled.div`
    width: 80%;
    margin: auto;
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