const BasePlane = require('./BasePlane');

class ExperimentalPlane extends BasePlane {

  constructor({model, maxSpeed, maxFlightDistance, maxLoadCapacity, experimentalType, classificationLevel}) {
    super({model, maxSpeed, maxFlightDistance, maxLoadCapacity});
    this._experimentalType = experimentalType;
    this._classificationLevel = classificationLevel;
  }

  get experimentalType() {
    return this._experimentalType;
  }

  get classificationLevel() {
    return this._classificationLevel;
  }
}

module.exports = ExperimentalPlane;
