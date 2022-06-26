import React from 'react';
import styled from 'styled-components';

const ReviewTriggerContainer=styled.div`
    .review_item_top{
        display: flex;
        justify-content: space-between;
        .left{
            
        }
        .right{
            color: var(--gray);
        }
    }//review_item_top
    .trriger_title{

    }
`;

const ReviewTrigger = () => {
    return (
        <ReviewTriggerContainer>
            <div className='review_item_top'>
                <div className='left'>
                    <span>★★★★☆</span>
                    <span>작성자이름</span>
                </div>
                <div className='right'>
                    <span>작성날짜</span>
                </div>
            </div>
            <div className='trigger_title'>
                review title
            </div>
        </ReviewTriggerContainer>
    );
};

export default ReviewTrigger;