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

const ListItem = ({item,api}) => {

    // const rawData = item.sbst.data;
    // rawData == 타입이 뭔지
    // 16진수 헥사 바이트 base64
    

    // var string = new TextDecoder().decode(binaryData);
    // console.log(string);

    // blob.text();
    // console.log(blob.text())

    // const reader = new FileReader();
    // const nana = reader.readAsText(blob);
    // console.log(reader);

    return (
        <ListItemContainer>
            {/* id---> 여행지정보의 primary key값으로 넣어주기 */}
            <NavLink to={'/tab/'+api+'/'+item.placeno} state={{item:item}}>
                <p>{item?.placeno}</p>
                <p>{item?.sbst}</p>

    
                {/* <h1>{item?.title}</h1> */}
                {/* <h1>{item?.address}</h1> */}
                {/* <h1>{item?.phoneno}</h1> */}
            </NavLink>
        </ListItemContainer>
    );
};

export default ListItem;