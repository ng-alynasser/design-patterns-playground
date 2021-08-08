/**
 * The factory pattern allows a class to request a new instance of an interface without the class
 * making decisions about which implementation of the interface to use. The factory may use some
 * strategy to select which implementation to return. Sometimes this strategy is simply to take
 * a string parameter or to examine some global setting to act as a switch.
 *
 * In our example world of Westros there are plenty of times when we would like to defer the choice
 * of implementation to a factory. Just like the real world, Westros has a vibrant religious culture
 * with dozens of competing religions worshiping a wide variety of gods. When praying in each religion,
 * different rules must be followed.
 *
 * Let's start with creating a number of different gods to which prayers can be offered.
 */

const WateryGod = (function () {
  function WateryGod() {}

  WateryGod.prototype.prayTo = function () {
    console.log("Praying to watery god");
  };

  return WateryGod;
})();

const AncientGods = (function () {
  function AncientGods() {}

  AncientGods.prototype.prayTo = function () {
    console.log("Praying to ancient gods");
  };

  return AncientGods;
})();

const DefaultGod = (function () {
  function DefaultGod() {}

  DefaultGod.prototype.prayTo = function () {
    console.log("Praying to default gold");
  };

  return DefaultGod;
})();

/**
 * There is no need to ensure that each of gods implements an interface, no we'll need a factory,
 * which is responsible for constructing each of the different gods.
 */

const GodFactory = (function () {
  function GodFactory() {}

  GodFactory.build = function (godName) {
    switch (godName) {
      case "watery":
        return new WateryGod();
      case "ancient":
        return new AncientGods();
      default:
        return new DefaultGod();
    }
  };

  return GodFactory;
})();

/**
 * The last step we need to pass a string that denotes which religion we wish to observe and
 * the factory will construct the correct god and return it.
 */

const Prayer = (function () {
  function Prayer(godName) {
    GodFactory.build(godName).prayTo();
  }

  return Prayer;
})();

const prayToAncientGods = new Prayer("ancient");
