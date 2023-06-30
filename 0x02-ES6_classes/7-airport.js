// Implements an Airport

const Airport = class {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    // get the name of the Airport
    get name() {
        return this._name;
    }
    
    // get the name of the Airport
    set name(value) {
        this._name = value;
    }

    // get the code of the Airport
    get code() {
        return this._code;
    }

    // get the code of the Airport
    set code(value) {
        this._code = value;
    }

    // get the string representation of the airport's symbol 
    get [Symbol.toStringTag]() {
        return this._code;
    }
}

export default Airport;
