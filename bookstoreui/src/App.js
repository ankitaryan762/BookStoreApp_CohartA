import React from 'react';
import Footer from './Component/footer'
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './Component/dashboard'
import './App.css';
import OrderSummary from './Component/orderSummary'
import MyCarts from './Component/myCarts'
import Login from './Component/login'
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
