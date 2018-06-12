import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'recompose';

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
    width:'80%',
  }
});

//Have to be TESTED with multiple issuers
//Have to get issuerID and chance it to name and bla bla bla
function GetIssuerName(props) {
  /*console.log('GetIssuerName: ' ,props.issuers)
  let badgeCreatorIssuerId = props.badgeIssuerId.split('#')[1]
  console.log('badgeCreatorIssuerId: ', badgeCreatorIssuerId)
  let issuerName = props.issuers.filter(issuer => {
    issuer.entityId == badgeCreatorIssuerId
      return issuer.name
  })
  //issuerName = issuerName.name
  console.log('issuerName IS :',issuerName)*/

  return (<p>Issuing Organization: Need to be fixed</p>);
}

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
            <Typography variant="headline">{this.props.badge.name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              <GetIssuerName badgeIssuerId={this.props.badge.issuer} issuers={this.props.issuers} />
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
            <p>{this.props.badge.description}</p>            
            </Typography>
            <Typography variant="subheading" color="textSecondary">
            <h4>Criteria:</h4>
            </Typography>
            <Typography variant="body" color="textSecondary">
            <p>{this.props.badge.criteriaUrl}</p>            
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <h4>Validated: True/False</h4> 
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <h4>Validator: Name of Validator</h4>
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <h4>Badge Creator: {this.props.badge.teacherId}</h4>
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

function mapStateToProps(state) {
  console.log('MY STAFF:',state.userClass.staff)
    return {
        issuers: state.userClass.issuers,
        firstname: state.userClass.firstname,
        lastname: state.userClass.lastname,
        entityId: state.userClass.entityId,
        badges: state.userClass.badges,
        staff: state.userClass.staff
    }


}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(BadgeCard);