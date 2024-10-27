import React, { useState } from 'react';

const StaffManagement = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'Alice', role: 'Server' },
    { id: 2, name: 'Bob', role: 'Chef' },
  ]);

  return (
    <div>
      <h2>Staff Management</h2>
      {staff.map(member => (
        <div key={member.id}>
          {member.name} - Role: {member.role}
        </div>
      ))}
    </div>
  );
};

export default StaffManagement;
