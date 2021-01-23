import React from 'react';
import { Route } from 'react-router-dom';
import HomePost from './HomePost'
import MainNavbar from './MainNavbar'
import Form from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import './App.css';

function App() {

  return (
    <div className="App">
      <Route path='/' render={() => <MainNavbar/> }/>
      <h1>Home Page</h1>
      <Route exact path='/' render={() => <HomePost/> }/> 
      <Route exact path='/post/new' render={() => <Form/> }/>    
    </div>
  );
}

export default App;
