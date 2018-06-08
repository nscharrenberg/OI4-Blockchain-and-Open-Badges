import Client from "../actions/ClientActions";

export default function reducer(state={
    //this is dummy data and not needed
    network: 'org.acme.empty', //hardcoded, need to be fixed, somewhere, somehow
    name: 'My issuing Org',
    description: 'My issuing organization has this description',
    url: 'http://www.example.com',
    img: './img/fontys_logo.png',
    issuerId: '1001',
    email: 'lol@lol.com',
}, action) {
    switch(action.type) {
        case "NEW_ISSUER": {
            //create new issuer to blockchain
            const transactionName = 'Issuer'
            const data = [
                {
                    "$class": state.network + '.' + transactionName,
                    "entityId": action.id.toString(),
                    "name": action.payload.name,
                    "email": action.payload.email,
                    "description": action.payload.description,
                    "url": action.payload.url,
                    "role": action.payload.role,
                }
            ];

            Client.create(transactionName, data);
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.url = action.payload.url;
            state.img = action.payload.imgHash;
            state.issuerId = action.id.toString();
            state.email = action.payload.email;

            console.log(data);
            console.log("issuer State: " + state);
            alert('New Issuer Created')
        }
    }
    return state;
};