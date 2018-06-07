import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Skeleton from './Skeleton';
import { Provider } from 'react-redux';
import store from '../Store';
import {connect} from 'react-redux';
import { compose } from "recompose";
import LoginRegister from './LoginRegister';

function UserGreeting(props) {
  return <div>
          <Skeleton />
         </div>;
}

function GuestGreeting(props) {
  return <LoginRegister />
}

function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
            return <UserGreeting />;
          }
            return <GuestGreeting />;
        }

class App extends Component {
  state = {
    redirect: false
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='mainWrapper'>
            <Greeting isLoggedIn={this.props.login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

function mapStateToProps(state) {
    console.log(state.userClass)
    return {
        login: state.userClass.login,
        username: state.userClass.name
    }
}

export default connect(mapStateToProps)(App);