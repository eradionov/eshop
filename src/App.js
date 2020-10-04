import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Home } from './pages/home/home.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="section">
        <div className="container">
            <Switch>
              <Route exact path="/" component={ Home }/> 
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
