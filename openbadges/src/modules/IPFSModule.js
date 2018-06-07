class IPFSModule {
    
    static add(file) {
        return fetch('https://ipfs.io/ipfs/', {
            method: 'POST',
            body: file
        }).then(res => res.json());
    }
}

export default IPFSModule;