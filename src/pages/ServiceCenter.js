import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import NoticeFaqItem from '../components/NoticeItem';

const SCContainer = styled.div`
    width: 100%;

    .content {
        width: 80%;
        margin: 0 auto;

        h1 {
            padding: 20%;
            text-align: center;
        }

        .notice {
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            background: var(--sky);
        }
        
        .faq {
            margin-top: 50px;

            .faq_title {
                display: flex;
                justify-content: space-between;
            }
        }
        
        ul {
            margin-top: 20px;
            
            li {
                padding: 15px;
                border-bottom: 1px solid var(--subblue);
            }
        }

    }
`;

const ServiceCenter = () => {
    return (
        <SCContainer>
            <div className='content'>
                <h1>트라이 고객센터</h1>
                <div className='notice'>
                    <NavLink to='notice'>
                        <span>공지</span> 시스템 개편 예정 안내
                    </NavLink>
                </div>
                <div className='faq'>
                    <div className='faq_title'>
                        <h3>자주 묻는 질문</h3>
                        <NavLink to='faq'>전체보기 &gt;</NavLink>
                    </div>
                    <ul>
                        <li>Q. 계정을 잊어버렸어요.</li>
                        <li>Q. 일정을 삭제하고 싶어요.</li>
                        <li>Q. 여행지 추가는 어떻게 하나요?</li>
                        <li>Q. 리뷰를 수정하고 싶어요.</li>
                    </ul>
                </div>
            </div>
        </SCContainer>
    );
};

export default ServiceCenter;