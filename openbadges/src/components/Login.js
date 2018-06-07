import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Client from '../Store/actions/ClientActions';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { compose } from 'recompose';
import  { Redirect } from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing.unit,
    },
});


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entityId: '',
            userData: [],
            allUsers: ['name': 'lol'],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

            new Promise( (resolve, reject) => { 
                return Client.findUser(this.state.entityId).then( data => {
                    console.log(data)
                    /*this.setState({
                        allUsers: data
                    });*/
                }).then( data => {
                    console.log('this.state.allUsers')
                    /*this.state.allUsers.map((user, i) => {
                        if(user.userEmail == this.state.userEmail)
                           console.log("wuhuu")
                           ///this.props.onLogin(this.state.userData); 
                        else
                            console.log("vittu")
                        })*/
                })
            })

            function loginUser() {
                console.log(this.state.allUsers)
                console.log("gotit")
                /*this.state.allUsers.map((user, i) => {
                    if(user.userEmail == this.state.userEmail)
                       console.log("wuhuu")
                       ///this.props.onLogin(this.state.userData); 
                    else
                        console.log("vittu")
                    })*/
            }
        
        
        //only teacher can login in right now
        /*Client.search(`Teacher/${this.state.username}`)
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
        })*/

    }

    change = e => {
        this.setState({
           [e.target.name]: e.target.value
        });
        console.log(this.state.userEmail)
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <Grid container spacing={24} alignItems={"center"} justify={"center"}>
                    <Grid item xs={4}>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <Paper className={[classes.paper]}>
                                <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                    <Grid item xs={12}>
                                        <h1>Login</h1>
                                    </Grid>
                                </Grid>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                        <p>Type your email address</p>
                                            <TextField 
                                                required
                                                id="entityId"
                                                name="entityId"
                                                label="Your i + PCN" 
                                                value={this.state.userEmail}
                                                onChange={e => this.change(e) }
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <Lock />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="password" type="password" label="Password - NOT NEEDED NOW" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                    <Grid item xs={6}>
                                        <Button  type="submit" style={{width: '100%'}} size={"large"} color={"primary"} variant="raised" className={classes.button}>
                                            Login
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin(data) {
            console.log(data)
            const action = {type: 'LOGIN', payload: data, login: true };
            dispatch(action);
        }
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(Login);