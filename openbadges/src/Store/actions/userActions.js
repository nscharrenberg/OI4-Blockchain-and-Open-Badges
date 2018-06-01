export function changeFirstName(name) {
    console.log('I got it');
    return {
        type: "CHANGE_FIRSTNAME",
        payload: {
            firstName: name
        }
    }
}

export function changeLastName(name) {
    return {
        type: "CHANGE_LASTNAME",
        payload: {
            lastName: name
        }
    }
}

export function changeEmail(email) {
    return {
        type: "CHANGE_EMAIL",
        payload: {
            email: email
        }
    }
}