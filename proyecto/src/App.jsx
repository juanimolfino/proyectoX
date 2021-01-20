import React, { useState } from 'react';
import fetch from 'node-fetch'
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = function(){
    fetch('http://localhost:8080/')
    .then(response => response.json())
    .then(data => {
      setUsers(data);
      console.log(data)
  })
  .catch(error => console.log('hubo un error', error));
}
getUsers();
  return (
    <div className="App">
      <h1>{users[0].name}</h1>
    </div>
  );
}

export default App;
