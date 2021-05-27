import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dxes from './components/dxes';
import Dx from './components/dx';
import Home from './components/home';
import Bots from './components/bots';
import Post from './components/post';
import Error404 from './components/error';
import Navbar from './components/navbar';
import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/bots">
              <Bots/>
            </Route>
            <Route exact path="/dxes/page/:id" component={Dxes}/>
            <Route exact path="/dxes/:id" component={Dx}/>
            <Route exact path="/post" component={Post}/>
            <Route path="*"><Error404/></Route>
          </Switch>
        </Router>
      </div>

    )
  }
}


