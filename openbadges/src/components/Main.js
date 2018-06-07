import React from "react";
import {connect} from 'react-redux';
import { compose } from "recompose";
import Login from './Login';
import Register from './Register';
import IssuerCard from './IssuerCard';

function GetIssuers(props){
    const myIssuers = props.issuers;
    return (
        <div>
        {myIssuers.map((issuer, i) => (
            //map tru user issuer array and return new card everytime
            <IssuerCard issuer={issuer} />
        ))}
        </div>
    );
}

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
            <h2>Welcome {this.props.firstName} {this.props.lastName}</h2>
            {/* GET ALL ISSUER CARDS FROM THE USER */}
            <GetIssuers issuers={this.props.issuers}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.userClass)
    return {
        issuers: state.userClass.issuers,
        firstName: state.userClass.firstName,
        lastName: state.userClass.lastName,
    }
}

export default connect(mapStateToProps)(Main);