// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Inventory from './components/Inventory';
import Sales from './components/Sales';
import Reports from './components/Reports';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Restaurant Management System</h1>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/sales">Sales</Link></li>
              <li><Link to="/reports">Reports</Link></li>
              <li><Link to="/users">User Management</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/sales" component={Sales} />
            <Route path="/reports" component={Reports} />
            <Route path="/users" component={UserManagement} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2024 Ally Elvis Nzeyimana - All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
