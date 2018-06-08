import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {compose} from "recompose";
import {connect} from "react-redux";

const styles = theme => ({
    root: {
        margin: '0.1em 1.5em 0.1em 1.5em',
    },
    heading: {
        margin: '10px',
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        margin: '10px',
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        flexDirection: 'column',
    },
    column: {
        flexBasis: '33.33%',
    },
    columnButton: {
        alignItems: 'flex-end',
        marginRight: '15px',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        cover: {
            minWidth: 25,
            height: 25,
        },
    },
    extrabuttons: {
      marginLeft: 230,
    },
});

class ValidateBadgeAwardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisBadge: this.props.badge,
      validatorId: this.props.entityId
    }
  }

    handleValidation(event) {
        event.preventDefault();
        this.props.handleValidation(this.state.thisBadge, this.state.validatorId);
    }  

  render () {

  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.detailRow} expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>

          <Avatar alt="BadgeLogo" src="https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png" className={classes.cover} />
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>{this.state.badgeId}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Some Other Info</Typography>
          </div>
          <div className={classes.columnButton}>
            <Button variant="raised" onClick={this.handleValidation.bind(this)} color="success" style={{backgroundColor: '#00C853'}}><i class="material-icons" style={{color:'white'}}>done</i></Button>
          </div>
          <div className={classes.columnButton}>
            <Button variant="raised" color="success" style={{backgroundColor: '#F44336'}}><i class="material-icons" style={{color:'white'}}>clear</i></Button>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          {/*<BadgeCard />*/}
          <div className={classes.extrabuttons}>
          <Typography variant="subheading" color="textSecondary">
              Verificate issuing: 
            </Typography>
              <Button onClick={this.handleValidation.bind(this)} className={classes.columnButton} variant="raised" color="success" style={{backgroundColor: '#00C853'}}><i class="material-icons" style={{color:'white'}}>done</i></Button>
              <Button  className={classes.columnButton} variant="raised" color="success" style={{backgroundColor: '#F44336'}}><i class="material-icons" style={{color:'white'}}>clear</i></Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );

  }
}

ValidateBadgeAwardCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        name: state.userClass.firstName
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(ValidateBadgeAwardCard);