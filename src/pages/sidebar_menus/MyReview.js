/** 
 * @Filename: MyReview.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 사이드바의 내 리뷰 메뉴 페이지 
 */
import React from "react";
import styled from "styled-components";
import ReivewItem from "../../components/items/ReivewItem";

const MyReviewContainer = styled.div`
    width: 80%;
    margin: auto;
`;

const MyReview = () => {
    return (
        <MyReviewContainer>
            <h1>내 리뷰</h1>
            <ul>
                <ReivewItem></ReivewItem>
                <ReivewItem></ReivewItem>
                <ReivewItem></ReivewItem>
            </ul>
        </MyReviewContainer>
    );
};

export default MyReview;
