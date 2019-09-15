import React from 'react';
import {Switch, Route} from 'react-router-dom';
import homepage from '../pages/home_page';
import loginpage from '../pages/login_page';
import productpage from '../pages/product_page';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={homepage}/>
        <Route exact path='/login' component={loginpage}/>
        <Route exact path='/product' component={productpage}/>
      </Switch>
    </div>
  );
}

export default App;
