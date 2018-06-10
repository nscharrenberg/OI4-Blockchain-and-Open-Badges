import Client from "../actions/ClientActions";

export default function reducer(state={
    //this is dummy data and not needed
    network: 'org.acme.empty', //hardcoded, need to be fixed, somewhere, somehow
    name: '',
    description: '',
    url: '',
    img: './img/fontys_logo.png', //hardcoded for now
    issuerId: '',
    email: '',
}, action) {
    switch(action.type) {

    }
    return state;
};