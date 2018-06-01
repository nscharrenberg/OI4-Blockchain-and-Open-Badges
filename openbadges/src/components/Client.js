import axios from 'axios';

function getBadges(data) {

  return data = {
      "$class": "org.acme.empty.BadgeClass",
      "entityId": "string",
      "name": "string",
      "imageUrl": "google.com",
      "description": "default description.",
      "criteriaUrl": "google.com",
      "issuer": {
        "$class": "org.acme.empty.Issuer",
        "entityId": "string",
        "name": "string",
        "email": "string",
        "description": "string",
        "url": "string"
      },
      "teacher": {
        "$class": "org.acme.empty.Teacher",
        "entityId": "string",
        "firstName": "string",
        "lastName": "string"
      },
      "accepted": "false"
  }



  axios.post('http://192.168.27.142:3000/api/org.acme.empty.BadgeUser', {data})
  .then(res => {
        console.log(res);
  })
  .catch(err => {
        console.log(err);
  })
}

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