/**
 * In software, we may need to make use of a class that does not perfectly fit the required interface.
 * The class may be missing methods or may have additional methods we would like to hide.
 * This occurs frequently when dealing with third-party code. In order to make it comply with the interface
 * needed in your code, an adapter may be required.
 *
 * The adapter class is a thing piece of code that implements the required interface. It typically wraps
 * a private copy of the implementation class and proxy calls through to it.
 *
 * In the land of Westeros, much of the trade and travel is done by boat. If we look at the interface for
 * a ship in Westeros, it looks intimidating.
 */

const Ship = (function () {
  function Ship() {}

  Ship.prototype.setRudderAngleTo = function (angle) {
    console.log(`Setting Rudder Angle ${angle}`);
  };
  Ship.prototype.setSailConfiguration = function (configuration) {};
  Ship.prototype.setSailAngle = function (sailId, sailAngle) {};
  Ship.prototype.getCurrentBearing = function () {};
  Ship.prototype.getCurrentSpeedEstimate = function () {};
  Ship.prototype.shiftCrewWeightTo = function (weightShiftTo, locationId) {};

  return Ship;
})();

/**
 * We would like a much simple interface that abstracts away all the fiddly little details.
 * The adapter will have the interface of SimpleShip but it will perform actions on a wrapped
 * instance of Ship.
 */

const SimpleShipAdapter = (function () {
  function SimpleShipAdapter() {
    this._ship = new Ship();
  }

  SimpleShipAdapter.prototype.turnLeft = function () {
    this._ship.setRudderAngleTo(-30);
    this._ship.setSailAngle(3, 12);
  };

  SimpleShipAdapter.prototype.turnRight = function () {
    this._ship.setRudderAngleTo(30);
    this._ship.setSailAngle(5, -9);
  };

  SimpleShipAdapter.prototype.goForward = function () {
    // do something else to the _ship
  };

  return SimpleShipAdapter;
})();

const ship = new SimpleShipAdapter();
ship.goForward();
ship.turnRight();
