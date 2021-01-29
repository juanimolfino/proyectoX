import React from 'react';
import { Route } from 'react-router-dom';

import HomePost from './HomePost';
import MainNavbar from './MainNavbar';
import Form from './components/form';
import EditPost from './editPost';
import GenderPost from './components/GenderPost';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <Route path='/' render={() => <MainNavbar/> }/>
        <Route exact path='/' render={() => <HomePost/> }/> 
        <Route exact path='/post/new' render={() => <Form/> }/>
        <Route exact path='/edit/:_id' render={({match}) => <EditPost id={match.params._id}/> }/>
        <Route exact path='/post/:gender' render={() => <GenderPost/> }/>    
    </div>
  );
}

export default App;
