import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {
    Link,
} from 'react-router-dom';
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
        objectFit: 'cover',
        paddingTop: '100%'
    },
    flex: {
        flex: 1,
    },
});

class BadgeCard extends React.Component {
    constructor(props) {
        super(props);

        // TODO: REMOVE Role for Issuer on Backend. For now role is hardcoded for Issuer.
        this.state = {
            badgeId: this.props.tile.entityId,
            awardBadgeIdIssuerId: this.props.tile.issuerId
        }
    }

    handleSubmit(event) {
        this.props.onClick(this.state);
    }

    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={this.props.tile.imageUrl}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {this.props.tile.name}
                            </Typography>
                            <Typography component="p">
                                {this.props.tile.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/awardBadge/${this.props.tile.entityId}`}>
                                <Button color="secondary" className={[classes.button]} 
                                onClick={this.handleSubmit.bind(this)}>
                                    Award Badge
                                </Button>
                            </Link>

                            <Button><i class="material-icons">edit</i></Button>
                        </CardActions>
                    </Card>
                </Grid>
            </div>
        );
    }
}

BadgeCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick(data) {
            const action = {type: 'STORE_AWARDING_BADGE_ID', payload: data };
            dispatch(action);
        }
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(BadgeCard);