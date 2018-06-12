import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import { compose } from "recompose";
import Client from '../Store/actions/ClientActions';
import IpfsApi from 'ipfs-api';
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
            file: "",
			imgHash: '',
			badgeName: '',
			badgeDescription: '',
			badgeCriteria: '',
      entityId: props.entityId,
      issuerId: props.issuerId,
      issuerIdToBadge: ''
		}
        this.ipfsApi = IpfsApi("localhost",5001)
  
  }

  saveToIpfs = (reader) => {
    let ipfsId
    const buffer = Buffer.from(reader.result)
    this.ipfsApi.add(buffer)
    .then((response) => {
      console.log(response)
      ipfsId = response[0].hash
      console.log(ipfsId)
      this.setState({imgHash: "https://ipfs.io/ipfs/"+ipfsId})

      this.props.onSubmit(this.state);
    }).catch((err) => {
      console.error(err)
    })
  }

  arrayBufferToString = (arrayBuffer) => {
    return String.fromCharCode.apply(null, new Uint16Array(arrayBuffer))
  }


	handleSubmit(event) {
        event.preventDefault();
        let reader = new window.FileReader()
        console.log(this.state.file)
        reader.onloadend = () => this.saveToIpfs(reader)
        reader.readAsArrayBuffer(this.state.file)
    }
	change = e => {
		this.setState({
		   [e.target.name]: e.target.value
        });
        if (e.target.name==='file'){
            this.setState({
                file: e.target.files[0]
            });
        }
	};

	render () {
		const { classes, theme } = this.props;

        return (
            <div>
            <h1>Create Badge</h1>
                <Card className={classes.card}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <CardMedia className={classes.cover}>
                        <input  className={classes.input}
                            id="raised-button-file" type="file" name="file" onChange={this.change} />
                       
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
                                /><Typography variant="subheading" color="textSecondary">
                                Issuer ID - for which issuer new badge belongs:
                            </Typography>
                                <TextField
                                    id="issuerIdToBadge"
                                    name="issuerIdToBadge"
                                    multiline
                                    placeholder="Issuer ID:"
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
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onSubmit(data) {
      console.log('this is badge data: ' ,data)

			new Promise(
				(resolve, reject) => {
				   Client.search('BadgeClass')
					.then(data => {
						const nextId = parseInt(data.slice(-1)[0].entityId) + 1;
						console.log('this is nextid:',nextId);
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