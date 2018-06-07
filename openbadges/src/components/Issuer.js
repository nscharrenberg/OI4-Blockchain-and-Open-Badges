import React from "react";
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

class Issuer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div>
                {/* DOESN'T WORK ANYMORE - HAS TO SEND ISSUER INFO 
                <IssuerCard />*/}
                <CreateBadgeCard />
                <hr/>
                <ValidateNewBadgeCard />
                <hr/>
                <AwardBadgeCard />
                <hr/>
                <BadgeCard />
                <ValidateBadgeAwardCard />
                <hr/>
                <CreateIssuerCard />
                <AddUserToIssuer />
            </div>
        );
    }
}

export default Issuer;