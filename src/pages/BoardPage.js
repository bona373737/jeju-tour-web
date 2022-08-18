/** 
 * @Filename: BoardPage.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 공지사항, FAQ 게시판 전체페이지 
 */
import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getNoticeList } from '../slices/NoticeSlice';
import { getFAQList } from '../slices/FAQSlice';
import styled from 'styled-components';

import BoardItem from '../components/items/BoardItem';

const BoardPageContainer = styled.div`
    width: 100%;

    .content {
        width: 80%;
        margin: 0 auto;

        h1 {
            padding: 20%;
            text-align: center;
            border-bottom: 1px solid var(--subblue);
        }

        button {
            margin-top: 50px;
            padding: 15px;
            width: 100%;
        }
    }
`;

const BoardPage = () => {
    // path 파라미터 값 가져오기
    const { api } = useParams();
    // redux 관련 초기화
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state[api]);

    /** api가 변경될 때마다 실행되는 hook */ 
    useEffect(() => {
        api === 'notice' ? dispatch(getNoticeList()) : dispatch(getFAQList());
    }, [dispatch, api]);

    console.log(data); // --> item 개별 페이지에서 뒤로 가기(목록 버튼) 안 됨

    return (
        <BoardPageContainer>
            {api === 'notice' ? (
                <div className='content'>
                    <h1>공지사항</h1>
                    {data && data.item.map((v, i) => <BoardItem key={v.notice_no} item={v} api={api}/>)}
                </div>
            ) : (
                <div className='content'>
                    <h1>자주 묻는 질문</h1>
                    {data && data.item.map((v, i) => <BoardItem key={v.faq_no} item={v} api={api}/>)}
                    <NavLink to='/qna'>
                        <button type='button'>1:1 문의하기</button>
                    </NavLink>
                </div>
            )}
        </BoardPageContainer>
    );
};

export default BoardPage;