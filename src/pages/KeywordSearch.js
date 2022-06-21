import React, { memo, useEffect } from 'react';
import styled from 'styled-components';

import { useQueryString } from '../hooks/useQueryString';
import { useSelector, useDispatch } from 'react-redux';
import { getKeywordSearch } from '../slices/SearchSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

const ResultContainer = styled.div`
    width: 100%;
`;

const KeywordSearch = memo(() => {
    // QueryString의 검색어 받아오기
    const {keyword} = useQueryString();
    // 리덕스를 통한 검색 결과 상태 조회
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.search);
    // 검색어가 전달되었을 경우
    useEffect(() => {
        dispatch(getKeywordSearch({
            keyword: keyword,
        }))
    },[keyword, dispatch]);

    return (
        <>
            <Spinner visible={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : data && (
                <ResultContainer>
                    <div>검색어 : {keyword}</div>
                    <div>검색결과</div>
                    {/* 일치하는 데이터가 있을 때만 내용 노출 */}
                    {data[0] ? JSON.stringify(data) : '일치하는 내용이 없습니다.'}
                </ResultContainer>
            )}
        </>
    );
});

export default KeywordSearch;