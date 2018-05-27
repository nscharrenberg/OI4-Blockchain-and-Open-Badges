import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BadgeCard from './Badge/Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


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

class Badge extends React.Component {
    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <GridList cols={5} className={classes.gridList} style={{ height: 'auto' }}>
                    {dummyBadgesArray.map(tile => (
                        <GridListTile style={{ height: 'auto', paddingBottom: '10px', paddingRight: '10px' }} key={tile.title}>
                            <BadgeCard tile={tile} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

Badge.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Badge);