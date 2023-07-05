const createInt8TypedArray = (length, position, value) => {
    const buffer = new ArrayBuffer(length);
    if (position < length) {
        const dv = new DataView(buffer);
        dv.setInt8(position, value)
        return dv;
    }
     throw new Error('Position outside range');   
};

export default createInt8TypedArray;
