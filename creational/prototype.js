/**
 * We looked at prototype for inheritance but the applicability of prototypes need not be limited to inheritance.
 * Copying existing objects can be a very useful pattern. For instance, maintaining a history of the state of
 * an object is easily done by saving previous instance created by leveraging some sort of cloning.
 *
 * In Westeros, we find that members of a family are frequently very similar. As each generation is born
 * it is easier to create the new generation through copying and modifying an existing family member than
 * to build one from scratch.
 */

let Westeros;

(function (Westeros) {
  (function (Families) {
    const Lannister = (function () {
      function Lannister() {}

      Lannister.prototype.clone = function () {
        const clone = new Lannister();
        for (let attr in this) {
          clone[attr] = this[attr];
        }

        return clone;
      };

      return Lannister;
    })();
    Families.Lannister = Lannister;
  })(Westeros.Families || (Westeros.Families = {}));
})(Westeros || (Westeros = {}));

const jamie = new Westeros.Families.Lannister();
jamie.swordSkills = 9;
jamie.charm = 6;
jamie.wealth = 10;

const tyrion = jamie.clone();
tyrion.charm = 2;
