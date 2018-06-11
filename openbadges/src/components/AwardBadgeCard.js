import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Client from '../Store/actions/ClientActions';


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
    verificationButton: {
        marginRight: '15px',
        float: 'left',
    },
    textField: {
        marginBottom: '15px',
        width: 500,
    },
});

class AwardBadgeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receiverName: '',
            receiverEmail: '',
            receiverEvidence: '',
            receiverId: '',
            awardingBadgeId: this.props.awardBadgeId,
            awardBadgeIdIssuerId: this.props.awardBadgeIdIssuerId,
            currentUserEntityId: this.props.currentUserEntityId
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
    };


    render () {

        const { classes, theme } = this.props;

        return (
            <div>
            <h1>Award/Issue Badge</h1>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image="https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png"
                        title="Issuer Organization Name"
                    />
                    <div className={classes.details}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline">Badge Class Name</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Issuer Name
                        </Typography>
                        <br/>
                        <form noValidate autoComplete="off">
                            <Typography variant="subheading" color="textSecondary">
                                Badge Receiver ID:
                            </Typography>
                            <TextField
                                required
                                id="receiverId"
                                name="receiverId" 
                                defaultValue=""
                                placeholder="ID of the person (works only with this):"
                                className={classes.textField}
                                margin="normal"
                                onChange={e => this.change(e) }
                                value={this.state.receiverId}
                            />
                            <TextField
                                id="receiverName"
                                name="receiverName" 
                                defaultValue=""
                                placeholder="Name of the person:"
                                className={classes.textField}
                                margin="normal"
                                onChange={e => this.change(e) }
                                value={this.state.receiverName}
                            />
                            <Typography variant="subheading" color="textSecondary">
                                Badge Receiver Email:
                            </Typography>
                            <TextField
                                id="receiverEmail"
                                name="receiverEmail" 
                                defaultValue=""
                                placeholder="Email of the person:"
                                className={classes.textField}
                                margin="normal"
                                onChange={e => this.change(e) }
                                value={this.state.receiverEmail}
                            /><Typography variant="subheading" color="textSecondary">
                            Evidence:
                        </Typography>
                            <TextField
                                id="receiverEvidence"
                                name="receiverEvidence"
                                defaultValue=""
                                multiline
                                placeholder="Evidence (optional:"
                                className={classes.textField}
                                margin="normal"
                                onChange={e => this.change(e) }
                                value={this.state.receiverEvidence}
                            />
                        </form>
                        <div className={classes.controls}>
                            <Button type={"submit"} className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#00C853', color:'white'}}>Award</Button>
                            <Button className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#F44336', color:'white'}}>Cancel</Button>
                        </div>
                    </CardContent>
                    </form>
                </div>
                </Card>
            </div>
        );
    }
}

AwardBadgeCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        awardBadgeId: state.badgeClass.awardingBadgeId,
        awardBadgeIdIssuerId: state.badgeClass.badgeIssuerId,
        currentUserEntityId: state.userClass.entityId,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit(data) {

            new Promise(
                (resolve, reject) => {
                   Client.search('IssuedBadgeClass')
                    .then(data => {
                        if(data.entityId == undefined) {
                            const nextId = 5005
                            sendData(nextId)
                        }
                        else {
                            const nextId = parseInt(data.slice(-1)[0].entityId) + 1;
                            console.log('this is nextid:',nextId);
                            sendData(nextId)
                        }
                    })
            });

            function sendData(id) {
                console.log(data)
                const action = {type: 'ISSUE_BADGE', payload: data, id: id };
                dispatch(action);
            }
        }
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(AwardBadgeCard);