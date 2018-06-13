import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BadgeCardSmall from './Badge/Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';
import { compose } from 'recompose';


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

function GetBadges(props){

    if (typeof(props.issuerBadges) === 'undefined' || props.issuerBadges.length == 0) {
       return <p>No badges found!</p>
    }
    else {
        let badges = props.issuerBadges.filter(badge => badge.validated == true)
        return (
                badges.map(tile => (                     
                    <GridListTile style={{ height: 'auto', paddingBottom: '10px', paddingRight: '10px' }} key={tile.entityId}>
                        <BadgeCardSmall tile={tile} />
                    </GridListTile>
                ))
        );
    }               
}

class Badge extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, theme } = this.props;


        return (
            <div>
                <h1>Badges to be awarded</h1>
                <GridList cols={5} style={{ height: 'auto' }}>
                    <GetBadges 
                    issuerBadges={this.props.issuerBadges}
                    issuedBadges={this.props.issuedBadges}
                    userBadges={this.props.userBadges} 
                    issuers={this.props.issuers}
                    />
                </GridList>
            </div>
        );
    }
}

Badge.propTypes = {
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
        issuerBadges: state.badgeClass.issuerBadges,
        issuedBadges: state.badgeClass.issuedBadges,
        userBadges: state.badgeClass.userBadges
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(Badge);