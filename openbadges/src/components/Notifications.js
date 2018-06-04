import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import WarningIcon from '@material-ui/icons/Warning';
import DraftsIcon from '@material-ui/icons/Drafts';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({

});

class Notifications extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        const { classes, theme } = this.props;

        return (
            <div>
                <h1>Notifications</h1>
                <Paper className={classes.root} elevation={4}>
                <List component="nav">
                    {this.props.notifications.map((notification, i) => (
                        <Link to={notification.link}><ListItem button divider>
                            <ListItemIcon>
                                <WarningIcon color={"red"} />
                            </ListItemIcon>
                            <ListItemText  primary={notification.message + notification.read} />
                        </ListItem></Link>
                        ))}
                </List>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('this is from profile:',state.userClass)
    return {
        notifications: [
            {
                read: false,
                message: 'You need to validate a badge awarded to Luuk van den Berg',
                link: '/issuer',
            },
            {
                read: false,
                message: 'You need to validate a badge awarded to Kasper Hamalainen',
                link: '/issuer',
            },
            {
                read: true,
                message: 'Kevin confirmed something.',
                link: '/badge',
            }

        ]
    }
}

Notifications.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(Notifications);