import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import styling from '../assets/css/index.css';
import Skeleton from './Skeleton';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='mainWrapper'>
        <Skeleton />
      </div>
      </Router>
    );
  }
}
export default App;