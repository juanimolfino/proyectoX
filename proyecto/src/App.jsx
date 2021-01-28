import React from 'react';
import { Route } from 'react-router-dom';
import HomePost from './HomePost';
import MainNavbar from './MainNavbar';
import Form from './components/form';
import EditPost from './editPost';
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
        <Route exact path='/edit/:_id' render={({match}) => <EditPost id={match.params._id}/> }/>
    </div>
  );
}

export default App;
