import React from "react";
import {connect} from 'react-redux';
import { compose } from "recompose";
import Login from './Login';
import Register from './Register';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up1.</h1>;
}

function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
            return <UserGreeting />;
          }
            return <GuestGreeting />;
        }

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
            <Greeting isLoggedIn={this.props.login} />
            <h1>Issuer Name Badges</h1>
            <h2>4 Badges</h2>
            <h3>4 Badges</h3>
            <h4>4 Badges</h4>
            <p>Loladlsad alsdkasldk </p>
            <hr />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.userClass)
    return {
        login: state.userClass.login
    }
}

export default connect(mapStateToProps)(Main);