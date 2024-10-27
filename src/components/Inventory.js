import React, { useState } from 'react';

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, item: 'Tomatoes', quantity: 50 },
    { id: 2, item: 'Cheese', quantity: 20 },
  ]);

  return (
    <div>
      <h2>Inventory</h2>
      {inventory.map(item => (
        <div key={item.id}>
          {item.item} - Quantity: {item.quantity}
        </div>
      ))}
    </div>
  );
};

export default Inventory;
