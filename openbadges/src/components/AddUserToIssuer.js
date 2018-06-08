import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import { compose } from "recompose";
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

class AddUserToIssuer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHash: 'userEmail',
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
                <h1>Attach User to Issuer</h1>
                <Card className={classes.card}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography variant="subheading" color="textSecondary">
                                    User Email:
                                </Typography>
                                <TextField
                                    id="userEmail"
                                    name="userEmail"
                                    placeholder="Name of the user:"
                                    className={classes.textField}
                                    margin="normal"
                                    onChange={e => this.change(e) }
                                    value={this.state.userEmail}
                                />
                                <p>User will be attached to Issuer:</p>
                                        <p>This need's to be implemented</p>
                                <div className={classes.controls}>
                                    <Button type={"submit"} name="createIssuer" id="createIssuer" className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#00C853', color:'white'}}>Attach</Button>
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

AddUserToIssuer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    console.log(state.userClass)
    return {
        entityId: state.userClass.entityId,
        issuerId: state.issuerClass.issuerId,
        issuers: state.userClass.issuers,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit(data) {
            //NEED TO IMPLEMENT
        }
    }

}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(AddUserToIssuer);