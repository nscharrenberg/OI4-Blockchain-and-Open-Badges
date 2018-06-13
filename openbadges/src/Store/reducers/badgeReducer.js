import Client from '../actions/ClientActions';
import Badge from '../actions/badgeActions';


export default function reducer(state={
    network: 'org.acme.empty', //hardcoded, need to be fixed, somewhere, somehow
    awardingBadgeId: '',
    badgeIssuerId: '',
    issuerBadges: [],
    issuedBadges: [],
    userBadges: []

}, action) {
    switch(action.type) {
        case "LOGIN": {
          console.log('badges from b:',action.badgeData)
            if(action.payload.role == "BadgeUser") {
                state = {...state,
                    userBadges: action.badgeData[0].userBadges
                }
                console.log('after login state badge:',state)
            return state;
            }

            if((action.payload.role == "Teacher") || (action.payload.role == "Validator")) {
                state = {...state,
                    issuerBadges: action.badgeData[0].issuerBadges,
                    issuedBadges: action.badgeData[0].issuedBadges,
                    userBadges: action.badgeData[0].userBadges,
                }
                console.log('after login state badge:',state)
                return state;
            }          
          return state
        }

        case "NEW_BADGE": {
            const transactionName = 'NewBadge'
            const data = [
                {
                  "$class": state.network + '.' + transactionName,
                  "entityId": action.id,
                  "name": action.payload.badgeName,
                  "imageUrl": 'https://badgr-io-media.s3.amazonaws.com/uploads/badges/issuer_badgeclass_da2d8fbd-f17b-4bb4-afe9-4b62c2d8f549.png',
                  "description": action.payload.badgeDescription,
                  "criteria": action.payload.badgeCriteria,
                  "issuerId": action.payload.issuerIdToBadge,
                  "teacherId": action.payload.entityId,
                  "timestamp": new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
                }
            ]

            let badgeData = []

            Client.create(transactionName, data).then(() => {
              Badge.GetBadges(action.payload.issuers, action.payload.entityId).then( data => {

                  console.log('from badges:',data)
                  state = {...state,
                    issuerBadges: data.issuerBadges,
                    issuedBadges: data.issuedBadges,
                    userBadges: data.userBadges
                  }

                  console.log('state after badges:',state)
                  return state
              })
            })

            return state
        }

        case "VALIDATE_NEW_BADGE": {

          console.log('validate: badge ID before b:',action)
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

            /*state = { ...state,
              issuerBadges: [...state.issuerBadges, data[0]] 
            }*/

            console.log('New Badge Validated!',transactionName, data)
            Client.create(transactionName, data).then(() => {
              Badge.GetBadges(action.stateData.issuers, action.stateData.entityId)
            }).then((data) => {

                state = {...state,
                    issuerBadges: action.badgeData[0].issuerBadges,
                    issuedBadges: action.badgeData[0].issuedBadges,
                    userBadges: action.badgeData[0].userBadges,
                }
            })

            console.log(data)
            alert('New Badge Validated! ID: ' + action.payload.entityId)
            return state
        }

        case "VALIDATE_BADGE_ISSUING": {
            //NOT WORKING
            console.log('issuing:data before b:',action.payload,action.validatorId)
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
          alert('Badge Awarded!')
        }
    }

    return state;
};