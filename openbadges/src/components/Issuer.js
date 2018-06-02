import React from "react";
import IssuerCard from './IssuerCard';
import BadgeCard from './BadgeCard';
import ValidateBadgeCard from './ValidateBadgeCard';
import CreateBadgeCard from './CreateBadgeCard';
import AwardBadgeCard from './AwardBadgeCard';
import Profile from './Profile';

class Issuer extends React.Component {

    render () {
        return (
            <div>
                <IssuerCard />
                {/*<CreateBadgeCard />
                <hr/>
                <AwardBadgeCard />
                <hr/>
                <BadgeCard />
                <ValidateBadgeCard />
                <Profile />*/}
            </div>
        );
    }
}

export default Issuer;