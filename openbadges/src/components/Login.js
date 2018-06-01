import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';


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
    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <Grid container spacing={24} alignItems={"center"} justify={"center"}>
                    <Grid item xs={4}>
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
                                            <TextField id="username" label="Username" />
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
                                        <Button style={{width: '100%'}} size={"large"} color={"primary"} variant="raised" href="#raised-buttons" className={classes.button}>
                                            Login
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
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

export default withStyles(styles, { withTheme: true })(Login);