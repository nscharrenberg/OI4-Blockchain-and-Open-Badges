import Client from '../actions/ClientActions';

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
    switch(action.type) {
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
            console.log(data)
            alert('New Badge Created')
        }
        case "VALIDATE_BADGE": {
            //NOT WORKING
            const transactionName = 'validateNewBadge'
            const data = [
                {
                  "$class": state.network + '.' + transactionName,
                  "entityId": "ARGH" + new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString(),
                  "badgeId": action.payload.entityId,
                  "validatorId": action.validatorId,
                  "teacherId": action.payload.teacher.split('#')[1],
                  "validated": "true",
                  "timestamp": new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
                }
            ]
            Client.create(transactionName, data);
            console.log(data)
            alert('Badge Validated!')
        }
    }

    return state;
};