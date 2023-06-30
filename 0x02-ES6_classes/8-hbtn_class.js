// Implements a class named HolbertonClass

const HolbertonClass = class {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // get the size of the HolbertonClass
    get size() {
        return this._size;
  }

    // set the size of the HolbertonClass
    set size(value) {
        this._size = value;
    }
    
    // get the location of the HolbertonClass  
    get location() {
        return this._location;
    } 
    // set the location of the HolbertonClass 
    set location(value) {
        this._location = value;
    }
    
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.size;
        }
        if (hint === 'string') {
            return this.location;
        }
        return this;
    }
}

export default HolbertonClass;
