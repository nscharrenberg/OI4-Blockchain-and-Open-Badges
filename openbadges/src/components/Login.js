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
import Badge from '../Store/actions/badgeActions';

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
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
            new Promise( (resolve, reject) => { 
                return Client.search('Validator' + '/' + this.state.entityId).then( data => {
                    if(data.error) {
                        return Client.search('Teacher' + '/' + this.state.entityId).then( data => {
                           if(data.error) {
                             return Client.search('BadgeUser' + '/' + this.state.entityId).then( data => {
                                if(data.error) {
                                    alert('No user found!')
                                }
                                else {
                                    console.log("found BadgeUser")
                                    this.setState({
                                    userData: data
                                    })
                                    //store userData to redux and to blockchain
                                    this.props.onLogin(this.state.userData);
                                }
                             })
                           } 
                           else {
                            console.log("found Teacher")
                            this.setState({
                            userData: data
                            })
                            //store userData to redux and to blockchain
                            this.props.onLogin(this.state.userData); 
                            // =>
                           }
                        })
                    }
                    else {
                        console.log("found Validator")
                        this.setState({
                        userData: data
                        })
                        //store userData to redux and to blockchain
                        this.props.onLogin(this.state.userData); 
                    }
                })
            })        
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
            Badge.GetBadges(data.issuers, data.entityId).then(data => {
                login(data)
            })   

            function login(badgeData) {
                const login = true
                const action = {type: 'LOGIN', payload: data, login: login, badgeData: badgeData};
                dispatch(action);       
            }
        }
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(Login);