import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Issuer from './Issuer';
import Badge from './Badge';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import Notifications from './Notifications';
import ValidateBadges from './ValidateBadges';
import AwardBadge from './AwardBadge';
class Routes extends Component {

	render () {
		return (
			<div>
				<Route exact path="/" component={Main} />
				<Route path="/issuer" component={Issuer} />
				<Route path="/awardBadge/:id" component={AwardBadge} />
				<Route path="/badge" component={Badge} />
				<Route path="/profile" component={Profile} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/notifications" component={Notifications} />
				<Route path="/validator" component={ValidateBadges} />
			</div>
		);
	}
}

export default Routes;