/**
 * @filename ListItem.js
 * @description 관광지,숙소,음식리스트 컴포넌트
 *              클릭된 리스트를 식별할 수있도록
 *              props로 클릭된 리스트의 id를 DetailePage.js에 전달한다.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListItemContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    line-height: 25px;
`;

const ListItem = ({item,api}) => {
    return (
        <ListItemContainer>
            {/* id---> 여행지정보의 primary key값으로 넣어주기 */}
            <NavLink to={'/tab/'+api+'/'+item.id} state={{item:item}}>
                <h1>{item?.title}</h1>
                <h1>{item?.address}</h1>
                <h1>{item?.phoneno}</h1>
            </NavLink>
        </ListItemContainer>
    );
};

export default ListItem;