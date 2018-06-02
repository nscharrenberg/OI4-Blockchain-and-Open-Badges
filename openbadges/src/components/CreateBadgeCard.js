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
import { compose } from "recompose";
import Client from './Client';

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
    flex: '1 0 auto',
  },
  cover: {
    alignText: 'center',
    padding: '5px',
    margin: '10px',
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
        this.state = {
            imgHash: 'this_is_img_hash',
            badgeName: '',
            badgeDescription: '',
            badgeCriteria: '',
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        //this.props.history.push("/main");
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
                    <form onSubmit={this.handleSubmit.bind(this)}>
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
        onSubmit(data) {
            new Promise(
                (resolve, reject) =>{
                   Client.search('NewBadge')
                    .then(data => {
                        console.log(data)
                        //const nextId = parseInt(data[0].entityId) + 1
                        const nextId = parseInt(data.slice(-1)[0].entityId) + 1
                        console.log('this is nextid:',nextId)
                        sendData(nextId)
                    })
                });

            function sendData(id) {
                //console.log('this is what I send to redux:',data,id);
                const action = {type: 'NEW_BADGE', payload: data, id: id };
                dispatch(action);
            }
        }
    }

}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(CreateBadgeCard);