export function changeName(name) {
    console.log('I got it');
    return {
        type: "CHANGE_NAME",
        payload: {
            name: name
        }
    }
}