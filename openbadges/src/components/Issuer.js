import React from "react";
import IssuerCard from './IssuerCard';
import BadgeCard from './BadgeCard';
import ValidateBadgeAwardCard from './ValidateBadgeAwardCard';
import SeeAwardedBadgesCard from './SeeAwardedBadgesCard';
import CreateBadgeCard from './CreateBadgeCard';
import AwardBadgeCard from './AwardBadgeCard';
import ValidateNewBadgeCard from './ValidateNewBadgeCard';
import Profile from './Profile';

class Issuer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div>  
                <IssuerCard />
                <hr/>
                <CreateBadgeCard />
                <hr/>
                <ValidateNewBadgeCard />
                <hr/>
                <AwardBadgeCard />
                <hr/>
                <BadgeCard />
                <hr/>
                <ValidateBadgeAwardCard />
                <hr/>
                <SeeAwardedBadgesCard />
            </div>
        );
    }
}

export default Issuer;