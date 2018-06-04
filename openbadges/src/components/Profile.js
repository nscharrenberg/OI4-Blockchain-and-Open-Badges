import React from "react";
import { connect } from 'react-redux';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
        	<div>
        	<h1>You Profile Info:</h1>
        	<p>entityId: {this.props.entityId}</p>
            <p>First name: {this.props.firstName}</p>
            <p>Last name: {this.props.lastName}</p>
            <p>Email: {this.props.email}</p>
            <p>Username: {this.props.username}</p>
            <p>Network: {this.props.network}</p>
            <p>Role: {this.props.role}</p>
            <h4>Issuers:</h4>
                {this.props.issuers.map((issuer, i) => (
                    <div>
                        <p>Issuer name: {issuer.name}</p>
                        <p>Issuer Id: {issuer.entityId}</p>
                    </div> 
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('this is from profile:',state.userClass)
	return {
		entityId: state.userClass.entityId,
	    firstName: state.userClass.firstName,
	    lastName: state.userClass.lastName,
	    email: state.userClass.email,
	    username: state.userClass.username,
	    network: state.userClass.network,
	    role: state.userClass.role,
        issuers: state.userClass.issuers,
	}
}

export default connect(mapStateToProps)(Profile);