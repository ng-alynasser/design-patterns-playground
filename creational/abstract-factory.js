/**
 * Abstract factory is intended to create kits of objects without knowing the concrete types
 * of the objects.
 *
 * Our system:
 * - For the kingdom, the ruling house changes with some degree of frequency.
 * - Each house will rule the kingdom differently (with peace oor with an iron fist).
 * - The king defers some of his decisions to a second in command known as the hand of the king.
 * - The king is also advised on matters by a council, which consists of the more savvy lords.
 *
 * An issue is that, with the ruling family, changing so frequently, coupling to a concrete family
 * such as Targaryen or Lannister makes our application brittle.
 *
 * An approach to fix this is to make use of the abstract factory pattern. The abstract factory declares
 * an interface for creating an instance of the various classes related to the ruling family.
 *
 * The abstract factory class may have multiple implementations for each of the various ruling families.
 * These are known as concrete factories and each of them will implement the interface provided by the
 * abstract factory.
 *
 * The concrete factories, in return, will return concrete implementations of the various ruling families.
 * These concrete classes are known as products.
 *
 * To implement the Abstract Factory, the first thing we'll need is an implementation of the King class.
 */

let KingJoffery = (function () {
  function KingJoffery() {}

  KingJoffery.prototype.makeDecision = function () {
    console.log("King Joffery has just spoken");
  };
  KingJoffery.prototype.marry = function () {};

  return KingJoffery;
})();

/**
 * Implementation of the HandOfTheKing class
 */

let LordTywin = (function () {
  function LordTywin() {}

  LordTywin.prototype.makeDecision = function () {
    console.log("Lord Tywin has just spoken");
  };

  return LordTywin;
})();

/**
 * The concrete factory method
 */

let LannisterFactory = (function () {
  function LannisterFactory() {}

  LannisterFactory.prototype.getKing = function () {
    return new KingJoffery();
  };

  LannisterFactory.prototype.getHandOfTheKing = function () {
    return new LordTywin();
  };

  return LannisterFactory;
})();

/**
 * More concrete classes
 */

let KingAerys = (function () {
  function KingAerys() {}

  KingAerys.prototype.makeDecision = function () {
    console.log("King Aerys has just spoken");
  };
  KingAerys.prototype.marry = function () {};

  return KingAerys;
})();

let LordConnington = (function () {
  function LordConnington() {}

  LordConnington.prototype.makeDecision = function () {
    console.log("Lord Connignton has just spoken");
  };

  return LordConnington;
})();

let TargaryenFactory = (function () {
  function TargaryenFactory() {}

  TargaryenFactory.prototype.getKing = function () {
    return new KingAerys();
  };

  TargaryenFactory.prototype.getHandOfTheKing = function () {
    return new LordConnington();
  };

  return TargaryenFactory;
})();

/**
 * Making use of the Abstract Factory
 */

let CourtSession = (function () {
  function CourtSession(abstractFactory) {
    this.abstractFactory = abstractFactory;
    this.COMPLIANT_THRESHOLD = 10;
  }

  CourtSession.prototype.complaintPresented = function (complaint) {
    if (complaint.severity < this.COMPLIANT_THRESHOLD) {
      return this.abstractFactory.getHandOfTheKing().makeDecision();
    } else {
      return this.abstractFactory.getKing().makeDecision();
    }
  };

  return CourtSession;
})();

let targaryenCourtSession = new CourtSession(new TargaryenFactory());
targaryenCourtSession.complaintPresented({ severity: 8 });
targaryenCourtSession.complaintPresented({ severity: 12 });

let lannisterCourtSession = new CourtSession(new LannisterFactory());
lannisterCourtSession.complaintPresented({ severity: 7 });
lannisterCourtSession.complaintPresented({ severity: 11 });
