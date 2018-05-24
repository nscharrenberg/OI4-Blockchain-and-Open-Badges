import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Main from './Main';
import Issuer from './Issuer';
import Badge from './Badge';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/Main">Main</Link></li>
              <li><Link to="/Issuer">Issuer</Link></li>
              <li><Link to="/Badge">Badge</Link></li>
            </ul>
            <hr/>
          <Route path="/main" component={Main} />
          <Route path="/issuer" component={Issuer} />
          <Route path="/badge" component={Badge} /></div>
        </div>
      </Router>

    );
  }
}
export default App;