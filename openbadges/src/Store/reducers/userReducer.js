import Client from '../actions/ClientActions';

export default function reducer(state={
    login: false,
    entityId:'',
    firstName: '',
    lastName: '',
    email: '',
    network: 'org.acme.empty', //hardcoded for now
    role: '',
    issuers: [],
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
                    login: action.login,
            }

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
                        "issuers": [1001],
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
                        "role": state.role,
                    }
                ]
            }

            //create new user to blockchain
            Client.create(state.role, data);
            console.log('to blockchain, new user: ',data)
            return state;
        }
        case "LOGIN" : {

            state = {...state,
                entityId: action.payload.entityId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                login: action.login,
                email: action.payload.email,
                role: action.payload.role,
                issuers: action.payload.issuers, // store issuers under current user
            }
            return state;
        }
        default:
            return state
    }
    return state;
};