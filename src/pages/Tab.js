import React from 'react';
import Nav from '../components/Nav';
import ListItem from '../components/ListItem';

const Accom = () => {
    return (
        <div>
          <Nav></Nav>
          {/* map으로 ListItem 반복출력 */}
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </div>
    );
};

export default Accom;