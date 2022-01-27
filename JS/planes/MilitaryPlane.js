const BasePlane = require('./BasePlane');

class MilitaryPlane extends BasePlane {

  constructor({model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType}) {
    super({model, maxSpeed, maxFlightDistance, maxLoadCapacity});
    this._militaryType = militaryType;
  }

  get militaryType() {
    return this._militaryType;
  }
}

module.exports = MilitaryPlane;
