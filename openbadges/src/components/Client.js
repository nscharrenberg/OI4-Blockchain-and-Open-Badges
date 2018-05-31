function getIssuerData() {
  const data = {
    issuer: {
      name: 'Kasper Is King',
      description: 'Some Description here. Lorem ipsum ja sitä rataa. Some Description here. Lorem ipsum ja sitä rataa.',
      www: 'http://www.example.com',
      img: './img/fontys_logo.png',
    },
  }
  
  return data
}

function search(query, cb) {
    return new Promise( (resolve,reject) => {
        return fetch(`api/${query}`, {
            accept: "application/json"
        })
            .then(parseJSON)
            .then(data => resolve(data));
    })
}

function create(type, data){
    return new Promise((resolve, reject) => {
        return fetch(`api/${type}`, {
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

const Client = { search, create, getIssuerData };
export default Client;