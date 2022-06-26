import React from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

import SubmitBtn from '../styles/SubmitBtn';
import ReviewTrigger from './ReviewTrigger';


const ReviewItemContainer = styled.li`
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 0.5px solid var(--gray);

    .btn_wrap{
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            
        }
    }
`;

const ReivewItem = () => {
    return (
        <ReviewItemContainer>
            <Collapsible trigger={<ReviewTrigger/>}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eveniet temporibus optio recusandae animi quae quos error minus nihil, illum perspiciatis blanditiis, nemo tempora delectus necessitatibus consequuntur? Libero, soluta aliquam!
                </p>
                <div className='btn_wrap'>
                    <SubmitBtn children="수정"></SubmitBtn>
                    <SubmitBtn children="삭제"></SubmitBtn>
                </div>
            </Collapsible>
        </ReviewItemContainer>
    );
};

export default ReivewItem;