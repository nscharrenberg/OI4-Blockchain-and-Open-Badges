import React from "react";
import ValidateNewBadgeCard from './ValidateNewBadgeCard';
import {connect} from "react-redux";

function GetUnvalidatedBadges(props){
    const myIssuers = props.issuers;
    const allBadges = props.badges.issuerBadges
    console.log('allB:',allBadges)
    if ((!Array.isArray(allBadges) || !allBadges.length)) {
       return <p>No badges found.</p>
    }
    else {
        let badges = props.badges.issuerBadges[0].filter(badge => badge.validated == false)
        console.log(badges)
        return (
            <div>
            {badges.map((badge, i) => (
                <div key={i}>
                <ValidateNewBadgeCard badge={badge} issuers={myIssuers} />
                <br/>
                </div>
            ))}
            </div>
        )
    }
}

class ValidateBadges extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>New Badges to be Validated</h1>
                <GetUnvalidatedBadges badges={this.props.badges} issuers={this.props.issuers} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        issuers: state.userClass.issuers,
        firstName: state.userClass.firstName,
        lastName: state.userClass.lastName,
        entityId: state.userClass.entityId,
        badges: state.userClass.badges
    }
}

export default connect(mapStateToProps)(ValidateBadges);