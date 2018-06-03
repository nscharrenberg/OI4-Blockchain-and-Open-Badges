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
                    entityId: action.id
            }

            //create new user to blockchain
            const data = [
                {
                    "$class": state.network + '.' + state.role,
                    "entityId": action.id.toString(),
                    "firstName": state.firstName,
                    "lastName": state.lastName,
                    //"emails": state.email, // needed in API for all users
                }
            ]

            Client.create(state.role, data);
            return state;
        }
        case "LOGIN" : {
            console.log('also login case got it!')
            state = {...state,
                entityId: action.payload.entityId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                //and all other info when API is ok
                //role:
                //email:

            }
            return state;
        }
        default:
            return state
    }
    return state;
};