export default function reducer(state={
    firstName: 'My Default Name',
    lastName: 'Lover88',
    email: 'react@love.com',
    username: 'peppupano'
}, action) { 
    console.log('userReducer got it');
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