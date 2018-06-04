import Client from '../../components/Client.js'

export default function reducer(state={
    network: 'org.acme.empty', //hardcoded, need to be fixed, somewhere, somehow
    /*name: 'My Default Name',
    imageUrl: 'Lover88',
    description: 'react@love.com',
    criteriaUrl: 'peppupano',
    issuer: '',
    teachers: [],
    validators: [],
    validated: ''*/
}, action) {
    console.log('badgeReducer got it');
    switch(action.type) {
        /*case "CHANGE_NAME": {
            state = {...state, name: action.payload}
        }
        case "CHANGE_IMAGE": {
            state = {...state, imageUrl: action.payload}
        }
        case "CHANGE_DESCRIPTION": {
            state = {...state, description: action.payload}
        }
        case "CHANGE_CRITERIA": {
            state = {...state, criteriaUrl: action.payload}
        }*/
        case "NEW_BADGE": {
            //create new badge to blockchain
            const transactionName = 'NewBadge'
            const data = [
                {
                  "$class": state.network + '.' + transactionName,
                  "entityId": action.id.toString(),
                  "name": action.payload.badgeName,
                  "imageUrl": action.payload.imgHash,
                  "description": action.payload.badgeDescription,
                  "criteriaUrl": action.payload.badgeCriteria,
                  "issuerId": action.payload.issuerId,
                  "teacherId": action.payload.entityId,
                  "timestamp": new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
                }
            ]
            Client.create(transactionName, data);
        }
    }

    return state;
};