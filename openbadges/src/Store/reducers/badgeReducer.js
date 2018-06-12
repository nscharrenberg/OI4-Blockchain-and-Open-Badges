import Client from '../actions/ClientActions';

export default function reducer(state={
    network: 'org.acme.empty', //hardcoded, need to be fixed, somewhere, somehow
    awardingBadgeId: '',
    badgeIssuerId: '',

}, action) {
    switch(action.type) {
        case "NEW_BADGE": {
                       //create new badge to blockchain
            const transactionName = 'NewBadge'
            const data = [
                {
                  "$class": state.network + '.' + transactionName,
                  "entityId": action.id,
                  "name": action.payload.badgeName,
                  "imageUrl": action.payload.imgHash,
                  "description": action.payload.badgeDescription,
                  "criteria": action.payload.badgeCriteria,
                  "issuerId": action.payload.issuerIdToBadge,
                  "teacherId": action.payload.entityId,
                  "timestamp": new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
                }
            ]
            console.log('New Badge Created',transactionName, data)
            Client.create(transactionName, data);
            console.log(data)
            alert('New Badge Created')
            return state
        }

        case "VALIDATE_NEW_BADGE": {

          console.log('validate:data before b:',action.payload,action.validatorId)
            //NOT WORKING
            const transactionName = 'ValidateNewBadge'
            const data = [
                {
                  "$class": state.network + '.' + transactionName,
                  "newBadgeId": action.payload.entityId,
                  "validated": true,
                  "validatorId": action.validatorId,
                  "timestamp": new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
                }
            ]

            console.log('New Badge Validated!',transactionName, data)
            Client.create(transactionName, data);
            console.log(data)
            alert('New Badge Validated!')
            return state
        }

        case "VALIDATE_BADGE_ISSUING": {
            //NOT WORKING
            const transactionName = 'ValidateIssuedBadge'
            const data = [
                {
                  "$class": state.network + '.' + transactionName,
                  "IssuedBadgeId": action.payload.entityId,
                  "validated": true,
                  "validatorId": action.validatorId,
                  "timestamp": new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
                }
            ]

            console.log('New Badge Validated!',transactionName, data)
            Client.create(transactionName, data);
            alert('Badge Issuing Validated!')
            return state
        }

        case "STORE_AWARDING_BADGE_ID": {
          console.log('i got badge for awarding:',action.payload)

          state = {
            ...state,
            badgeIssuerId: action.payload.awardBadgeIdIssuerId,
            awardingBadgeId: action.payload.badgeId
          }

          console.log('award badge state',state)

          return state;
        }

        case "ISSUE_BADGE": {
          console.log('i got badge for issuing:',action.payload, action.id)

          const transactionName = 'IssueBadge';
          let issueBadgeData = [
            {
                  "$class": state.network + '.' + transactionName,
                  "entityId": action.id,
                  "badgeclassId": action.payload.awardingBadgeId,
                  "teacherId": action.payload.currentUserEntityId,
                  "recipientId": action.payload.receiverId,
                  "issuerId": action.payload.awardBadgeIdIssuerId,
                  "evidence": action.payload.receiverEvidence,
                  "timestamp": new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
            }

          ]
          
          console.log("new badge issuing to b:",transactionName,'data to b: ',issueBadgeData)
          Client.create(transactionName, issueBadgeData)

        }
    }

    return state;
};