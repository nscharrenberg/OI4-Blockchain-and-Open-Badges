import Client from '../../components/Client.js'

export default function reducer(state={
    login: false,
    entityId:'',
    firstName: '',
    lastName: '',
    email: '',
    username: '', 
    network: 'org.acme.empty', //hardcoded for now
    role: '', 
}, action) { 
    switch(action.type) {
        case "NEW_USER" : {
            
            state = {
                ...state, 
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName, 
                    email: action.payload.emails, 
                    username: action.payload.username,
                    role: action.payload.role,
                    entityId: action.id,
                    login: action.login
            }

            //create new user to blockchain
            const data = [
                {
                    "$class": state.network + '.' + state.role,
                    "entityId": action.id.toString(),
                    "firstName": state.firstName,
                    "lastName": state.lastName,
                    "password": action.payload.password,
                    "email": state.email,
                    "role": state.role,
                    "issuers": [],
                }
            ]

            Client.create(state.role, data);
            console.log('for b: ',data)
            return state;
        }
        case "LOGIN" : {
            console.log('also login case got it!')
            state = {...state,
                entityId: action.payload.entityId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                login: action.login,
                email: action.payload.email,
                role: action.payload.role, 

            }
            return state;
        }
        default:
            return state
    }
    return state;
};