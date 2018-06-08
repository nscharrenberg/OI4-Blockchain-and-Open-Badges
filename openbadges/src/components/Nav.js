import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import {
  Link,
} from 'react-router-dom';

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
					<Link to="/validator">
						<ListItem button>
							<ListItemIcon>
								<SendIcon />
							</ListItemIcon>
							<ListItemText primary="validator" />
						</ListItem>
					</Link>
                </List>
			</div>
		);
	}
}

export default Nav;