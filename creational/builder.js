/**
 * In order to simplify the building of complicated concrete classes and encapsulate the knowledge about
 * building them away from the consumer.
 *
 * Tournaments are an example of a complicated class. Each tournament has a complicated setup involving
 * the events, the attendees, and the prizes. Much of the setup for these tournaments are similar:
 * each has a joust, archery, and a melee. Creating a tournament from multiple places in the code means
 * that the responsibility for knowing how to construct a tournament is distributed. If there is a need
 * to change the initiation code then it must be done in a lot of different places.
 *
 * Employing a builder pattern avoids this issue by centralizing the logic necessary to build the object.
 *
 * Starting with some utilities which will represent the parts of a tournament
 */

const Westros = {};

const Event = (function () {
  function Event(name) {
    this.name = name;
  }

  return Event;
})();

Westros.Event = Event;

const Prize = (function () {
  function Prize(name) {
    this.name = name;
  }

  return Prize;
})();

Westros.Prize = Prize;

const Attendee = (function () {
  function Attendee(name) {
    this.name = name;
  }

  return Attendee;
})();

Westros.Attendee = Attendee;

/**
 * The tournament class is a very simple class, as we don't want to assign of the public properties explicitly.
 */

const Tournament = (function () {
  function Tournament(attendees = [], events = [], prizes = []) {
    this.attendees = attendees;
    this.events = events;
    this.prizes = prizes;
  }

  return Tournament;
})();

Westros.Tournament = Tournament;

/**
 * Implementing two builders which create different tournaments
 */

const LannisterTournamentBuilder = (function () {
  function LannisterTournamentBuilder() {}

  LannisterTournamentBuilder.prototype.build = function () {
    const attendees = [new Attendee("Jamie")];
    const events = [new Event("Joust"), new Event("Melee")];
    const prizes = [new Prize("Gold"), new Prize("More Gold")];
    const tournament = new Tournament(attendees, events, prizes);

    return tournament;
  };

  return LannisterTournamentBuilder;
})();

Westros.LannisterTournamentBuilder = LannisterTournamentBuilder;

const BaratheonTournamentBuilder = (function () {
  function BaratheonTournamentBuilder() {}
  BaratheonTournamentBuilder.prototype.build = function () {
    const attendees = [new Attendee("Stannis"), new Attendee("Robert")];
    const events = [new Event("Joust"), new Event("Melee")];
    const tournament = new Tournament(attendees, events);

    return tournament;
  };

  return BaratheonTournamentBuilder;
})();

Westros.BaratheonTournamentBuilder = BaratheonTournamentBuilder;

/**
 * Finally, the director, or as we're calling it TournamentBuilder, simply takes a builder
 * and executes it.
 */

const TournamentBuilder = (function () {
  function TournamentBuilder() {}

  TournamentBuilder.prototype.build = function (builder) {
    return builder.build();
  };

  return TournamentBuilder;
})();

const director = new TournamentBuilder();

const lannisterTournament = director.build(new LannisterTournamentBuilder());
const baratheonTournament = director.build(new BaratheonTournamentBuilder());
