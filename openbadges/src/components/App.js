import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Skeleton from './Skeleton';
import { Provider } from 'react-redux';
import store from '../Store';


class App extends Component {

  render() {
    return (
       <Provider store={store}>
      <Router>
        <div className='mainWrapper'>
        <Skeleton />
      </div>
      </Router>
      </Provider>
    );
  }
}
export default App;