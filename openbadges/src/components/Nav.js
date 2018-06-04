import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import Divider from '@material-ui/core/Divider';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Nav extends Component {

	render () {
		return (
            <div>
                <Divider />
                <List>
					<Link to="/">
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItem>
					</Link>
					<Link to="/issuer">
						<ListItem button>
							<ListItemIcon>
								<StarIcon />
							</ListItemIcon>
							<ListItemText primary="Issuer" />
						</ListItem>
					</Link>
					<Link to="/badge">
						<ListItem button>
							<ListItemIcon>
								<SendIcon />
							</ListItemIcon>
							<ListItemText primary="Badge" />
						</ListItem>
					</Link>
                </List>
			</div>
		);
	}
}

export default Nav;