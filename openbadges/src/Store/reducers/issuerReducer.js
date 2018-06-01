export default function reducer(state={
    name: 'My issuing Org',
    description: 'My issuing organization has this description',
    www: 'http://www.example.com',
    img: './img/fontys_logo.png',
}, action) {
    console.log('issuerReducer got it');
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload}
        }
        case "CHANGE_DESCRIPTION": {
            state = {...state, description: action.payload}
        }
        case "CHANGE_WEBSITE": {
            state = {...state, www: action.payload}
        }
        case "CHANGE_IMAGE": {
            state = {...state, img: action.payload}
        }
    }

    return state;
};