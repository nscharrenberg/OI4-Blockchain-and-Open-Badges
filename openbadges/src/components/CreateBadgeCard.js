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
import {connect} from 'react-redux';
import { compose } from "recompose";
import axios from 'axios';
import Client from '../Store/actions/ClientActions';

const styles = theme => ({
  card: {
  	display: 'flex',
	margin: '0em 1.5em 0em 1.5em',
  },
  cover: {
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
	marginBottom: '25px',
	width: 400,
  },
  imageTxt: {
	marginTop: '1%',
	textAlign: 'center',
  },
  input: {
	display: 'none'
  },
});

class CreateBadgeCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgHash: 'https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png',
			badgeName: '',
			badgeDescription: '',
			badgeCriteria: '',
      entityId: props.entityId,
      issuerId: props.issuerId,
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state);
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
            <h1>Create Badge</h1>
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
                                    placeholder="Name of the Badge:"
                                    className={classes.textField}
                                    margin="normal"
                                    onChange={e => this.change(e) }
                                    value={this.state.firstName}
                                />
                            <Typography variant="subheading" color="textSecondary">
                                Description:
                            </Typography>
                                <TextField
                                    id="badgeDescription"
                                    name="badgeDescription"
                                    multiline
                                    placeholder="Description:"
                                    className={classes.textField}
                                    margin="normal"
                                    onChange={e => this.change(e) }
                                    value={this.state.firstName}
                                /><Typography variant="subheading" color="textSecondary">
                                Criteria:
                            </Typography>
                                <TextField
                                    id="badgeCriteria"
                                    name="badgeCriteria"
                                    multiline
                                    placeholder="Criteria:"
                                    className={classes.textField}
                                    margin="normal"
                                    onChange={e => this.change(e) }
                                    value={this.state.firstName}
                                />
                            <div className={classes.controls}>
                                <Button type={"submit"} name="createBadge" id="createBadge" className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#00C853', color:'white'}}>Create Badge</Button>
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
	console.log(state.userClass)
	return {
		entityId: state.userClass.entityId,
    issuerId: state.issuerClass.issuerId,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onSubmit(data) {
      console.log('this is badge data: ' ,data)

			new Promise(
				(resolve, reject) =>{
				   Client.search('BadgeClass')
					.then(data => {
						const nextId = parseInt(data.slice(-1)[0].entityId) + 1
						console.log('this is nextid:',nextId)
						sendData(nextId)
					})
				});

			function sendData(id) {
				console.log('this is what I send to redux:',data, 'id: ', id);
				const action = {type: 'NEW_BADGE', payload: data, id: id};
				dispatch(action);
			}
		}
	}

}

export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(CreateBadgeCard);