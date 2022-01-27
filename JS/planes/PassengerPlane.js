const BasePlane = require('./BasePlane');

class PassengerPlane extends BasePlane {

  constructor({model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity}) {
    super({model, maxSpeed, maxFlightDistance, maxLoadCapacity});
    this._passengersCapacity = passengersCapacity;
  }

  get passengersCapacity() {
    return this._passengersCapacity;
  }
}

module.exports = PassengerPlane;
