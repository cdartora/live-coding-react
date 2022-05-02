import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={
          (props) => (
          <Login
            {...props}
          />
          )
        }/>
        <Route exact path="/favorites" render={
          
          (props) => (
            <Favorites
            {...props}
            />
            )
          }/>
          <Route exact path="/home" render={
            (props) => (
            <Home
              {...props}
            />
            )
          }/>
      </Switch>
    );
  }
}

export default Routes;