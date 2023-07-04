const setFromArray = (arg) => {
    if (Array.isArray(arg)) {
        const mySet = new Set(arg)
        return mySet;
    }
};

export default setFromArray;
