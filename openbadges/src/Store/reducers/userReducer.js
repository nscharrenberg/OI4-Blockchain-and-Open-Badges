import Client from '../actions/ClientActions';
import Badge from '../actions/badgeActions';

export default function reducer(state={
    login: false,
    entityId:'',
    firstName: '',
    lastName: '',
    email: '',
    network: 'org.acme.empty', //hardcoded for now
    role: '',
    issuers: [],
    badges: [],
    staff: []
}, action) { 
    switch(action.type) {
        case "NEW_USER" : {
            
            state = {
                ...state, 
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName, 
                    email: action.payload.emails, 
                    role: action.payload.role,
                    entityId: action.payload.entityId,
                    login: action.login
            }
            console.log('newuser: ',state)

            let data = [];

            if((action.payload.role == "Teacher") || (action.payload.role == "Validator")) {
                data = [
                    {
                        "$class": state.network + '.' + state.role,
                        "entityId": state.entityId,
                        "firstName": state.firstName,
                        "lastName": state.lastName,
                        "password": action.payload.password,
                        "email": state.email,
                        "role": state.role,
                        "issuers": []

                    }
                ]
            }
            if(action.payload.role == "BadgeUser") {
                data = [
                    {
                        "$class": state.network + '.' + state.role,
                        "entityId": state.entityId,
                        "firstName": state.firstName,
                        "lastName": state.lastName,
                        "password": action.payload.password,
                        "email": state.email,
                        "role": state.role
                    }
                ]
            }

            //create new user to blockchain
            Client.create(state.role, data);
            console.log('to blockchain, new user: ',data)
            return state;
        }
        case "LOGIN" : {

            if(action.payload.role == "BadgeUser") {
                state = {...state,
                    entityId: action.payload.entityId,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    login: action.login,
                    email: action.payload.email,
                    role: action.payload.role,
                    badges: action.badgeData
                }
            return state;
            }

            if((action.payload.role == "Teacher") || (action.payload.role == "Validator")) {
                state = {...state,
                    entityId: action.payload.entityId,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    login: action.login,
                    email: action.payload.email,
                    role: action.payload.role,
                    issuers: action.payload.issuers,
                    staff: action.staffData,
                    badges: action.badgeData[0]
                }
                console.log('after login state:',state)
                return state;
            }
        }
        case "NEW_ISSUER" : {
            //store new issuer to user state
            let toState = {
                        $class: 'org.acme.empty.Issuer', //hardcoded, need to be fixed, somewhere, somehow
                        name: action.payload.name,
                        description: action.payload.description,
                        url: action.payload.url,
                        entityId: action.id.toString(),
                        email: action.payload.email,
                        role: 'Issuer'
            }

            state = {...state,
                issuers: [...state.issuers, toState]
            }

            console.log("I stored new issuer to state and this is: " ,state)

            //WORKING store new issuer POST to blockchain
            const transactionNameIssuer = 'Issuer';
            let dataToIssuer = [
                {
                    "$class": state.network + '.' + transactionNameIssuer,
                    "entityId": action.id.toString(),
                    "name": action.payload.name,
                    "email": action.payload.email,
                    "description": action.payload.description,
                    "url": action.payload.url,
                    "role": action.payload.role
                }
            ];
            console.log("new issuer to b:",transactionNameIssuer,'data to b: ',dataToIssuer)
            
            Client.create(transactionNameIssuer, dataToIssuer).then(() => {
                alert("New Issuer " + action.payload.name + " created!")

                //attach PUT new issuer to current user in blockchain
                let dataToLinkUser = 
                    {
                      "$class": state.network + '.' + state.role,
                      "firstName": state.firstName,
                      "lastName": state.lastName,
                      "password": "dummyForNow",
                      "email": state.email,
                      "role": state.role,
                      "issuers": state.issuers
                    };

                let type = state.role + '/' + state.entityId
                Client.put(type, dataToLinkUser)
                console.log('put to b ! type is: ',type,'dataToLinkUser:', dataToLinkUser)
                alert("You are now part of issuer organisation " + action.payload.name)
                console.log("MY INFO:", state)
            });
        }
    }
    return state;
};