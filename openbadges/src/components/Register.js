import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BadgeCard from './Badge/Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/Email';
import axios from 'axios';

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
    state = {
        staff: []
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(data)

        /*axios.post('http://192.168.27.142:3000/api/org.acme.empty.BadgeUser', {data})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })*/
    }

    testStore(event) {
        event.preventDefault();
        const data = new FormData(event.target);



        console.log()

    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <Grid container spacing={24} alignItems={"center"} justify={"center"}>
                    <Grid item xs={4}>
                        <Paper className={[classes.paper]}>
                            <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                <Grid item xs={12}>
                                    <h1>Register</h1>
                                </Grid>
                            </Grid>
                            <form onSubmit={this.handleSubmit}>
                                <input name="entityType" id="entityType" value="SomeType" />
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="firstName" name="firstName" label="First name" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="lastName" name="lastName" label="Last name" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="username" label="Username" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <Email />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="emails" label="Email" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={24} alignItems={"flex-end"} justify={"center"}>
                                        <Grid item>
                                            <Lock />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="password" type="password" label="Password" />
                                        </Grid>
                                    </Grid>
                                </div>
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

export default withStyles(styles, { withTheme: true })(Register);