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
    alignItems: 'left',
    marginTop: '20px',
  },
});


class IssuerCard extends React.Component  {
  constructor(props) {
    super(props);
  }

  render () {

  const { classes, theme} = this.props;
  console.log('Issuer Props :',this.props.issuer)

  return (
    <div>
      <Card className={classes.card}> 
                  <CardMedia
              className={classes.cover}
              image="./img/fontys_logo.png" //NEED TO GET THIS FROM BLOCKCHAIN
              title="Issuer Organization Name"
            />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Issuer Name: {this.props.issuer.name}</Typography>
            <Typography variant="subheading" color="textSecondary">
            {this.props.issuer.description}
            </Typography>
            <div className={classes.controls}>
                <Button>WWW</Button>
                <Button>STAFF</Button>
                <Button>EMAIl</Button>
                <Button><i class="material-icons">edit</i></Button>
            </div>
          </CardContent>
        </div>

      </Card>
    </div>
  );

  }
}

IssuerCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    console.log(state.issuerClass)
    //console.log("mapStateToProps: ", state)
    return {
      name: state.issuerClass.name,
      description: state.issuerClass.description,
      www: state.issuerClass.www,
      img: state.issuerClass.img,
      email: state.issuerClass.email,
      issuers: state.userClass.issuers,
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(IssuerCard);

