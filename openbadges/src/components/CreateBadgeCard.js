import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '0em 1.5em 0em 1.5em',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cover: {
    alignText: 'center',
    padding: '5px',
    margin: '10px',
    minWidth: 151,
    height: 151,
    backgroundColor: '#cecece',
  },
  controls: {
    display: 'flex',
    alignItems: 'left',
    marginTop: '20px',
  },
  awardButton: {
    marginRight: '15px',
    backgroundColor: 'lightgrey',
  },  
  badgeInfo: {
    marginTop: '15px',
  },
  verificationButton: {
    marginRight: '15px',
    float: 'left',
  },
  textField: {
    marginBottom: '15px',
    width: 200,
  },
  imageTxt: {
    marginTop: '25%',
    textAlign: 'center',
  },
    input: {
    display: 'none'
    }
});


class CreateBadgeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHash: '',
            badgeName: '',
            badgeDescription: '',
            badgeCriteria: '',
        }

        this.handeImgHash = this.handeImgHash.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        //Client.createBadge(data);
        console.log(data);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    };

    render () {
        const { classes, theme } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <form onSubmit={this.handleSubmit}>
                    <CardMedia className={classes.cover}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="raised" component="div" className={classes.imageTxt}>
                                <i className="material-icons" style={{fontSize: '48px'}}>cloud_upload</i>
                                <Typography variant="body">UPLOAD IMAGE</Typography>
                            </Button>
                        </label>
                        
                    </CardMedia>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                                <Typography variant="subheading" color="textSecondary">
                                    Badge Name:
                                </Typography>
                                <TextField
                                    id="badgeName"
                                    name="badgeName"
                                    value={this.state.name} 
                                    onChange={this.handleChange}
                                    placeholder="Name of the Badge:"
                                    className={classes.textField}
                                    margin="normal"
                                /><Typography variant="subheading" color="textSecondary">
                                Description:
                            </Typography>
                                <TextField
                                    id="badgeDescription"
                                    name="badgeDescription"
                                    defaultValue=""
                                    multiline
                                    placeholder="Description:"
                                    className={classes.textField}
                                    margin="normal"
                                /><Typography variant="subheading" color="textSecondary">
                                Criteria:
                            </Typography>
                                <TextField
                                    id="badgeCriteria"
                                    name="badgeCriteria"
                                    defaultValue=""
                                    multiline
                                    placeholder="Criteria:"
                                    className={classes.textField}
                                    margin="normal"
                                />
                            <div className={classes.controls}>
                                <Button type="submit" className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#00C853', color:'white'}}>Create Badge</Button>
                                <Button className={classes.verificationButton} variant="raised" color="success" style={{backgroundColor: '#F44336', color:'white'}}>Cancel</Button>
                            </div>
                        </CardContent>
                    </div>
                    </form>
                </Card>
            </div>
        );
    }
}

CreateBadgeCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CreateBadgeCard);