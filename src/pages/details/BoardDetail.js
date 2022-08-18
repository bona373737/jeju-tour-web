/** 
 * @Filename: BoardDetail.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 공지사항, FAQ 게시판 상세페이지
 */
import React, { useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getNoticeItem } from '../../slices/NoticeSlice';
import { getFAQItem } from '../../slices/FAQSlice';
import styled from 'styled-components';

const BoardDetailContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    h1 {
        padding: 30px 0;
        border-bottom: 1px solid var(--subblue);
    }

    div {
        padding-top: 15px;
        line-height: 2;
    }

    button {
        margin-top: 50px;
        padding: 15px;
        width: 100%;
    }
`;

const BoardDetail = () => {
    // 페이지 강제 이동 함수 생성
    const navigate = useNavigate();
    // path 파라미터 값 가져오기
    const { api, id } = useParams();
    // redux 관련 초기화
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state[api]);

    /** api/ id가 변경될 때마다 실행되는 hook */
    useEffect(() => {
        api === 'notice' ?
        dispatch(getNoticeItem({ notice_no: id })) :
        dispatch(getFAQItem({ faq_no: id }));
    }, [api, dispatch, id]);

    /** 목록 버튼 클릭 이벤트 처리 --> 에러 발생 !!! */
    const backToList = useCallback(e => {
        e.preventDefault();
        navigate(`/service/${api}`);
    }, [api, navigate]);

    return (
        data && (
            <BoardDetailContainer>
                <h1>
                    <p>{data.item.title}</p>
                    <span>{data.item.reg_date}</span> ~
                    <span>{data.item.edit_date}</span>
                </h1>
                <div>{data.item.content}</div>
                <button type='button' onClick={backToList}>목록</button>
            </BoardDetailContainer>
        )
    );
};

export default BoardDetail;