import React from "react";
import ValidateNewBadgeCard from './ValidateNewBadgeCard';
import {connect} from "react-redux";

function GetUnvalidatedBadges(props){
    const myIssuers = props.issuers;
    const staff = props.staff
    let badges = []
    if ((typeof(props.badges) === 'undefined' || props.badges.length == 0)) {
        return <p>No badges found!</p>
    }
    else {
        if ((!Array.isArray(props.badges.issuerBadges[0]) || !props.badges.issuerBadges[0].length)) {
            return <p>No badges found!</p>
        }
        else {
            badges = props.badges.issuerBadges[0].filter(badge => badge.validated == false)
            return (
                <div>
                {badges.map((badge, i) => (
                    <div>
                    <ValidateNewBadgeCard badge={badge} issuers={myIssuers} staff={staff} />
                    <br/>
                    </div>
                ))}
                </div>
            )
        }
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
                <GetUnvalidatedBadges badges={this.props.badges} issuers={this.props.issuers} staff={this.props.staff}/>
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
        badges: state.userClass.badges,
        staff: state.userClass.staff
    }
}

export default connect(mapStateToProps)(ValidateBadges);