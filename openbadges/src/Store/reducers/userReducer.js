import Client from '../../components/Client.js'

export default function reducer(state={
    entityId:'',
    firstName: '',
    lastName: '',
    email: '',
    username: '', 
    network: 'org.acme.empty',
    role: 'Teacher', // hardcoded
}, action) { 
    switch(action.type) {
        case "NEW_USER": {
            let entityId = Client.search(state.role)
                .then(data => {
                    //console.log(data.length)
                    return data.length 
                })

            state = {...state, 
                firstName: action.payload.firstName, 
                lastName: action.payload.lastName, 
                email: action.payload.emails, 
                username: action.payload.username,
                role: action.payload.role,
                entityId: ''
            }

            //console.log(action.payload);


            //create new user to blockchain
            /*const data = [
                {
                    "$class": state.network + '.' + state.role,
                    "entityId": "0003", //NEED TO FIX
                    "firstName": state.firstName,
                    "lastName": state.lastName,
                    //"emails": state.email, // needed in API for all users
                }
            ]

            Client.create(state.role, data);*/
        }
        case "LOGIN": {
            state = {...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                //role: action.payload.entityId.split('empty.')[1] // API need role
            }
        }
    }
    //console.log(state)
    return state;
};