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
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { changeFirstName } from '../Store/actions/userActions';

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
    }

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
        console.log(data);

        const name = 'kasper';

        //this.context.store.userClass.firstName = data.firstName;
        //this.context.store.userClass.lastName = data.lastName;

        this.props.store.dispatch(changeFirstName(name))

        //console.log(this.context.store.userClass);
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
                            <form onSubmit={this.testStore}>
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

function mapStateToProps(state) {
    //console.log(state.userClass)
    return {
      name: state.userClass.name,
      description: state.userClass.description,
      www: state.userClass.www,
      img: state.userClass.img
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: () => {
            console.log("FUCK")
        }
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(Register);