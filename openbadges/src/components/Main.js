import React from "react";
import {connect} from 'react-redux';
import IssuerCard from './IssuerCard';
import BadgeCard from './BadgeCard';

function GetIssuers(props){
    const myIssuers = props.issuers;
    console.log('myIssuers: ',myIssuers)
    if ((!Array.isArray(myIssuers) || !myIssuers.length)) {
       return <p>You are not part of issuing organisations.</p>
    }
    else {
        return (
            myIssuers.map((issuer, i) => (
                <IssuerCard key={i} issuer={issuer} />
            ))
        );
    }
}

function GetCreatedBadges(props){
    const myIssuers = props.issuers;
    if ((!Array.isArray(props.badges.userBadges[0]) || !props.badges.userBadges[0].length)) {
        return <p>No badges found!</p>
    }
    else {
        let badges = []
        badges = props.badges.userBadges[0];
        return (
            <div>
            {badges.map((badge, i) => (
                <div>
                <BadgeCard badge={badge} issuers={myIssuers} />
                <br/>
                </div>
            ))}
            </div>
        )
    }
}

function GetAllBadges(props){
    const myIssuers = props.issuers;
    let badges = []
    badges = props.badges.issuerBadges[0];
    console.log('allBadges: ',badges)
    if ((!Array.isArray(badges) || !badges.length)) {
       return <p>No badges found.</p>
    }
    else{
        return (
            <div>
                {badges.map((badge, i) => (
                    <div>
                    <BadgeCard badge={badge} issuers={myIssuers} />
                    <br/>
                    </div>
                ))}
            </div>
        )
    }
}


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
            <h2>Welcome {this.props.firstName} {this.props.lastName}</h2>
            <h3>You are part of Issuer Organisations:</h3>
            <GetIssuers issuers={this.props.issuers} />
            <hr/>
            <h3>All Badges you created</h3>
            <GetCreatedBadges badges={this.props.badges} issuers={this.props.issuers} />
            <hr/>
            <h3>All Badges From your Organisations</h3>
            <GetAllBadges badges={this.props.badges} issuers={this.props.issuers} />
            <hr/>
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

export default connect(mapStateToProps)(Main);