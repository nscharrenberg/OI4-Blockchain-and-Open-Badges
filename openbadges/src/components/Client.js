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

function create(type, data){
    console.log(type, data) 
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
        .then(() => resolve())
    })
}

function parseJSON(response) {
  return response.json();
}

const Client = { search, create };
export default Client;