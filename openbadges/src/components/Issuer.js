import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import IssuerCard from './IssuerCard';
import BadgeCard from './BadgeCard';
import ValidateBadgeCard from './ValidateBadgeCard';
import CreateBadgeCard from './CreateBadgeCard';
import AwardBadgeCard from './AwardBadgeCard';


class Issuer extends React.Component {

    render () {
        return (
            <div>
                {/**/}
                <IssuerCard />
                <CreateBadgeCard />
                <hr/>
                <AwardBadgeCard />
                <hr/>
                <BadgeCard />
                <ValidateBadgeCard />
            </div>
        );
    }
}

export default Issuer;