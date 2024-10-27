import React, { useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, table: 5, status: 'In Progress' },
    { id: 2, table: 3, status: 'Completed' },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <h2>Order Management</h2>
      {orders.map(order => (
        <div key={order.id}>
          Table: {order.table} - Status: {order.status}
          <button onClick={() => updateStatus(order.id, 'Completed')}>Complete</button>
        </div>
      ))}
    </div>
  );
};

export default OrderManagement;
