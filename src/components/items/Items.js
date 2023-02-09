import React, { useEffect, useState } from 'react';
import Item from '../item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
        useEffect(() => {
            fetch('packadge.json')
            .then(res => res.json())
            .then( data => setItems(data))
        }, []);
    return (
        <div>
            <div className="grid grid-cols-3  gap-5 justify-items-center	p-3 my-7">
        {items.map((item) => (
          
          <Item item={item}></Item>
        ))}
      </div>
        </div>
    );
}

export default Items;
