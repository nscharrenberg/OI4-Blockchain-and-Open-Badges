import axios from 'axios';
import Client from '../actions/ClientActions';

//This could be done more effective by using queries.
function GetBadges(issuer, entityId){

    let issuedBadges = []
    let userBadges = []
    let issuerBadges = []

    return new Promise( (resolve, reject) => {
        Client.search('BadgeClass').then(data => {
            //store Badges CREATED by user to own array
            console.log('my entityId for badge search :',entityId)
            
            userBadges.push(data.filter(badge => badge.teacherId ===  entityId))

            //store Badges from each issuer to own array
            
            var i;
            for(i = 0; i < issuer.length; i++){
                issuerBadges.push(data.filter(badge => badge.issuerId === issuer[i].entityId))
            } 
        }).then(() => {
            Client.search('IssuedBadgeClass').then(data => {
                    
                    issuedBadges.push(data)

                    //return all badges
                    resolve({
                        issuedBadges: issuedBadges,
                        issuerBadges: issuerBadges,
                        userBadges: userBadges
                    })  
                })
            })
    })
}

//WE COULD FILTER RESULTS BY issuer
function GetStaff(issuer, entityId) {
    return new Promise( (resolve, reject) => {
        let allValidators = []
        let allTeacher = []
        Client.search('Teacher').then(data => {
            allTeacher.push(data)
        }).then(data => {
            Client.search('Validator').then(data => {
                allValidators.push(data)
            })
        }).then(resolve({
            allValidators: allValidators,
            allTeacher: allTeacher
        }))  
    })
}

//NOT NEEDED?
function getAllIssuedBadges() {
    return axios.get('http://192.168.27.142:3000/api/org.acme.empty.IssuedBadgeClass', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((data) => {
            return data.data;
        })
        .then((data) => Promise.resolve(data))
        .catch((error) => Promise.reject(error));
}

//NOT NEEDED?
function awardBadge(data){
    console.log(data)
    return new Promise((resolve, reject) => {
        return fetch(`http://192.168.27.142:3000/api/org.acme.empty.IssueBadge`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: {
                entityId: data.entityId,
                badgeId: data.badgeId,
                userId: data.userId,
                teacherId: data.teacherId,
                transactionId: data.transactionId
            }
        })
            .then(parseJSON)
            .then(() => resolve())
    })
}

function parseJSON(response) {
    return response.json();
}

const Badge = { awardBadge, getAllIssuedBadges,GetBadges,GetStaff };
export default Badge;