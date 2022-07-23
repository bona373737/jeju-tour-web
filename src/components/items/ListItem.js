/** 
 * @Filename: ListItem.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 데이터 리스트 아이템 컴포넌트
 *               클릭된 리스트를 식별할 수 있도록
 *               props로 클릭된 리스트의 id를 ListDetail.js에 전달한다.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListItemContainer = styled.div`
    box-sizing: border-box;
    padding: 15px 0;
    line-height: 25px;
`;

const ListItem = ({item, api}) => {
    return (
        <ListItemContainer>
            {/* id---> 여행지 정보의 primary key값으로 넣어주기 */}
            <NavLink to={'/tab/'+api+'/'+item.id} state={{item:item}}>
                <h1>{item?.title}</h1>
                <h1>{item?.address}</h1>
                <h1>{item?.phoneno}</h1>
            </NavLink>
        </ListItemContainer>
    );
};

export default ListItem;