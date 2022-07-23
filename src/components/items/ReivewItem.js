/** 
 * @Filename: ReivewItem.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 내 리뷰 리스트 아이템 컴포넌트
 */
import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

import SubmitBtn from '../buttons/SubmitBtn';
import ReviewTrigger from '../ReviewTrigger';

const ReviewItemContainer = styled.li`
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 0.5px solid var(--gray);

    textarea{
        width: 100%;
        border: 0;
    }

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
    const [editBtn, setEditBtn] = useState(false);

    return (
        <ReviewItemContainer>
            <Collapsible trigger={<ReviewTrigger/>}>
                {
                    editBtn? 
                    <textarea name="" id="" cols="30" rows="10" defaultValue={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}>

                    </textarea>
                    :
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                }
                <div className='btn_wrap'>
                    {
                        editBtn?
                        <SubmitBtn children="등록" onClickFun={()=>setEditBtn(false)}></SubmitBtn>
                        :
                        <SubmitBtn children="수정" onClickFun={()=>setEditBtn(true)}></SubmitBtn>
                    }
                    <SubmitBtn children="삭제"></SubmitBtn>
                </div>
            </Collapsible>
        </ReviewItemContainer>
    );
};

export default ReivewItem;