import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IssuerCard from './IssuerCard';
import BadgeCard from './BadgeCard';
import ValidateBadgeAwardCard from './ValidateBadgeAwardCard';
import SeeAwardedBadgesCard from './SeeAwardedBadgesCard';
import CreateBadgeCard from './CreateBadgeCard';
import CreateIssuerCard from './CreateIssuerCard';
import AwardBadgeCard from './AwardBadgeCard';
import ValidateNewBadgeCard from './ValidateNewBadgeCard';
import Profile from './Profile';
import AddUserToIssuer from './AddUserToIssuer';
import Client from "../Store/actions/ClientActions";
import {compose} from "recompose";
import {connect} from "react-redux";
import BadgeActions from '../Store/actions/badgeActions';
import Button from '@material-ui/core/Button';

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