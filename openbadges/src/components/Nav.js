import React, { Component } from 'react';
import List from '@material-ui/core/List';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Nav extends Component {

	render () {
		return (
		<div className='leftNavLinks'>
			<List><Link to="/Main"><Button>Main</Button></Link></List>
			<List><Link to="/Issuer"><Button>Issuer</Button></Link></List>
			<List><Link to="/Badge"><Button>Badge</Button></Link></List>
		</div>
		);
	}
}

export default Nav;