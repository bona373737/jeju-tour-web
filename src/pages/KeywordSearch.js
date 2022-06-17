import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useQueryString } from '../hooks/useQueryString';
import { useSelector, useDispatch } from 'react-redux';
import { getKeywordSearch } from '../slices/SearchSlice';

const ResultContainer = styled.div`
    width: 100%;
`;

const KeywordSearch = memo(() => {
    // QueryString의 검색어 받아오기
    const {query} = useQueryString();
    // 리덕스를 통한 검색 결과 상태 조회
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.search);
    // 검색어가 전달되었을 경우
    useEffect(() => {
        dispatch(getKeywordSearch({
            keyword: query,
        }))
    },[query, dispatch]);

    return (
        <ResultContainer>
            {`검색 결과 페이지, 검색어=${encodeURIComponent(query)}`}
        </ResultContainer>
    );
});

export default KeywordSearch;