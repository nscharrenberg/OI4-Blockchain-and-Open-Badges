import React from "react";
import ValidateNewBadgeCard from './ValidateNewBadgeCard';
import ValidateBadgeAwardCard from './ValidateBadgeAwardCard';
import {connect} from "react-redux";

function GetUnvalidatedBadges(props){
    const myIssuers = props.issuers;
    const staff = props.staff
    console.log('length:',props.issuerBadges.length)

    if (props.issuerBadges.length === 0) {
       return <p>No badges found!</p>
    }
    else {
        console.log(typeof(props.issuerBadges))
        if (props.issuerBadges.length >= 1) {
            let badges = props.issuerBadges.filter(badge => badge.validated == false)
            if(badges.length == 0) {
                return <p>No badges found!</p>
            }
            else {
                return (
                    <div>
                    {badges.map((badge, i) => (
                        <div>
                        <ValidateNewBadgeCard badge={badge} issuers={myIssuers} staff={staff} />
                        <br/>
                        </div>
                    ))}
                    </div>
                );                
            }

        }
        else {
            let badge = props.issuerBadges
            if(badge.validated == true) {
                return <p>No badges found!</p>
            }
            else {
                return (
                    <div>
                        <div>
                        <ValidateBadgeAwardCard badge={badge} issuers={myIssuers} staff={staff} />
                        <br/>
                        </div>
                    </div>
                );
            }    
        }
    }
}

function GetUnvalidatedIssuedBadges(props){
    const myIssuers = props.issuers;
    const staff = props.staff

    if (props.issuedBadges.length === 0) {
       return <p>No badges found!</p>
    }
    else {
        console.log(props.issuedBadges.length)
        if (props.issuedBadges.length >= 1) {
            let badges = props.issuedBadges.filter(badge => badge.validated == false)
            console.log(badges.length)
            if(badges.length == 0) {
                return <p>No badges found!</p>
            }
            else {
                return (
                    <div>
                    {badges.map((badge, i) => (
                        <div>
                        <ValidateBadgeAwardCard badge={badge} issuers={myIssuers} staff={staff} />
                        <br/>
                        </div>
                    ))}
                    </div>
                ); 
            }
        }
        else {
            let badge = props.issuedBadges
            if(badge.validated == true) {
                return <p>No badges found!</p>
            }
            else {
                return (
                    <div>
                        <div>
                        <ValidateBadgeAwardCard badge={badge} issuers={myIssuers} staff={staff} />
                        <br/>
                        </div>
                    </div>
                );
            }    
        }
    }
}

class ValidateBadges extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>New Badges to be Validated</h1>
                <GetUnvalidatedBadges 
                    issuerBadges={this.props.issuerBadges}
                    issuedBadges={this.props.issuedBadges}
                    userBadges={this.props.userBadges}  
                    issuers={this.props.issuers} 
                    staff={this.props.staff}/>
                <h1>Issued Badges to be Validated</h1>
                <GetUnvalidatedIssuedBadges 
                    issuerBadges={this.props.issuerBadges}
                    issuedBadges={this.props.issuedBadges}
                    userBadges={this.props.userBadges}  
                    issuers={this.props.issuers} 
                    staff={this.props.staff}
                    />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        issuers: state.userClass.issuers,
        firstname: state.userClass.firstname,
        lastname: state.userClass.lastname,
        entityId: state.userClass.entityId,
        issuerBadges: state.badgeClass.issuerBadges,
        issuedBadges: state.badgeClass.issuedBadges,
        userBadges: state.badgeClass.userBadges,
        staff: state.userClass.staff
    }
}

export default connect(mapStateToProps)(ValidateBadges);