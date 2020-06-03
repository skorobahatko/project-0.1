import React from 'react';
import './App.css';
import {UsersDropList} from '../users-droplist/UsersDropList';
import {users} from "../../json-placeholder/UsersConstants";
import {Header} from "../header/Header";


function App() {


  return (
    <div className="App">
      <Header/>
      <UsersDropList users={users} />
    </div>
  );
}

export default App;
