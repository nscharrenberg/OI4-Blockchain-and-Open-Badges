import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={this.props.tile.img}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Knife & Fork
                            </Typography>
                            <Typography component="p">
                                You eat with knife and fork. No Spoon and no hands. Just knifes and fork
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="secondary" className={[classes.button]} >
                                Award Badge
                            </Button>
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

export default withStyles(styles, { withTheme: true })(BadgeCard);
