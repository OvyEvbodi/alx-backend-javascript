// first promise

const loadBalancer = (chinaDownload, USDownload) => {
    return Promise.race([chinaDownload, USDownload]).then(value => value)
};

export default loadBalancer;
