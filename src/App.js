import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import User from './Components/User';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const ob = {
      X: 53.0331258,
      Y: 18.7155611,
  }
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://app.beeceptor.com/mock-server/fake-json-api'
        , {
          mode: 'no-cors',
          method: "post",
          headers: {
               "Content-Type": "application/json"
          },
          body: JSON.stringify(ob)
}
        
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Router>
      <div className="App">
        <User users={users} />
      </div>
    </Router>
  );
}

export default App;