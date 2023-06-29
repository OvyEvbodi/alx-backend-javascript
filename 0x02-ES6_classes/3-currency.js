// Implements a class named Currency

const Currency = class {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }
    
    // get the name of the Currency
    get name() {
        return this._name;
    }
    // set the name of the Currency
    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string')
        }
        this._name = name;
    }
   // get the code of the Currency
    get code() {
        return this._code;
    }
    // set the code of the Currency
    set code(code) {
        if (typeof code !== 'string') {
            throw new TypeError('code must be a string')
        }
        this._code = code;
    }
    

    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
    
};

export default Currency;
