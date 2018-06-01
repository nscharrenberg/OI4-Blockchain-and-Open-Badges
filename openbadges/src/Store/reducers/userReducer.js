export default function reducer(state={
    firstName: '',
    lastName: '',
    email: '',
    username: ''
}, action) {
    switch(action.type) {
        case "CHANGE_FIRSTNAME": {
            state = {...state, firstName: action.payload}
        }
        case "CHANGE_LASTNAME": {
            state = {...state, lastName: action.payload}
        }
        case "CHANGE_EMAIL": {
            state = {...state, email: action.payload}
        }
    }

    return state;
};