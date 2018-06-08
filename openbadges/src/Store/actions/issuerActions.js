import axios from 'axios';
import Client from '../actions/ClientActions';

//This could be done more effective by using queries.
// @Kasper - There is a "filter" option where you can add queries to filter.
function GetBadges(issuer, entityId){
    return new Promise( (resolve, reject) => {
        Client.search('BadgeClass').then(data => {
            //store Badges CREATED by user to own array
            let userBadges = []
            userBadges.push(data.filter(badge => badge.teacher ===  "resource:org.acme.empty.Teacher#" + entityId))

            //store Badges from each issuer to own array
            let issuerBadges = []
            var i;
            for(i = 0; i < issuer.length; i++){
                issuerBadges.push(data.filter(badge => badge.issuer === "resource:org.acme.empty.Issuer#" + issuer[i].entityId))
            }
            //return all badges
            resolve({
                issuerBadges: issuerBadges,
                userBadges: userBadges,
            })
        })
    })
}

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

const Badge = { awardBadge, getAllIssuedBadges,GetBadges };
export default Badge;