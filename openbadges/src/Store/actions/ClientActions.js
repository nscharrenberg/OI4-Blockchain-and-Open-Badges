/*function findAllUsers(id) {
    return new Promise( (resolve, reject) => {
        let allTeacher = [];
        let allValidators = [];
        let allBadgeUsers = [];
        let allUsers = [];

        allTeacher = new Promise( (resolve,reject) => {
            //network name hardcoded, can be read also for userReducer
            return fetch("http://192.168.27.142:3000/api/queries/getAllTeachers", {
                accept: "application/json"
            })
                .then(parseJSON)
                .then(data => {
                        data.map((user, i) => {
                            var temp = {entityId: user.entityId, 
                                        userName: user.firstName + ' ' + user.lastName,
                                        userEmail: user.email, 
                                    }
                            allUsers.push(temp);
                        });
                    resolve(data)
                });    
            });

        allValidators = new Promise( (resolve,reject) => {
            //network name hardcoded, can be read also for userReducer
            return fetch("http://192.168.27.142:3000/api/queries/getAllValidators", {
                accept: "application/json"
            })
                .then(parseJSON)
                .then(data => {
                        data.map((user, i) => {
                            var temp = {entityId: user.entityId, 
                                        userName: user.firstName + ' ' + user.lastName,
                                        userEmail: user.email, 
                                    }
                            allUsers.push(temp);
                        });
                    resolve(data)
                }); 
        });

        allBadgeUsers = new Promise( (resolve,reject) => {
            //network name hardcoded, can be read also for userReducer
            return fetch("http://192.168.27.142:3000/api/org.acme.empty.BadgeUser", {
                accept: "application/json"
            })
                .then(parseJSON)
                .then(data => {
                        data.map((user, i) => {
                            var temp = {entityId: user.entityId, 
                                        userName: user.firstName + ' ' + user.lastName,
                                        userEmail: user.email, 
                                    }
                            allUsers.push(temp);
                        });
                    resolve(data)
                }); 
        });
        //console.log(allUsers);
        resolve(allUsers);
    })
};*/

function findUser(id) {

    let found = false;
    let query = 'BadgeUser' + '/' + id;

    while(found) {
        new Promise( (resolve, reject) => {
            search(query).then(data => {
                console.log(data)
                found = true
                resolve(data);
            }).then(data => {
                reject('error')
            })
        });
    }

    
}

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

const Client = { search, create, findUser };
export default Client;