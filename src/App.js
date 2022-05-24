import './App.css';
import React from 'react';

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
// import Login from './login';
import Update from './Routes/Update';
import Insert from './Routes/Insert';
import Home from './Routes/Home';
import Display from './Routes/Display';
import Delete from './Routes/Delete';


 export default function App() {
  return (
  
      
      <Router>
        <div>
        
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/display">Display</Link></li>
                <li><Link to="/addemps">AddUsers</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            </div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/display" component={Display}></Route>
                <Route path="/addemps" component={Insert}></Route>
                <Route path="/updemp/:id" component={Update}></Route>
                <Route path="/delemp" component={Delete}></Route>
            </Switch>
          </Router>
  );
}


