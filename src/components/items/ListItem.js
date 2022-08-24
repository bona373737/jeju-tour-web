/** 
 * @Filename: ListItem.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 데이터 리스트 아이템 컴포넌트
 *               클릭된 리스트를 식별할 수 있도록
 *               props로 클릭된 리스트의 id를 ListDetail.js에 전달한다.
 */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Heart from '../Heart';

const ListItemContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 15px 0;
    line-height: 20px;

    a{
        height: 100px;
        display: flex;

        .img_wrap{
            width: 30%;
            background-color: var(--blue);

        }
        .text_wrap{
            width: 70%;

        }

    }
`;

const ListItem = ({item,api}) => { 
    let id;
    if(item){
        id = item?.place_no? item.place_no : (item.accom_no? item.accom_no : item.food_no);
    }
    
    return (
        item&&
        <ListItemContainer>
            <NavLink to={'/tab/'+api+'/'+id} state={{item:item}}>
                <div className='img_wrap'>
                    <img src=''/>
                </div>
                <div className='text_wrap'>
                    <p>{id}</p>
                    <p>{item?.title}</p>
                    <p>{item?.address}</p>
                    <p>{item?.phoneno}</p>
                    <p>{item?.introduction}</p>
                </div>
            </NavLink>
        </ListItemContainer>
    );
};

export default ListItem;