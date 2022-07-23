/** 
 * @Filename: MyLike.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 사이드바의 내 저장 메뉴 페이지 
 */
import React, { useState } from 'react';
import styled from 'styled-components';

import ThumbItem from '../../components/items/ThumbItem';
import ListItem from '../../components/items/ListItem';

const MyLikeContainer = styled.div`
    width: 80%;
    margin: auto;

    button{
        background-color: tomato;
    }
    .thum_wrap{
        //grid학습해서 css변경 하기
        display: flex;
        flex-wrap: wrap;
    }
`;

const MyLike = () => {
    //이미지로보기,리스트로보기 버튼 클릭 상태값
    const [isClicked, setIsClicked] = useState(false);

    return (
        <MyLikeContainer>
            {
                isClicked? 
                <button onClick={()=>{setIsClicked(!isClicked)}}>이미지로보기</button>
                :
                <button onClick={()=>{setIsClicked(!isClicked)}}>리스트로보기</button>
            }
            {
                isClicked?
                <div className="thum_wrap">
                    <ThumbItem item=""></ThumbItem>
                    <ThumbItem item=""></ThumbItem>
                    <ThumbItem item=""></ThumbItem>
                    <ThumbItem item=""></ThumbItem>
                </div>
                :
                <div>
                    <ListItem item="" api=""></ListItem>
                    <ListItem item="" api=""></ListItem>
                </div>
            }
        </MyLikeContainer>
    );
};

export default MyLike;