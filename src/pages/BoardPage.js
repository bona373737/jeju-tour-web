/** 
 * @Filename: BoardPage.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 공지사항, FAQ 게시판 전체페이지 
 */
import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';

import { useSelector, useDispatch } from 'react-redux';
import { getNoticeList } from '../slices/NoticeSlice';
import { getFAQList } from '../slices/FAQSlice';

import BoardItem from '../components/items/BoardItem';
import SearchButton from '../assets/icon/search_active.png';

// 전체 컨테이너 스타일
const BoardPageContainer = styled.div`
    width: 100%;
    padding-top: 5%;
    padding-bottom: 20%;

    .content {
        width: 80%;
        margin: 0 auto;

        h1 {
            padding: 20%;
            text-align: center;
            border-bottom: 1px solid var(--subgray);
        }

        /* form {
            box-sizing: border-box;
            display: flex;

            input {
                padding: 0 3%;
                width: 80%;
                height: 40px;
                border-radius: 4px 0 0 4px;
                border: 1px solid var(--blue);

                &:focus {
                    outline: none;
                    border: 2px solid var(--blue);
                }
            }

            button {
                width: 40px;
                height: 40px;
                border-radius: 0 4px 4px 0;
                border: 1px solid var(--blue);
                background: var(--blue);
                
                .search_button {
                    height: 25px;
                    vertical-align: middle;
                }
            }
        } */

        .qna {
            margin-top: 50px;
        }
    }
`;

// 페이지 번호 스타일
const Pagenation = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    justify-content: center;

    a {
        color: #000;
        padding: 8px 12px;
        text-decoration: none;
        margin: 0 5px;

        &.current-page {
            background-color: #116688;
            color: #fff;
            border-radius: 5px; 
        }

        &.disabled {
            color: #ccc;
            /* 커서가 금지(정지) 모양으로 바뀜 */
            cursor: not-allowed;
        }

        &:hover:not(.current-page) {
            background-color: #ddd;
            border-radius: 5px; 
        }
    }
`;

const BoardPage = () => {
    // path 파라미터 값 가져오기
    const { api } = useParams();
    // redux 관련 초기화
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state[api]);
    // 페이지 강제 이동 함수 생성
    const navigate = useNavigate();
    /**
     *  --- 추가 구현 사항 ---
     *  검색 카테고리 (제목/내용) -> 검색어 query -> 검색어 전송 -> 페이지네이션
     *  --> *** 백엔드 수정사항 발생 ***
     *  --> 카테고리 (제목/내용) 필터링 필요함!!
     *  // 검색어 input 참조변수
        const inputRef = useRef();
        // 카테고리 dropdown 참조변수
        const dropdownRef = useRef();
        // QueryString 문자열 얻기
        const { query, column, page } = useQueryString({
            query: '',
            column: '',
            page: 1
        });
     */

    /** api 및 QueryString이 변경될 때마다 실행되는 hook */ 
    useEffect(() => {
        api === 'notice' ?
        dispatch(getNoticeList({
            // query: query,
            // column: column,
            // page: page
        })) :
        dispatch(getFAQList({
            // query: query,
            // column: column,
            // page: page
        }));
        // dropdownRef.current.value = column;
        // inputRef.current.value = query;
    }, [dispatch, api]);

    /** 검색 이벤트 */
    // const onSearchSubmit = useCallback(e => {
    //     e.preventDefault();
    //     const dropdown = dropdownRef.current;
    //     const input = inputRef.current;
    //     navigate(`/?query=${input.value}&column=${dropdown.value}`);
    // },[navigate]);

    return (
        <BoardPageContainer>
            <div className='content'>
                <h1 className="font2">{api === 'notice' ? '공지사항' : '자주 묻는 질문'}</h1>
                {/* <form onSubmit={onSearchSubmit}>
                    <select name='column' onChange={onSearchSubmit} ref={dropdownRef}>
                        <option value='title'>제목</option>
                        <option value='content'>내용</option>
                    </select>
                    <input type='text' name='query' placeholder="검색어를 입력하세요." ref={inputRef}/>
                    <button type='submit'>
                        <img className="search_button" src={SearchButton} alt="search" />
                    </button>
                </form> */}
                {data && data.item.map((v, i) => <BoardItem key={v[`${api}_no`]} item={v} api={api}/>)}
                {/* <Pagenation>
                    {data.pagenation.prevGroupLastPage > 0 ? (
                        <li><NavLink to={`/?query=${query}&rows=10&page=${data.pagenation.prevGroupLastPage}`}>&laquo;</NavLink></li>
                    ) : (
                        <li><NavLink to='#' className='disabled'>&laquo;</NavLink></li>
                    )}

                    {(() => {
                        const li = [];
                        const start = data.pagenation.groupStart;
                        const end = data.pagenation.groupEnd + 1;
                        for (let i=start; i<end; i++) {
                            if (i === data.pagenation.nowPage) {
                                li.push(<li key={i}><NavLink to='#' className='current-page'>{i}</NavLink></li>);
                            } else {
                                li.push(<li key={i}><NavLink to={`/?query=${query}&rows=10&page=${i}`}>{i}</NavLink></li>);
                            }
                        }
                        return li;
                    })()}

                    {data.pagenation.nextGroupFirstPage > 0 ? (
                        <li><NavLink to={`/?query=${query}&rows=10&page=${data.pagenation.nextGroupFirstPage}`}>&raquo;</NavLink></li>
                    ) : (
                        <li><NavLink to={`/?query=${query}&rows=10&page=${data.pagenation.groupEnd}`} className='disabled'>&raquo;</NavLink></li>
                    )}
                </Pagenation> */}
                {api === 'faq' && (
                    <NavLink to='/qna'>
                        <button type='button' className='qna btn_act'>1:1 문의하기</button>
                    </NavLink>
                )}
            </div>
        </BoardPageContainer>
    );
};

export default BoardPage;