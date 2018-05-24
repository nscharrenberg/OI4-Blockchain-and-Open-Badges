import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import styling from '../assets/css/index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Routes from './Routes';
import Nav from './Nav';

const drawerWidth = 200;

const styles = theme => ({
  root: {
	flexGrow: 1,
	height: '100vh',
  },
  appFrame: {
	zIndex: 1,
	overflow: 'hidden',
	position: 'relative',
	display: 'flex',
	width: '100%',
	height: '100vh',
  },
  appBar: {
	position: 'absolute',
	transition: theme.transitions.create(['margin', 'width'], {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.leavingScreen,
	}),
  },
  appBarShift: {
	width: `calc(100% - ${drawerWidth}px)`,
	transition: theme.transitions.create(['margin', 'width'], {
	  easing: theme.transitions.easing.easeOut,
	  duration: theme.transitions.duration.enteringScreen,
	}),
  },
  'appBarShift-left': {
	marginLeft: drawerWidth,
  },
  'appBarShift-right': {
	marginRight: drawerWidth,
  },
  menuButton: {
	marginLeft: 12,
	marginRight: 20,
  },
  hide: {
	display: 'none',
  },
  drawerPaper: {
	position: 'relative',
	width: drawerWidth,
  },
  drawerHeader: {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: '0 8px',
	...theme.mixins.toolbar,
  },
  content: {
	flexGrow: 1,
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing.unit * 3,
	transition: theme.transitions.create('margin', {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.leavingScreen,
	}),
  },
  'content-left': {
	marginLeft: -drawerWidth,
  },
  'content-right': {
	marginRight: -drawerWidth,
  },
  contentShift: {
	transition: theme.transitions.create('margin', {
	  easing: theme.transitions.easing.easeOut,
	  duration: theme.transitions.duration.enteringScreen,
	}),
  },
  'contentShift-left': {
	marginLeft: 0,
  },
  'contentShift-right': {
	marginRight: 0,
  },
  'flex': {
	flex: 1,
  },
});

class PersistentDrawer extends React.Component {
  state = {
	open: false,
	anchor: 'left',
  };

  handleDrawerOpen = () => {
	this.setState({ open: true });
  };

  handleDrawerClose = () => {
	this.setState({ open: false });
  };

  handleChangeAnchor = event => {
	this.setState({
	  anchor: event.target.value,
	});
  };

  render() {
	const { classes, theme } = this.props;
	const { anchor, open } = this.state;

	const drawer = (
	  <Drawer onClick={this.handleDrawerClose}
		variant="persistent"
		anchor={anchor}
		open={open}
		classes={{
		  paper: classes.drawerPaper,
		}}
	  >
		<div className={classes.drawerHeader} >
		  <IconButton onClick={this.handleDrawerClose}>
			<ChevronLeftIcon />
		  </IconButton>
		</div>
		<Divider />
		<Nav />
	  </Drawer>
	);

	return (
	  <div className={classes.root}>
		<div className={classes.appFrame}>
		  <AppBar
			className={classNames(classes.appBar, {
			  [classes.appBarShift]: open,
			  [classes[`appBarShift-${anchor}`]]: open,
			})}
		  >
			<Toolbar disableGutters={!open}>
			  <IconButton
				color="inherit"
				aria-label="open drawer"
				onClick={this.handleDrawerOpen}
				className={classNames(classes.menuButton, open && classes.hide)}
			  >
				<MenuIcon />
			  </IconButton>
			  <Typography variant="title" color="inherit" className={classes.flex}>
				Blockchain & Open Badges
			  </Typography>
			  <Link to="/profile"><Button color="inherit">Login</Button></Link>
			</Toolbar>
		  </AppBar>
		  {drawer}
		  <main
			className={classNames(classes.content, classes[`content-${anchor}`], {
			  [classes.contentShift]: open,
			  [classes[`contentShift-${anchor}`]]: open,
			})}
		  >
			<div className={classes.drawerHeader} />
			<div onClick={this.handleDrawerClose}>
				<Routes />
			</div>
		  </main>
		</div>
	  </div>
	);
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);