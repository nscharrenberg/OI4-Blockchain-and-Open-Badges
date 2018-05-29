import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import IssuerCard from './IssuerCard';
import BadgeCard from './BadgeCard';
import ValidateBadgeCard from './ValidateBadgeCard';
import CreateBadgeCard from './CreateBadgeCard';
import AwardBadgeCard from './AwardBadgeCard';


const styles = theme => ({
    toolbar: theme.mixins.toolbar,
});

class Issuer extends React.Component {

    render () {
        const { classes } = this.props;
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

Issuer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default Issuer;