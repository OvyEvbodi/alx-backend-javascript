// async
import { uploadPhoto, createUser } from './utils.js';

const asyncUploadUser = async () => {
    try {
        const user = await createUser();
        const photo = await uploadPhoto();
        return { photo, user };
    } catch (error) {
        return {photo: null, user: null};
    }
};

export default asyncUploadUser;
