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
import Avatar from '@material-ui/core/Avatar';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { compose } from 'recompose';
import  { Redirect } from 'react-router-dom'
import Client from "../Store/actions/ClientActions";

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
            name: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        //only teacher can login in right now
        Client.search(`Teacher/${this.state.username}`)
            .then(data => {
                if (data.error) {
                    alert('Screw you, no user')
                }
                else {
                    this.setState({
                        userData: data
                    })
                    //store userData to redux and to blockchain
                    this.props.onLogin(this.state.userData);
                    //redirect
                    //this.props.history.push("/profile");
                }
            })

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
                    />        <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline">Badge Class Name</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Issuer Name
                        </Typography>
                        <br/>
                        <form noValidate autoComplete="off">
                            <Typography variant="subheading" color="textSecondary">
                                Badge Receiver:</Typography>
                            <TextField
                                id="badgeName"
                                defaultValue=""
                                placeholder="Name of the person:"
                                className={classes.textField}
                                margin="normal"
                            />
                            <Typography variant="subheading" color="textSecondary">
                                Badge Receiver Email:
                            </Typography>
                            <TextField
                                id="badgeName"
                                defaultValue=""
                                placeholder="Email of the person:"
                                className={classes.textField}
                                margin="normal"
                            /><Typography variant="subheading" color="textSecondary">
                            Evidence:
                        </Typography>
                            <TextField
                                id="badgeDescription"
                                defaultValue=""
                                multiline
                                placeholder="Evidence (optional:"
                                className={classes.textField}
                                margin="normal"
                            /><Typography variant="subheading" color="textSecondary">
                            Something else?:
                        </Typography>
                            <TextField
                                id="badgeCriteria"
                                defaultValue=""
                                multiline
                                placeholder="LOLLEROO:"
                                className={classes.textField}
                                margin="normal"
                            />
                        </form>
                        <div className={classes.controls}>
                            <Button className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#00C853', color:'white'}}>Award</Button>
                            <Button className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#F44336', color:'white'}}>Cancel</Button>
                        </div>
                    </CardContent>
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

export default withStyles(styles, { withTheme: true })(AwardBadgeCard);