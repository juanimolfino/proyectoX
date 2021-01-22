import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch'
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(function () {
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        console.log(data)
      })
      .catch(error => console.log('hubo un error', error));
  }, [])

  return (
    <div className="App">
      {/* <button onClick={() => {getUsers()}}></button> */}
      {users.map((u, i) => <h1 key={i}>{u.name}</h1>)}
    </div>
  );
}

export default App;
