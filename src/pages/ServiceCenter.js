import React from 'react';
import styled from 'styled-components';

const SCContainer = styled.div`
    width: 100%;

    .content {
        width: 80%;
        margin: 0 auto;
        margin-top: 10%;

        .title {
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--subblue);

            .headfont {
                span {
                    padding-left: 0.5rem;
                    font-size: 1.2rem;
                }
            }
        }

        table {
            width: 100%;
            margin-top: 2rem;

            thead {
                background: var(--subblue);

                .subfont {
                    color: white;
                }
            }

            tbody {
                border-bottom: 2px solid var(--subblue);

                tr {
                    border-bottom: 1px solid var(--subblue);
                }
            }

            th {
                padding: 1rem;
            }

            td {
                padding-left: 1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }
    }
`;

const ServiceCenter = () => {
    return (
        <SCContainer>
            <div className='content'>
                <div className='title'>
                    <h2 className='headfont'>공지사항</h2>
                    <span className='contentfont'>전체보기 &gt;&gt;</span>
                </div>
                <table>
                    <thead>
                        <tr className='subfont'>
                            <th>No.</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* tr 단위로 여기도 map으로 반복 실행해야할 듯 */}
                        <tr className='contentfont'>
                            <th>1</th>
                            <td>시스템 개편 예정 안내드립니다.</td>
                        </tr>
                        <tr className='contentfont'>
                            <th>2</th>
                            <td>제주 여행지 정보 업데이트 v.220623</td>
                        </tr>
                        <tr className='contentfont'>
                            <th>3</th>
                            <td>공지사항이 여기에 자리합니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='content'>
                <div className='title'>
                    <h2 className='headfont'>FAQ<span>(자주 묻는 질문)</span></h2>
                    <span className='contentfont'>전체보기 &gt;&gt;</span>
                </div>
                <table>
                    <thead>
                        <tr className='subfont'>
                            <th>No.</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* tr 단위로 여기도 map으로 반복 실행해야할 듯 */}
                        <tr className='contentfont'>
                            <th>1</th>
                            <td>일정 삭제는 어떻게 하나요?</td>
                        </tr>
                        <tr className='contentfont'>
                            <th>2</th>
                            <td>회원 탈퇴는 어떻게 하나요?</td>
                        </tr>
                        <tr className='contentfont'>
                            <th>3</th>
                            <td>자주 묻는 질문이 여기에 자리합니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SCContainer>
    );
};

export default ServiceCenter;