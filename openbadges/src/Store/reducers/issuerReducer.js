import Client from "../actions/ClientActions";

export default function reducer(state={
    network: 'org.acme.empty', //hardcoded, need to be fixed, somewhere, somehow
}, action) {
    switch(action.type) {
        case "ATTACH_USER_TO_ISSUER" : {

            const getUserData = Client.search('Validator' + '/' + action.payload.newUserId).then( data => {
                if(data.error) {
                    return Client.search('Teacher' + '/' + action.payload.newUserId).then( data => {
                        if(data.error) {
                            return Client.search('BadgeUser' + '/' + action.payload.newUserId).then( data => {
                                    if(data.error) {
                                        alert('No user with ' + action.payload.newUserId + ' found!')
                                    }
                                    else {
                                        console.log("found BadgeUser")
                                        return data
                                    }
                                })
                        } 
                        else {
                            console.log("found Teacher")
                            return data
                        }
                    })
                }
                else {
                    console.log("found Validator")
                    return data
                }
            }).then((data) => {
                let userData = data;
                const getIssuerData = Client.search('Issuer' + '/' + action.payload.issuerID).then( data => {
                    if(data.error) {
                        alert('No issuer with ID ' + action.payload.issuerID + ' found!')
                        return data
                    }
                    else {
                        console.log(data)
                        let issuerData = data
                        console.log('issuer is:',typeof(issuerData))
                        console.log('user is: ',typeof(userData.issuers))

                        let issuerObject = []
                        userData.issuers.forEach(element => issuerObject.push(element))
                        issuerObject.push(issuerData)
                        console.log(issuerObject)
                        
                        let dataToAttachUser = 
                        {
                          "$class": state.network + '.' + userData.role,
                          "firstName": userData.firstName,
                          "lastName": userData.lastName,
                          "password": "dummyForNow",
                          "email": userData.email,
                          "role": userData.role,
                          "issuers": issuerObject
                        };

                        let type = userData.role + '/' + userData.entityId
                        Client.put(type, dataToAttachUser)
                        console.log('put to b ! type is: ',type,'dataToAttachUser:', dataToAttachUser)

                        return data
                    }
                })
            })
        }
    }
    return state;
};