import React, { useState } from 'react';
// import fetch from 'node-fetch'
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = function () {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        console.log(data)
      })
      .catch(error => console.log('hubo un error', error));
  }
  if (!users.length) {
    getUsers();
    console.log('tendria que salir data')
  } else {
    console.log('listo')
  }
  return (
    <div className="App">
      {users.map((u, i) => <h1 key={i}>{u.name}</h1>)}
    </div>
  );
}

export default App;
