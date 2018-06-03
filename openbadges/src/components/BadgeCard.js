import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '0em 1.5em 0em 1.5em',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    padding: '5px',
    margin: '10px',
    minWidth: 151,
    height: 151,
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
    width:'40%',
  }
});

class BadgeCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

  const { classes, theme } = this.props;

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
              className={classes.cover}
              image="https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png"
              title="Issuer Organization Name"
            />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Badge Class Name</Typography>
            
            <Typography variant="subheading" color="textSecondary">
              Issuer Name
            </Typography>
            <div className={classes.controls}>
                <Button className={classes.awardButton}>AWARD</Button>
                <Button className={classes.awardButton}>DELETE</Button>
                <Button className={classes.awardButton}><i class="material-icons">edit</i></Button>
            </div>
            <div className={classes.badgeInfo}>
            <Typography  variant="subheading" color="textSecondary">
            <h4>Description:</h4>
            </Typography>
            <Typography  variant="body" color="textSecondary">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Typography>
            <Typography variant="subheading" color="textSecondary">
            <h4>Criteria:</h4>
            </Typography>
            <Typography variant="body" color="textSecondary">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <h4>Validated: True/False</h4>
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <h4>Validator: Name of Validator</h4>
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <h4>Badge Creator: Name of Teacher</h4>
            </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );

  }
}

BadgeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BadgeCard);