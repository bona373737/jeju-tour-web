import React, { memo, useCallback } from "react";
import styled from "styled-components";

import CloseButton from '../assets/icon/close.png';
import SearchButton from '../assets/icon/search_white.png';

const SearchContainer = styled.div`
    width: 100%;

    .dimmed {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        background-color: rgba(0, 0, 0, 0.6);
        display: none;
        
        &.open {
            display: block;
            animation: dimmed-show 0.3s;
        }

        .search_box {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 30vh;
            background-color: var(--white);
            animation: box-show 0.3s;

            form {
                box-sizing: border-box;
                display: flex;
                margin-top: 15%;
                margin-left: 10%;

                input {
                    padding-left: 2vw;
                    width: 80%;
                    height: 4vh;
                    border: 1px solid var(--subblue);
                }

                button {
                    width: 8vw;
                    height: 4vh;
                    background: var(--subblue);
                    
                    .search_button {
                        height: 2.5vh;
                        vertical-align: middle;
                    }
                }
            }

            .close_button {
                position: absolute;
                top: 10%;
                right: 5%;
                height: 2.5vh;
            }

            .hashtag_wrap {
                margin: 5% 10% 0;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;

                .hashtag {
                    padding: 3%;
                    margin-bottom: 3%;
                    border-radius: 20px;
                    color: var(--subblue);
                    background: var(--sky);
                }
            }
        }
    }

    @keyframes dimmed-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes box-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`;

const Search = memo((props) => {
    // 검색창 열림, 닫힘 상태값
    const { open, close } = props;
    // 검색어 전송
    const onSearchSubmit = useCallback(e => {
        e.preventDefault();
    }, []);

    return (
        <SearchContainer>
            <div className={open ? "dimmed open" : "dimmed"}>
                {open ? (
                    <div className="search_box">
                        <form onSubmit={onSearchSubmit}>
                            <input type='search' name='search' placeholder="검색어를 입력하세요." />
                            <button type='submit'>
                                <img className="search_button" src={SearchButton} alt="search" />
                            </button>
                        </form>
                        <img className="close_button" src={CloseButton} onClick={close} alt="close" />
                        {/* 추천검색어 --> 실제 데이터랑 연결해야함 */}
                        <div className='hashtag_wrap'>
                            <span className='hashtag'># 신혼여행</span>
                            <span className='hashtag'># 곶자왈</span>
                            <span className='hashtag'># 금오름</span>
                            <span className='hashtag'># 머체왓숲길</span>
                            <span className='hashtag'># 추자도</span>
                        </div>
                    </div>
                ) : null}
            </div>
        </SearchContainer>
    );
});

export default Search;
