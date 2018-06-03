import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import Button from '@material-ui/core/Button';

function Showcard(props) {
  const showLogin = props.showLogin;
  if (showLogin) {
    return <Login />;
  }
  return <Register />;
}

class LoginRegister extends Component {
	  state = {
	    showLogin: true,
	  }

	  handleClick = () => {
	    this.setState({
	      showLogin: !this.state.showLogin
	    })
	  }

	render () {
		return (
			<div>
			<div style={{
				 position: 'relative',
				 left: '40%',
				 marginTop: '20px',
				 marginBottom: '20px',
			}}>
				<Button onClick={this.handleClick} style={{width: 50, margin:10}} size={"large"} color={"primary"} variant="raised" >
                 Login
                </Button>
                <Button  onClick={this.handleClick} style={{width: 50, margin:10}} size={"large"} color={"primary"} variant="raised" >
                 Register
                </Button>
            </div>
                <Showcard showLogin={this.state.showLogin} />
            </div>			
			
		);
	}

}

export default LoginRegister