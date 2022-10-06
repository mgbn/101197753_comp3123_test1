resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success!' });
        }, 500);
    });
}


rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ 'error': 'delayed exception!' });
        }, 500);
    });
}



resolvedPromise().then(res => console.log(res))

rejectedPromise().catch(err => console.log(err))