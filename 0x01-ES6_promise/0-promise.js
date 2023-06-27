// Returns a promise

export default function getResponseFromAPI() {
    const newPromise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('I kept my promise');
            reject('we broke up');
        }, 100);
    })
    return newPromise;
}

