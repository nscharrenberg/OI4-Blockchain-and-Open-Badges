import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '0em 1.5em 0em 1.5em',
    boxShadow: 'none',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: 'auto',
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
    width:'90%',
  },
  verificationButton: {
    marginRight: '15px',
    float: 'left',
  }
});

class BadgeDetailedCard extends React.Component {
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
            <Typography variant="headline">{this.props.badge.name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {this.props.badge.issuer}
            </Typography>
            <div className={classes.badgeInfo}>
            <Typography variant="subheading" color="textSecondary">
              {this.props.badge.validated}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              Validator: Name of Validator
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {this.props.badge.teacher}
            </Typography>
            <Typography  variant="subheading" color="textSecondary">
             Description:
            </Typography>
            <Typography  variant="body" color="textSecondary">
            <p>{this.props.badge.description}</p>
            </Typography>
            <Typography  variant="subheading" color="textSecondary">
            <h4>Criteria:</h4>
            </Typography>
            <Typography  variant="body" color="textSecondary">
            <p>{this.props.badge.criteriaUrl}</p>
            </Typography>
            <Typography variant="subheading" color="textSecondary">
            <h4>Evidence:</h4>
            </Typography>
            <Typography variant="body" color="textSecondary">
            <p>We are missing Evidence!!!</p>
            </Typography>
            <hr />
            </div>
              
          </CardContent>
        </div>
      </Card>
    </div>
  );

  }
}

BadgeDetailedCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
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
)(BadgeDetailedCard);