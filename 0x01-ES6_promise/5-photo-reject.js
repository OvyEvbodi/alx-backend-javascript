// rejected promise

const uploadPhoto = fileName => {
    return Promise.reject(Error(`${fileName} cannot be processed`));
};

export default uploadPhoto;
