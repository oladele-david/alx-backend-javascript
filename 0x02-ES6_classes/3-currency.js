export default class Currency {
    constructor (code, name) {
        this.code = code;
        this.name = name;
    }

    get code() {
        return this._code;
    }

    set code(code) {
        if(!(code instanceof String)) {
            throw new TypeError('code must be a string');
        }
        this._code = code;
    }

    get name() {
        this._name;
    }

    set name(name) {
        if(!(name instanceof String)) {
            throw new TypeError('name must be a string');
        }
        this._name = name;
    }

    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}