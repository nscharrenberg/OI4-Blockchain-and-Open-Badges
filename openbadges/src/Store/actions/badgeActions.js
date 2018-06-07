import axios from 'axios';

export function changeName(name) {
    console.log('I got it');
    return {
        type: "CHANGE_NAME",
        payload: {
            name: name
        }
    }
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

const Badge = { awardBadge, getAllIssuedBadges };
export default Badge;