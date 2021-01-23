import React from 'react';
import HomePost from './HomePost'
import MainNavbar from './MainNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import './App.css';

function App() {

  return (
    <div className="App">
      <MainNavbar/>
      <h1>Home Page</h1>
      <HomePost/>
    </div>
  );
}

export default App;
