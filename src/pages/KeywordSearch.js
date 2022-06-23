import React, { memo, useEffect } from 'react';
import styled from 'styled-components';

import { useQueryString } from '../hooks/useQueryString';
import { useSelector, useDispatch } from 'react-redux';
import { getKeywordSearch } from '../slices/SearchSlice';
// import Spinner from '../components/Spinner';
// import ErrorView from '../components/ErrorView';
// import ListItem from '../components/ListItem';

const ResultContainer = styled.div`
    width: 100%;

    .search_result {
        width: 100%;
        font-size: 1.5rem;
        margin-bottom: 3vh;

        div {
            width: 80%;
            margin: 0 auto;
            padding: 5% 0;
            border-bottom: 0.1rem solid var(--subblue);

            .keyword {
                font-weight: 600;
                padding-right: 3%;
            }

            .result {
                font-weight: 600;
                padding-left: 3%;
                color: var(--blue);
                font-size: 1.6rem;
            }
        }
    }
`;

const KeywordSearch = memo(() => {
    // QueryString의 검색어 받아오기
    const {keyword} = useQueryString();
    // 리덕스를 통한 검색 결과 상태 조회
    const dispatch = useDispatch();
    // const { data, loading, error } = useSelector((state) => state.search);
    // 검색어가 전달되었을 경우
    useEffect(() => {
        dispatch(getKeywordSearch({
            keyword: keyword,
        }))
    },[keyword, dispatch]);

    return (
        <>
            {/* <Spinner visible={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : data && ( */}
                <ResultContainer>
                    <div className='search_result'>
                        <div>
                            <span className='keyword'>곶자왈</span>
                            <span>검색결과</span>
                            <span className='result'>(13)</span>
                        </div>
                    </div>
                    {/* 검색어와 일치하는 데이터 map으로 반복 or '일치하는 내용이 없습니다'
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem /> */}
                </ResultContainer>
            {/* )} */}
        </>
    );
});

export default KeywordSearch;