export default function reducer(state={
    name: 'My Default Name',
    imageUrl: 'Lover88',
    description: 'react@love.com',
    criteriaUrl: 'peppupano',
    issuer: '',
    teachers: [],
    validators: [],
    validated: ''
}, action) {
    console.log('badgeReducer got it');
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload}
        }
        case "CHANGE_IMAGE": {
            state = {...state, imageUrl: action.payload}
        }
        case "CHANGE_DESCRIPTION": {
            state = {...state, description: action.payload}
        }
        case "CHANGE_CRITERIA": {
            state = {...state, criteriaUrl: action.payload}
        }
    }

    return state;
};