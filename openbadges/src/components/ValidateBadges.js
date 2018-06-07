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

const styles = theme => ({

});

class ValidateBadges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [],
        }
    }

    componentDidMount() {
        this.state.badges = BadgeActions.getAllIssuedBadges();
        console.log("Badges: " + BadgeActions.getAllIssuedBadges().data);
    }

    render () {
        return (
            <div>
                <h1>Badges to be Validated</h1>
                {JSON.stringify(BadgeActions.getAllIssuedBadges())}
                {this.state.badges.map((badge) => {
                    <ValidateBadgeAwardCard badge={badge}  />
                })}
            </div>
        );
    }
}

ValidateBadges.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        name: state.userClass.firstName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit(data) {
            new Promise(
                (resolve, reject) =>{
                    Client.search(data.role)
                        .then(data => {
                            //get next available entityId
                            let nextId = parseInt(data.slice(-1)[0].entityId) + 1
                            sendData(nextId)
                        })
                });

            function sendData(id) {
                const login = true
                const action = {type: 'NEW_USER', payload: data, id: id, login:login };
                dispatch(action);
            }
        }
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(ValidateBadges);