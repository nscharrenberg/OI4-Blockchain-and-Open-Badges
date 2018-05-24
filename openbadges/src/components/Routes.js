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
import Profile from './Profile';

class Routes extends Component {

	render () {
		return (
		<div>
			<Route path="/main" component={Main} />
			<Route path="/issuer" component={Issuer} />
			<Route path="/badge" component={Badge} />
			<Route path="/profile" component={Profile} />
		</div>
		);
	}
}

export default Routes;