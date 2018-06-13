import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BadgeCard from './Badge/Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import AwardBadgeCard from './AwardBadgeCard';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    flex: {
        flex: 1,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class AwardBadge extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, theme } = this.props;


        return (
            <div>
                <AwardBadgeCard />
            </div>
        );
    }
}

AwardBadge.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    console.log('this is userclass from state: ',state.userClass)
    return {
        issuers: state.userClass.issuers,
        firstname: state.userClass.firstname,
        lastname: state.userClass.lastname,
        entityId: state.userClass.entityId,
        badges: state.badgeClass.badges
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(AwardBadge);