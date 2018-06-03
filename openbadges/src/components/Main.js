import React from "react";
import {connect} from 'react-redux';
import { compose } from "recompose";
import Login from './Login';
import Register from './Register';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
            <p>This is from Main.</p>
            <p>What should we put here?</p>
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