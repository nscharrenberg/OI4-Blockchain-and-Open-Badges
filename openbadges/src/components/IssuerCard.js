import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '0em 1.5em 1.5em 1.5em',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',
    width: '40%',
  },
  cover: {
    padding: '5px',
    margin: '10px',
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    alignItems: 'left',
    marginTop: '20px',
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div>
      <Card className={classes.card}>
                  <CardMedia
              className={classes.cover}
              image="./img/fontys_logo.png"
              title="Issuer Organization Name"
            />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Issuer Organization Name</Typography>
            <Typography variant="subheading" color="textSecondary">
              Some Description here. Lorem ipsum ja sitä rataa. Some Description here. Lorem ipsum ja sitä rataa.
            </Typography>
            <div className={classes.controls}>
                <Button>WWW</Button>
                <Button>STAFF</Button>
                <Button><i class="material-icons">edit</i></Button>
            </div>
          </CardContent>
        </div>

      </Card>
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);