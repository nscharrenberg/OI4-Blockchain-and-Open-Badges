import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '0em 1.5em 0em 1.5em',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
  },
  cover: {
    alignText: 'center',
    padding: '5px',
    margin: '10px',
    minWidth: 151,
    height: 151,
    backgroundColor: '#cecece',
  },
  controls: {
    display: 'flex',
    alignItems: 'left',
    marginTop: '20px',
  },
  awardButton: {
    marginRight: '15px',
    backgroundColor: 'lightgrey',
  },  
  badgeInfo: {
    marginTop: '15px',
  },
  verificationButton: {
    marginRight: '15px',
    float: 'left',
  },
  textField: {
    marginBottom: '15px',
    width: 500,
  },
  imageTxt: {
    marginTop: '25%',
    textAlign: 'center',
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.cover}>
        <div className={classes.imageTxt}>
          <i class="material-icons" style={{fontSize: '48px'}}>cloud_upload</i>
            <Typography  variant="body">UPLOAD IMAGE</Typography>
          </div>
          </CardMedia>
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <form noValidate autoComplete="off">
                    <Typography variant="subheading" color="textSecondary">
                    Badge Name:
                    </Typography>
                    <TextField
                      id="badgeName"
                      defaultValue=""
                      placeholder="Name of the Badge:"
                      className={classes.textField}
                      margin="normal"
                    /><Typography variant="subheading" color="textSecondary">
                    Description:
                    </Typography>
                    <TextField
                      id="badgeDescription"
                      defaultValue=""
                      multiline
                      placeholder="Description:"
                      className={classes.textField}
                      margin="normal"
                    /><Typography variant="subheading" color="textSecondary">
                    Criteria:
                    </Typography>
                    <TextField
                      id="badgeCriteria"
                      defaultValue=""
                      multiline
                      placeholder="Criteria:"
                      className={classes.textField}
                      margin="normal"
                    />
            </form>
            <div className={classes.controls}>
              <Button className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#00C853', color:'white'}}>Create Badge</Button>
              <Button className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#F44336', color:'white'}}>Cancel</Button>
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