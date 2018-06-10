import React from "react";
import IssuerCard from './IssuerCard';
import BadgeCard from './BadgeCard';
import ValidateBadgeAwardCard from './ValidateBadgeAwardCard';
import SeeAwardedBadgesCard from './SeeAwardedBadgesCard';
import CreateBadgeCard from './CreateBadgeCard';
import CreateIssuerCard from './CreateIssuerCard';
import AwardBadgeCard from './AwardBadgeCard';
import AddUserToIssuer from './AddUserToIssuer';
import ValidateNewBadgeCard from './ValidateNewBadgeCard'


class Issuer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div>
            <CreateBadgeCard />
            <AddUserToIssuer />
            <CreateIssuerCard />
        {/*
            <AwardBadgeCard />
            
            */}
            {/*
                DOESN'T WORK ANYMORE - HAS TO SEND PROPS INFO 
                
                <IssuerCard />
                <BadgeCard />
                <ValidateNewBadgeCard />
                <ValidateBadgeAwardCard />
                
            */}
            </div>
        );
    }
}

export default Issuer;