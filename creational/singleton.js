/**
 * Singleton is used when a global variable is desirable, but Singleton provides a protection
 * against accidentally creating multiple copies of complex objects. It also allows for
 * the deferral of object instantiation until the first use.
 *
 * In the far north of Westros there is a giant wall constructed to keep an ancient enemy at bay.
 * There is only one of these walls and it should pose no issue having it in the global scope.
 */

let Westeros;

(function (Westeros) {
  const Wall = (function () {
    function Wall() {
      this.height = 0;

      if (Wall._instance) {
        return Wall._instance;
      }

      Wall._instance = this;
    }

    Wall.prototype.setHeight = function (height) {
      this.height = height;
    };

    Wall.prototype.getStatus = function () {
      console.log(`Wall is ${this.height} meters tall.`);
    };

    Wall.getInstance = function () {
      if (!Wall._instance) {
        Wall._instance = new Wall();
      }

      return Wall._instance;
    };

    Wall._instance = null;

    return Wall;
  })();

  Westeros.Wall = Wall;
})(Westeros || (Westeros = {}));

const wallOne = Westeros.Wall.getInstance();
const wallTwo = Westeros.Wall.getInstance();
