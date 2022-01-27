const MilitaryPlane = require('./planes/MilitaryPlane');
const PassengerPlane = require('./planes/PassengerPlane');

class Airport {

  constructor(planes) {
    this._planes = planes;
  }

  get planes() {
    return this._planes;
  }

  getPlanesByType(planeType) {
    return this.planes.filter(plane => plane instanceof planeType);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    const passengerPlanes = this.getPlanesByType(PassengerPlane);
    let planeWithMaxCapacity = passengerPlanes[0];
    for (let i = 0; i < passengerPlanes.length; i++) {
      if (passengerPlanes[i].passengersCapacity > planeWithMaxCapacity.passengersCapacity) {
        planeWithMaxCapacity = passengerPlanes[i];
      }
    }
    return planeWithMaxCapacity;
  }

  getMilitaryPlanesByType(militaryType) {
    return this.getPlanesByType(MilitaryPlane).filter(plane => plane.militaryType === militaryType);
  }

  sortByMaxFlightDistance() {
    this.planes.sort((a, b) => b.maxFlightDistance - a.maxFlightDistance);
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((a, b) => b.maxSpeed - a.maxSpeed);
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) => b.maxLoadCapacity - a.maxLoadCapacity);
    return this;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
