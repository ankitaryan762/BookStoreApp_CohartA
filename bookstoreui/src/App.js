import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './components/dashboard'
import './App.css';
import OrderSummary from './components/orderSummary'
import MyCarts from './components/myCarts'
import Login from './components/login'
require('dotenv').config()

function App() {
  
  return (
    <Router>
      <Switch>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/orderSummary' component={OrderSummary}></Route>
      <Route path='/myCarts' component={MyCarts}></Route>
      <Route path='/' component={Login}></Route>
    
      </Switch>
    </Router>
      )
}

export default App;
