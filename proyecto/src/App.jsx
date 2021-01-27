import React from 'react';
import { Route } from 'react-router-dom';
import HomePost from './components/HomePost'
import MainNavbar from './MainNavbar'
import Form from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Route path='/' render={() => <MainNavbar/> }/>
      <Route exact path='/' render={() => <HomePost/> }/> 
      <Route exact path='/post/new' render={() => <Form/> }/>    
    </div>
  );
}

export default App;
