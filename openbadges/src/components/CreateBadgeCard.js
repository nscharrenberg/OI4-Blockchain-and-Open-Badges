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
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import axios from 'axios';
import {compose} from "recompose";

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '0em 1.5em 0em 1.5em',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
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
    width: 200,
  },
  imageTxt: {
    marginTop: '25%',
    textAlign: 'center',
  },
    input: {
    display: 'none'
    }
});


class CreateBadgeCard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        imgHash: '',
        badgeName: 'dog',
        badgeDescription: '',
        badgeCriteria: '',
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.files[0]);
        // axios.post('ipfs.io/ipfs/', this.state.imgHash)
        console.log(this.state);
    }

    change = e => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    render () {
        const { classes, theme } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <form>
                    <CardMedia className={classes.cover}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="raised" component="div" className={classes.imageTxt}>
                                <i className="material-icons" style={{fontSize: '48px'}}>cloud_upload</i>
                                <Typography variant="body">UPLOAD IMAGE</Typography>
                            </Button>
                        </label>

                    </CardMedia>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                                <Typography variant="subheading" color="textSecondary">
                                    Badge Name:
                                </Typography>
                                <TextField
                                    id="badgeName"
                                    name="badgeName"
                                    value={this.state.badgeName}
                                    onChange={e => this.change(e) }
                                    placeholder="Name of the Badge:"
                                    className={classes.textField}
                                    margin="normal"
                                />
                            <Typography variant="subheading" color="textSecondary">
                                Description:
                            </Typography>
                                <TextField
                                    id="badgeDescription"
                                    name="badgeDescription"
                                    value={this.state.badgeDescription}
                                    onChange={e => this.change(e) }
                                    multiline
                                    placeholder="Description:"
                                    className={classes.textField}
                                    margin="normal"
                                /><Typography variant="subheading" color="textSecondary">
                                Criteria:
                            </Typography>
                                <TextField
                                    id="badgeCriteria"
                                    name="badgeCriteria"
                                    value={this.state.badgeCriteria}
                                    onChange={e => this.change(e) }
                                    multiline
                                    placeholder="Criteria:"
                                    className={classes.textField}
                                    margin="normal"
                                />
                            <div className={classes.controls}>
                                <Button onClick={e => this.handleSubmit(e)} name="createBadge" id="createBadge" className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#00C853', color:'white'}}>Create Badge</Button>
                                <Button className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#F44336', color:'white'}}>Cancel</Button>
                            </div>
                        </CardContent>
                    </div>
                    </form>
                </Card>
            </div>
        );
    }
}

CreateBadgeCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    //console.log(state.userClass)
    return {
        name: state.userClass.firstName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (event) => {
            event.preventDefault();
            const action = {type: 'CHANGE_FIRSTNAME', payload: 'This is my new Name' };
            dispatch(action);
        }
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(CreateBadgeCard);