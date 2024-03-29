export class Student {
    constructor(_id, _completeName, _age, _height, _weight) {
        this._id = _id;
        this._completeName = _completeName;
        this._age = _age;
        this._height = _height;
        this._weight = _weight;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get completeName() {
        return this._completeName;
    }
    set completeName(value) {
        this._completeName = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
