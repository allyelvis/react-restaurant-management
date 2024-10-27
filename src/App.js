// src/App.js
import React from 'react';
import { Menu, Button, OrderManagement, Inventory, StaffManagement, SalesReport } from './index';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin: 20px 0;
`;

const Header = styled.h1`
  color: #4caf50;
`;

function App() {
  return (
    <AppContainer>
      <Header>Restaurant Management System</Header>
      
      {/* Menu Section */}
      <Section>
        <h2>Menu</h2>
        <Menu />
        <Button onClick={() => alert('Add New Item')}>Add New Menu Item</Button>
      </Section>

      {/* Order Management Section */}
      <Section>
        <h2>Order Management</h2>
        <OrderManagement />
      </Section>

      {/* Inventory Tracking Section */}
      <Section>
        <h2>Inventory Tracking</h2>
        <Inventory />
        <Button onClick={() => alert('Add New Inventory Item')}>Add New Inventory Item</Button>
      </Section>

      {/* Staff Management Section */}
      <Section>
        <h2>Staff Management</h2>
        <StaffManagement />
        <Button onClick={() => alert('Add New Staff Member')}>Add New Staff Member</Button>
      </Section>

      {/* Sales Report Section */}
      <Section>
        <h2>Sales Report</h2>
        <SalesReport />
      </Section>
    </AppContainer>
  );
}

export default App;