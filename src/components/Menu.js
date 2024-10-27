import React, { useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Burger', price: 8.99 },
  ]);

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price.toFixed(2)}
        </div>
      ))}
    </div>
  );
};

export default Menu;
