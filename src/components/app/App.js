import React from 'react';
import './App.css';
import {UsersDropList} from '../users-droplist/UsersDropList';
import {users} from "../../json-placeholder/UsersConstants";


function App() {
  return (
    <div className="App">
    <UsersDropList users={users} />
    </div>
  );
}

export default App;
