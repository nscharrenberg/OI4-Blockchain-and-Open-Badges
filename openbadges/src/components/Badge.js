import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BadgeCard from './Badge/Card';
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

// TODO: Remove these when working with Rest API.
const dummyBadgesArray = [
    {
        img: 'https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png',
        title: 'Knife & Fork1',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
    {
        img: 'https://i.pinimg.com/736x/f7/0c/e4/f70ce4e89bb507e70813032293712c0d--badge-logo-logo-s.jpg',
        title: 'Knife & Fork2',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
    {
        img: 'https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png',
        title: 'Knife & Fork9',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
    {
        img: 'https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png',
        title: 'Knife & Fork3',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
    {
        img: 'https://i.ytimg.com/vi/ePw190n93Dg/maxresdefault.jpg',
        title: 'Knife & Fork6',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
    {
        img: 'https://www.dpreview.com/what-is-4k/images/4k-1080p-compared.jpg',
        title: 'Knife & Fork4',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
    {
        img: 'https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png',
        title: 'Knife & Fork7',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
    {
        img: 'https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png',
        title: 'Knife & Fork10',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
    {
        img: 'https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png',
        title: 'Knife & Fork12',
        description: 'You eat with knife and fork. No Spoon and no hands. Just knifes and fork',
    },
];

function GetBadges(props){
    console.log('propbag:',props.badges);
    let badges = []

    if ((typeof(props.badges) === 'undefined' || props.badges.length == 0)) {
       return <p>No badges found!</p>
    }
    else {
        if ((!Array.isArray(props.badges.issuerBadges[0]) || !props.badges.issuerBadges[0].length)) {
            return <p>No badges found!</p>
        }
        else {
            badges = props.badges.issuerBadges[0]
            return (
                    badges.map(tile => (                     
                        <GridListTile style={{ height: 'auto', paddingBottom: '10px', paddingRight: '10px' }} key={tile.entityId}>
                            <BadgeCard tile={tile} />
                        </GridListTile>
                    ))
            );
        }
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
                <h1>All Badges</h1>
                <GridList cols={5} style={{ height: 'auto' }}>
                    <GetBadges badges={this.props.badges} />
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
        firstName: state.userClass.firstName,
        lastName: state.userClass.lastName,
        entityId: state.userClass.entityId,
        badges: state.userClass.badges
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(Badge);