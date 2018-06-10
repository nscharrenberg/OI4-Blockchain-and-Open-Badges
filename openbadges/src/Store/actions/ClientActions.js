function search(query, cb) {
    return new Promise( (resolve,reject) => {
        //network name hardcoded, can be read also for userReducer
        return fetch(`http://192.168.27.142:3000/api/org.acme.empty.${query}`, {
            accept: "application/json"
        })
            .then(parseJSON)
            .then(data => resolve(data));
    })
}

function searchById(query, id, cb) {
    return new Promise( (resolve,reject) => {
        //network name hardcoded, can be read also for userReducer
        return fetch(`http://192.168.27.142:3000/api/org.acme.empty.${query}/${id}`, {
            accept: "application/json"
        })
            .then(parseJSON)
            .then(data => resolve(data))
    })
}

function query(query, cb) {
    return new Promise( (resolve, reject) => {
        return fetch(`http://192.168.27.142:3000/api/queries/${query}`, {
            accept: "application/json"
        })
            .then(parseJSON)
            .then(data => resolve(data))
    })
}

function create(type, data){
    console.log("this is from client.create: ",type, data);
    console.log("this is from client.create JSONSTRTING: ",type, JSON.stringify(data));
    return new Promise((resolve, reject) => {
        return fetch(`http://192.168.27.142:3000/api/org.acme.empty.${type}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(parseJSON)
            .then(function(data) {
                console.log('Request succeeded with JSON response', data);
              }).catch(function(error) {
                console.log('Request failed', error);
              })
            .then(() => resolve())
    })
}

function put(type, data){
    console.log("this is from client.put: ",type, data);
    console.log("this is from client.put JSONSTRTING: ",type, JSON.stringify(data));
    return new Promise((resolve, reject) => {
        return fetch(`http://192.168.27.142:3000/api/org.acme.empty.${type}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(data)
        })
            .then(parseJSON)
            .then(function(data) {
                console.log('Request succeeded with JSON response', data);
              }).catch(function(error) {
                console.log('Request failed', error);
              })
            .then(() => resolve())

    })
}

function parseJSON(response) {
    return response.json();
}

const Client = { search, create, query, put, searchById };
export default Client;