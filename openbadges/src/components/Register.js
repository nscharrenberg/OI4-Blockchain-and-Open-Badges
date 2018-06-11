import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/Email';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Client from '../Store/actions/ClientActions';

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

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            entityId: '',
            emails: '',
            password: '',
            role: '',
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.role)

        if ((this.state.role == 'Teacher') || (this.state.role == "Validator")) {
            this.props.onSubmit(this.state);
            //this.props.history.push("/");    
        }
        else if (this.state.role == "BadgeUser") {
            alert("oops.BadgeUser Register is not supported")
        }
        else {
            alert('Incorrect user role')
        }
    }

    change = e => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div>
                <Grid container spacing={24} alignItems={"center"} justify={"center"}>
                    <Grid item xs={8}>
                        <Paper className={[classes.paper]}>
                            <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                <Grid item xs={12}>
                                    <h1>Register</h1>
                                </Grid>
                            </Grid>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                            <p>{this.props.name}</p>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField 
                                            required 
                                            id="firstName" 
                                            name="firstName" 
                                            label="First name" 
                                            onChange={e => this.change(e) }
                                            value={this.state.firstName}
                                            />

                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField 
                                            required 
                                            id="lastName" 
                                            name="lastName" 
                                            label="Last name" 
                                            onChange={e => this.change(e) }
                                            value={this.state.lastName}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField 
                                            id="entityId" 
                                            name="entityId" 
                                            label="Your i + PCN" 
                                            onChange={e => this.change(e) }
                                            value={this.state.username}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <Email />
                                        </Grid>
                                        <Grid item>
                                            <TextField 
                                            required 
                                            id="emails" 
                                            name="emails" 
                                            label="Email" 
                                            onChange={e => this.change(e) }
                                            value={this.state.emails}
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
                                            <TextField 
                                            id="password" 
                                            name="password" 
                                            type="password" 
                                            label="Password" 
                                            onChange={e => this.change(e) }
                                            value={this.state.password}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>

                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                        <p>Role must be (Teacher, Validator, BadgeUser)</p>
                                            <TextField 
                                            required 
                                            id="role" 
                                            name="role" 
                                            type="role" 
                                            label="Type Role" 
                                            onChange={e => this.change(e) }
                                            value={this.state.role}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>            

                                {/* RADIO BUTTONS TO SELECT ROLE - DIDN'T KNOW HOW TO PARSE RADIO BUTTON

                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <FormControl>
                                              <RadioGroup
                                                name="role"
                                                value={this.state.value}
                                                onChange={this.handleChange}

                                              >
                                                <FormControlLabel value="teacher" name="teacher" parse={val => val === "true"} control={<Radio />} label="Teacher" />
                                                <FormControlLabel value="validator" name="validator" parse={val => val === "true"} control={<Radio />} label="Validator" />
                                              </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </div>*/}
                                <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                    <Grid item xs={6}>
                                        <Button type="submit"  style={{width: '100%'}} size={"large"} color={"primary"} variant="raised" component="button" className={classes.button}>
                                            Register
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


Register.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
      name: state.userClass.firstName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit(data) {
            new Promise(
                (resolve, reject) =>{
                   Client.search(data.role + '/' + data.entityId)
                    .then(data => {
                        if(data.error)
                            //meaning id is free
                            sendData()
                        else
                            alert('PCN number already used')
                    })
                });

            function sendData() {
                const login = true
                const action = {type: 'NEW_USER', payload: data, login:login };
                dispatch(action);
                alert('New user created - For better system performance, please logout and login')
            }
        }
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(Register);