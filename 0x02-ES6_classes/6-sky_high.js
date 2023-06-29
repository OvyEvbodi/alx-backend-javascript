import Building from './5-building';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this.floors = floors;
    }

   // get the floors of a Building
    get floors() {
        return this._floors;
    }

   // set the floors of a Building
    set floors(value) {
        this._floors = value;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this.floors} floors`;
    }
}
